import axios from "axios";
import Button from "./../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTutorialForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleUpdateTutorial = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const tutorImage = form.tutorImage.value;
    const image = form.image.value;
    const language = form.language.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const updatedData = {
      title,
      tutorImage,
      image,
      language,
      price,
      description,
    };

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER}/updateTutorial/${state?._id}`,
        updatedData,
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
          title: "Update Tutorial",
          text: "Tutorial Updated Successfully!",
        });
        navigate("/myTutorials");
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
  };

  return (
    <div>
      {/* Add Tutorial Form */}
      <section className="max-w-4xl mx-auto w-11/12 overflow-hidden py-16 md:py-20">
        <h1 className="text-4xl font-bold text-center my-10">
          Update Tutorial
        </h1>
        {/* Add job form */}
        <form
          onSubmit={handleUpdateTutorial}
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
              defaultValue={state?.name}
              placeholder="Enter your name"
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
              defaultValue={state?.email}
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
              defaultValue={state?.title}
              placeholder="Enter Tutorial Title"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* Thumbnail URL */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Tutor Image*</span>
            </div>
            <input
              name="tutorImage"
              type="url"
              defaultValue={state?.tutorImage}
              placeholder="Enter Tutor image URL"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* Tutor Image URL */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Tutorial Image*</span>
            </div>
            <input
              name="image"
              type="url"
              defaultValue={state?.image}
              placeholder="Enter tutorial image URL"
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
              defaultValue={state?.language}
              placeholder="Enter Language"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* Price */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              name="price"
              type="number"
              defaultValue={state?.price}
              placeholder="Enter Price"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* Review */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Review*</span>
            </div>
            <input
              name="review"
              type="number"
              defaultValue={state?.review}
              placeholder="Enter review"
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
              defaultValue={state?.description}
              className="textarea textarea-bordered"
              placeholder="Enter Tutorial Description"
              required
            ></textarea>
          </label>
          {/* Submit button */}
          <Button
            btnText="Update Tutorial"
            btnStyle="col-span-12 mt-4 bg-green-600 text-white hover:bg-green-500"
            btnType="submit"
          />
        </form>
        {/* ------X------ */}
      </section>
    </div>
  );
};

export default UpdateTutorialForm;
