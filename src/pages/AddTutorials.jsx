import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "./../components/Button";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import axios from "axios";
import useAuthContext from "./../hooks/useAuthContext";
import { useState } from "react";

const AddTutorials = () => {
  const [redirect, setRedirect] = useState(false);
  const { user } = useAuthContext();

  const handleAddTutorial = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const language = form.language.value.toLowerCase();
    const price = parseInt(form.price.value);
    const review = parseInt(form.review.value);
    const description = form.description.value;
    const tutorialData = {
      name: user?.displayName,
      email: user?.email,
      title,
      tutorImage: user?.photoURL,
      image,
      language,
      price,
      review,
      description,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/addTutorial`,
        tutorialData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        // succes message
        Swal.fire({
          icon: "success",
          title: "Add Tutorial",
          text: "Tutorial Added Successfully!",
        });
        setRedirect(true);
      }
    } catch (error) {
      // console.log("Error: ", error);
      // failure message
      Swal.fire({
        icon: "error",
        title: "Adding Tutorial Failed",
        text:
          error.response?.data?.message ||
          "An error occurred. Please try again later.",
      });
    }
  };

  if (redirect) {
    return <Navigate to="/myTutorials" />;
  }

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Add Tutorials</title>
        </Helmet>
      </HelmetProvider>

      {/* Add Tutorial Form */}
      <section className="max-w-4xl mx-auto w-11/12 overflow-hidden py-16 md:py-20">
        <h1 className="text-4xl font-bold text-center my-10">Add Tutorial</h1>
        {/* Add job form */}
        <form
          onSubmit={handleAddTutorial}
          className="grid grid-cols-12 gap-5 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 md:p-8 border dark:border-gray-700"
        >
          {/* Name */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Name*</span>
            </div>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Enter HR name"
              className="input input-bordered w-full"
              disabled
            />
          </label>
          {/* Email */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Email*</span>
            </div>
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="e.g. name@gmail.com"
              className="input input-bordered w-full"
              disabled
            />
          </label>
          {/* Tutorial title */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Tutorial Title*</span>
            </div>
            <input
              name="title"
              type="text"
              placeholder="Enter Tutorial Title"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* Thumbnail Image URL */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Tutorial Image*</span>
            </div>
            <input
              name="image"
              type="url"
              placeholder="Enter image link URL"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* Language */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Language*</span>
            </div>
            <input
              name="language"
              type="text"
              placeholder="Enter Language"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* Price */}
          <label className="form-control w-full col-span-12 sm:col-span-3">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              name="price"
              type="number"
              placeholder="Enter Price"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* Review */}
          <label className="form-control w-full col-span-12 sm:col-span-3">
            <div className="label">
              <span className="label-text">Review*</span>
            </div>
            <input
              name="review"
              type="number"
              defaultValue={0}
              placeholder="Enter Price"
              className="input input-bordered w-full"
              disabled
            />
          </label>
          {/* Description */}
          <label className="form-control w-full col-span-12">
            <div className="label">
              <span className="label-text">Description*</span>
            </div>
            <textarea
              name="description"
              className="textarea textarea-bordered"
              placeholder="Enter Tutorial Description"
              required
            ></textarea>
          </label>
          {/* Submit button */}
          <Button
            btnText="Add Tutorial"
            btnStyle="col-span-12 mt-4 bg-green-600 text-white hover:bg-green-500"
            btnType="submit"
          />
        </form>
        {/* ------X------ */}
      </section>
    </div>
  );
};

export default AddTutorials;
