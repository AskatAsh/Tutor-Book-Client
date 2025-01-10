import { Helmet, HelmetProvider } from "react-helmet-async";
import TutorCard from "../components/TutorCard";
import useGetTutorialsData from "../hooks/useGetTutorialsData";
import Loading from "./../components/Loading";
import ErrorMessages from "./../components/ErrorMessages";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useState } from "react";

const FindTutors = () => {
  const [sortBy, setSortBy] = useState("");
  const [
    tutorialsData,
    setTutorialsData,
    isLoading,
    errorMessage,
    getTutorialsData,
  ] = useGetTutorialsData(sortBy);

  const handleSearchTutors = async (e) => {
    e.preventDefault();
    const category = e.target.category.value.toLowerCase();

    if (!category) {
      Swal.fire({
        icon: "warning",
        title: "Empty Search Input!",
        text: "Please enter a language to search.",
      });
    } else {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/findTutorials?category=${category}`
        );

        if (response.status === 200 || response.status === 201) {
          // succes message
          console.log(response);
          setTutorialsData(response.data);
          toast.success(`${response.data.length} results found!`);
        }
      } catch (error) {
        // console.log("Error: ", error);
        // failure message
        Swal.fire({
          icon: "error",
          title: "Updating Tutorial Failed",
          text:
            error.response?.data?.message ||
            "An error occurred. Please try again later.",
        });
      }
    }
  };

  // sort tutor handler
  const handleSortTutorsByPrice = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Find Tutors</title>
        </Helmet>
      </HelmetProvider>

      {/* Tutorials from database */}
      <section className="max-w-7xl w-11/12 mx-auto py-16 md:py-20">
        <h1 className="text-2xl sm:text-4xl font-bold text-center my-10">
          Explore and Find Tutors
        </h1>
        <form
          onSubmit={handleSearchTutors}
          className="w-full mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* search input */}
          <label className="input input-bordered rounded-full flex items-center gap-2 py-7 px-0 pl-6 pr-1 max-w-xl w-full">
            <input
              name="category"
              type="text"
              className="grow bg-green-500 text-lg min-w-8"
              placeholder="Search by language (e.g. English, Bengali etc.)"
            />
            <button
              type="submit"
              className="btn btn-md btn-circle border-none flex items-center justify-center"
              title="Click or Enter"
            >
              <IoSearch size={20} />
            </button>
          </label>
          {/* select sort by price options */}
          <label className="flex items-center gap-2">
            <select
              onChange={handleSortTutorsByPrice}
              defaultValue={""}
              className="select select-bordered select-md grow text-gray-600 dark:text-gray-400"
            >
              <option value={""} disabled>
                Sort by Price
              </option>
              <option value={""}>Default</option>
              <option value={"low2high"}>Price Low to High</option>
              <option value={"high2low"}>Price High to Low</option>
            </select>
          </label>
        </form>

        {/* show tutorial data in grid */}
        {isLoading ? (
          <Loading />
        ) : errorMessage.message ? (
          <ErrorMessages
            errorMessage={errorMessage}
            onRetry={() => getTutorialsData()}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tutorialsData.map((tutorial) => (
              <TutorCard key={tutorial._id} tutorial={tutorial} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default FindTutors;
