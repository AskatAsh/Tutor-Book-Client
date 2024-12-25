import { FaStar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";
import { Link } from "react-router-dom";

const TutorCard = () => {
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa aspernatur laboriosam sed reiciendis minima voluptatibus, porro totam placeat harum laudantium veniam animi voluptatum asperiores. Dolor deleniti vitae voluptatem laudantium."
  return (
    <div className="col-span-6 p-4 md:p-6 bg-white dark:bg-gray-800 dark:bg-opacity-30 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-300">
      {/* Left Section */}
      <div className="flex flex-col lg:flex-row items-start gap-4">
        {/* Logo */}
        <div className="w-14 h-14 overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <img
            src="https://i.ibb.co.com/ph6vJdz/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background-23-2148213406.jpg"
            alt="Tutorial Image"
            className="object-cover"
          />
        </div>

        {/* Job Info */}
        <div>
          {/* Job title */}
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            <Link to={`/jobDetails`} className="hover:text-blue-500">
              Tutorial name
            </Link>
          </h3>
          {/* Other info */}
          <div className="flex items-center flex-wrap gap-2 md:gap-3 text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-1">
            <span className="flex items-center gap-1">
              <LuLanguages /> Spanish
            </span>
            <span className="flex items-center gap-1">
              <FaStar /> 4.6
            </span>
            <span className="flex items-center gap-1">
              <GiMoneyStack size={16} /> $68
            </span>
          </div>
          <p
            className="text-sm text-gray-500 mt-2 tooltip tooltip-top text-left"
            data-tip={description}
          >
            {description.substring(0, 100)}...{" "}
           
            <Link
              to={`/jobDetails/`}
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              More Details
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
