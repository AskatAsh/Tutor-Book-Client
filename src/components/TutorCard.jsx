import { FaRegStar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const TutorCard = ({ tutorial }) => {
  const { _id, name, image, language, description, price, review } = tutorial;
  return (
    <div className="col-span-6 p-4 md:p-6 bg-white dark:bg-gray-800 dark:bg-opacity-30 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-300">
      {/* Left Section */}
      <div className="flex flex-col lg:flex-row items-start gap-4">
        {/* Logo */}
        <div className="w-14 h-14 overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <img src={image} alt="Tutorial Image" className="object-cover" />
        </div>

        {/* Tutor Info */}
        <div>
          {/* Tutor Name */}
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            <Link to={`/tutor/${_id}`} className="hover:text-green-500">
              {name}
            </Link>
          </h3>
          {/* Other info */}
          <div className="flex items-center flex-wrap gap-2 md:gap-3 text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-1">
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
          <p
            className="text-sm text-gray-500 mt-2 tooltip tooltip-top text-left"
            data-tip={description}
          >
            {description.substring(0, 100)}...{" "}
            <Link
              to={`/tutor/${_id}`}
              className="text-green-500 dark:text-green-400 hover:underline"
            >
              More Details
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

TutorCard.propTypes = {
  tutorial: PropTypes.object,
};

export default TutorCard;
