import { FaRegStar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";
import { Link } from "react-router-dom";
import Button from "./Button";
import { IoBookmarksOutline } from "react-icons/io5";
import { PropTypes } from "prop-types";

const TutorDetailsSection = ({ tutorDetails }) => {
  const { name, image, language, description, price, review } = tutorDetails;

  return (
    <>
      {/* tutor details section */}
      <section className="py-8">
        <div className="bg-white border dark:border-gray-700 dark:bg-gray-800 max-w-7xl w-11/12 mx-auto flex flex-col md:flex-row md:items-center justify-between p-6 rounded-lg mb-8 gap-4">
          {/* Left Section */}
          <div className="flex max-[400px]:flex-col items-start gap-4">
            {/* tutor image */}
            <div className="w-24 h-24 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <img
                src={image}
                alt="Company Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tutor Info */}
            <div>
              {/* Tutor Name */}
              <h3 className="text-3xl font-semibold text-gray-700 dark:text-white mb-4">
                {name}
              </h3>
              {/* Other info */}
              <div className="flex items-center flex-wrap gap-2 md:gap-3 text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <LuLanguages /> {language}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegStar /> {review}
                </span>
                <span className="flex items-center gap-1">
                  <GiMoneyStack size={16} /> ${price}
                </span>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="flex items-center justify-end gap-3">
            <Link to={`/jobApply`}>
              <Button
                btnText="Book Now"
                btnStyle="btn-md bg-green-500 hover:bg-green-600 outline-none border-none text-white bg-opacity-90"
              />
            </Link>

            <Button
              btnText={<IoBookmarksOutline size={20} />}
              btnStyle="btn-md text-green-500 bg-green-500 bg-opacity-15 hover:bg-opacity-90 hover:text-green-50 dark:text-green-400 dark:hover:text-green-50"
            />
          </div>
        </div>
        <div className="max-w-7xl w-11/12 mx-auto text-lg text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold mb-4">Descripton</h2>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </section>
    </>
  );
};

TutorDetailsSection.propTypes = {
  tutorDetails: PropTypes.object,
};

export default TutorDetailsSection;
