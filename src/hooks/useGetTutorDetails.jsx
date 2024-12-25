import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetTutorDetails = (id) => {
  const [tutorDetails, setTutorDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const getTutorDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      // get Tutorials
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/tutor/${id}`);
      setTutorDetails(data);
    } catch (error) {
      // handle errors
      // console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch Tutor Details."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getTutorDetails();
  }, [getTutorDetails]);

  return [tutorDetails, isLoading, errorMessage, getTutorDetails];
};

export default useGetTutorDetails;
