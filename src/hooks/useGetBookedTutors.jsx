// import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetBookedTutors = (email) => {
  const [myBookedTutors, setMyBookedTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});
  const axiosInstance = useAxiosSecure();

  const getMyBookedTutors = useCallback(async () => {
    try {
      setIsLoading(true);
      // get My Booked Tutors
      const { data } = await axiosInstance.get(
        `/myBookedTutors?email=${email}`
      );

      setMyBookedTutors(data);
    } catch (error) {
      // handle errors
      // console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch My Booked Tutors Data."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  useEffect(() => {
    getMyBookedTutors();
  }, [getMyBookedTutors]);

  return [myBookedTutors, isLoading, errorMessage, getMyBookedTutors];
};

export default useGetBookedTutors;
