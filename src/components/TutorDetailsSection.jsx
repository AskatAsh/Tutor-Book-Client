import { FaRegStar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";
import Button from "./Button";
import { IoBookmarksOutline } from "react-icons/io5";
import { PropTypes } from "prop-types";
import Swal from "sweetalert2";
import useAuthContext from "./../hooks/useAuthContext";
import axios from "axios";

const TutorDetailsSection = ({ tutorDetails }) => {
  const { user } = useAuthContext();
  const { _id, name, email, image, language, description, price, review } =
    tutorDetails;

  const handleBookTutor = async (id) => {
    const bookedData = {
      tutorId: id,
      image: image,
      language: language,
      price: price,
      tutorEmail: email,
      email: user?.email,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/bookTutor`,
        bookedData,
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
          title: "Tutor Booked",
          text: "Tutor has been successfully Booked!",
        });
      }
    } catch (error) {
      // console.log("Error: ", error);
      // failure message
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text:
          error.response?.data?.message ||
          "An error occurred. Please try again later.",
      });
    }
  };

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
            <div onClick={() => handleBookTutor(_id)}>
              <Button
                btnText="Book Now"
                btnStyle="btn-md bg-green-500 hover:bg-green-600 outline-none border-none text-white bg-opacity-90"
              />
            </div>

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
