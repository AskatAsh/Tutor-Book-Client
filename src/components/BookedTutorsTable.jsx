import { FaRegStar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";
import { PropTypes } from "prop-types";

const BookedTutorsTable = ({ myBookedTutors = [] }) => {

  const handleAddReview = (id) => {
    console.log(id);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto w-11/12 p-4 md:p-6 lg:p-8 my-16 bg-white dark:bg-gray-950 dark:bg-opacity-30 border dark:border-gray-800 rounded-xl shadow-md overflow-hidden">
        {/* Posted jobs table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-blue-50 dark:bg-green-950 dark:bg-opacity-50 text-green-500 text-base">
              <tr>
                <th></th>
                <th className="font-medium py-5">Tutor Info</th>
                <th className="font-medium py-5">Price</th>
                <th className="font-medium py-5">Email</th>
                <th className="font-medium py-5">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-gray-500 dark:text-gray-400">
              {/* mapping applied jobs in rows */}
              {myBookedTutors.map((tutor, idx) => (
                <tr
                  key={tutor?._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-30"
                >
                  <td className="py-6">{idx + 1}</td>
                  <td className="flex flex-col sm:flex-row gap-4 py-6">
                    <img
                      className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-md"
                      src={tutor?.image}
                      alt={`image of ${tutor?.name}`}
                    />
                    <div>
                      <h2 className="text-gray-800 dark:text-gray-300 font-medium text-lg pb-2">
                        {tutor?.tutorName}
                      </h2>
                      <ul className="text-sm">
                        <li className="flex items-center gap-2 flex-shrink-0">
                          <LuLanguages />
                          {tutor?.language}
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td className="py-6">
                    <div className="flex items-center gap-2 text-lg font-medium">
                      <GiMoneyStack size={20} />${tutor?.price}
                    </div>
                  </td>
                  <td className="py-6">{tutor?.tutorEmail}</td>
                  <td className="py-6">
                    <div className="flex items-start gap-2">
                      {/* add review button */}
                      <button
                        onClick={() => handleAddReview(tutor?.tutorId)}
                        className="py-2 px-4 bg-green-100 dark:bg-gray-800 rounded-md flex items-center justify-center text-green-500 hover:bg-green-400 dark:hover:bg-green-800 hover:text-white tooltip tooltip-top"
                        data-tip="Add Review"
                      >
                        <FaRegStar size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

BookedTutorsTable.propTypes = {
  myBookedTutors: PropTypes.array,
};

export default BookedTutorsTable;
