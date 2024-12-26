import { Helmet, HelmetProvider } from "react-helmet-async";
import TutorCard from "../components/TutorCard";
import Loading from "./../components/Loading";
import ErrorMessages from "./../components/ErrorMessages";
import { useParams } from "react-router-dom";
import useGetCategoryTutors from "../hooks/useGetCategoryTutors";

const FindCategoryTutors = () => {
  const { category } = useParams();
  const [tutorialsData, isLoading, errorMessage, getTutorialsData] =
    useGetCategoryTutors(category);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Find Tutors</title>
        </Helmet>
      </HelmetProvider>

      {/* Tutorials from database */}
      <section className="max-w-7xl w-11/12 mx-auto py-16 md:py-20">
        <h1 className="text-4xl font-bold text-center my-10">
        {category.charAt(0).toUpperCase() + category.slice(1)} Tutors
        </h1>
        {/* show tutorial data in grid */}
        {isLoading ? (
          <Loading />
        ) : errorMessage.message ? (
          <ErrorMessages
            errorMessage={errorMessage}
            onRetry={() => getTutorialsData()}
          />
        ) : (
          <>
            {tutorialsData.length > 0 ? (
              <div className="grid grid-cols-12 gap-5">
                {tutorialsData.map((tutorial) => (
                  <TutorCard key={tutorial._id} tutorial={tutorial} />
                ))}
              </div>
            ) : (
              <h2 className="text-center text-3xl font-bold text-gray-500 dark:text-gray-300 px-4 md:px-6">Sorry! No data found for this Language.</h2>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default FindCategoryTutors;
