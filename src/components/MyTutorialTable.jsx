import { FaRegEdit, FaRegStar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const MyTutorialTable = ({ myTutorialsData = [] }) => {
  const [myTutorials, setMyTutorials] = useState(myTutorialsData);

  const handleDeleteTutorial = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `${import.meta.env.VITE_SERVER}/deleteTutorial/${id}`
          );

          if (response.status === 200 || response.status === 201) {
            // succes message
            Swal.fire({
              icon: "success",
              title: "Delete Tutorial",
              text: "Tutorial Deleted Successfully!",
            });
            // update state after deleting
            const newTutorials = myTutorials.filter(tutorial => tutorial._id !== id);
            setMyTutorials(newTutorials);
          }
        } catch (error) {
          // console.log("Error: ", error);
          // failure message
          Swal.fire({
            icon: "error",
            title: "Deleting Tutorial Failed",
            text:
              error.response?.data?.message ||
              "An error occurred. Please try again later.",
          });
        }
      }
    });
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
                <th className="font-medium py-5">Tutorial Info</th>
                <th className="font-medium py-5">Description</th>
                <th className="font-medium py-5">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-gray-500 dark:text-gray-400">
              {/* mapping applied jobs in rows */}
              {myTutorials.map((tutorial, idx) => (
                <tr
                  key={tutorial?._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-30"
                >
                  <td className="py-6">{idx + 1}</td>
                  <td className="flex flex-col sm:flex-row gap-4 py-6">
                    <img
                      className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-md"
                      src={tutorial?.image}
                      alt={`image of the tutorial`}
                    />
                    <div>
                      <h2 className="text-gray-800 dark:text-gray-300 font-medium text-lg pb-2">
                        {tutorial?.title}
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
                          <GiMoneyStack size={16} />${tutorial?.price}
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td className="py-6 max-w-96">
                    {tutorial?.description.substring(0, 100)}...
                  </td>
                  <td className="py-6">
                    <div className="flex items-start gap-2">
                      {/* edit job post */}
                      <Link
                        to={`/updateTutorial/${tutorial?._id}`}
                        state={tutorial}
                      >
                        <button
                          className="w-8 h-8 bg-green-50 dark:bg-gray-800 rounded-md flex items-center justify-center text-green-500 hover:bg-green-400 dark:hover:bg-green-800 hover:text-white tooltip tooltip-top"
                          data-tip="Update"
                        >
                          <FaRegEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteTutorial(tutorial?._id)}
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
    </>
  );
};

MyTutorialTable.propTypes = {
  myTutorialsData: PropTypes.array,
};

export default MyTutorialTable;
