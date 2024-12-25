import { FaRegEdit, FaRegStar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyTutorialTable = () => {
  const tutorials = [];
  return (
    <div>
      <section className="max-w-7xl mx-auto w-11/12 p-4 md:p-6 lg:p-8 my-16 md:my-20 bg-white dark:bg-gray-900 dark:bg-opacity-50 rounded-xl shadow-md overflow-hidden">
        {/* Posted jobs table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-blue-50 dark:bg-blue-950 text-blue-500 text-base">
              <tr>
                <th></th>
                <th className="font-medium py-5">Job Title</th>
                <th className="font-medium py-5">Deadline</th>
                <th className="font-medium py-5">Applicants</th>
                <th className="font-medium py-5">Status</th>
                <th className="font-medium py-5">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-gray-500 dark:text-gray-400">
              {/* mapping applied jobs in rows */}
              {tutorials.map((tutorial, idx) => (
                <tr
                  key={tutorial?._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-30"
                >
                  <td className="py-6">{idx + 1}</td>
                  <td className="flex flex-col sm:flex-row gap-4 py-6">
                    <img
                      className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-md"
                      src={tutorial?.image}
                      alt={`image of ${name}`}
                    />
                    <div>
                      <h2 className="text-gray-800 dark:text-gray-300 font-medium text-lg pb-2">
                        {name}
                      </h2>
                      <ul className="flex items-center gap-3 text-sm flex-wrap">
                        <li className="flex items-center gap-2 flex-shrink-0">
                          <LuLanguages />
                          {tutorial?.language}
                        </li>
                        <li className="flex items-center gap-2 flex-shrink-0">
                          <FaRegStar />
                          {tutorial?.review}
                        </li>
                        <li className="flex items-center gap-2 flex-shrink-0">
                          <GiMoneyStack size={16} />
                          {tutorial?.price}
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td className="py-6">
                    <div className="flex items-start gap-2">
                      {/* edit job post */}
                      <button
                        className="w-8 h-8 bg-green-50 dark:bg-gray-800 rounded-md flex items-center justify-center text-green-500 hover:bg-green-400 dark:hover:bg-green-800 hover:text-white tooltip tooltip-top"
                        data-tip="Edit"
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        className="w-8 h-8 bg-red-50 dark:bg-gray-800 rounded-md flex items-center justify-center text-red-500 hover:bg-red-400 dark:hover:bg-red-800 hover:text-white tooltip tooltip-top"
                        data-tip="Delete"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};


export default MyTutorialTable;
