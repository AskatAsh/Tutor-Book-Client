import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "./../components/Button";

const AddTutorials = () => {
  const handleAddTutorial = (e) => {
    e.preventDefault();
  };

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
        <form onSubmit={handleAddTutorial} className="grid grid-cols-12 gap-5 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 md:p-8 border dark:border-gray-700">
          {/* Name */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Name*</span>
            </div>
            <input
              name="name"
              type="text"
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
              placeholder="e.g. name@gmail.com"
              className="input input-bordered w-full"
              disabled
            />
          </label>
          {/* Image URL */}
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Image*</span>
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
          <label className="form-control w-full col-span-12 sm:col-span-6">
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
          <label className="form-control w-full col-span-12 sm:col-span-6">
            <div className="label">
              <span className="label-text">Review*</span>
            </div>
            <input
              name="price"
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
