import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetCategoryTutors = (category) => {
  const [tutorsData, setTutorsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const getTutorsData = useCallback(async () => {
    try {
      setIsLoading(true);
      // get Tutorials
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/findTutors/${category}`);
      setTutorsData(data);
    } catch (error) {
      // handle errors
      // console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch Tutors Data by Category."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    getTutorsData();
  }, [getTutorsData]);

  return [tutorsData, isLoading, errorMessage, getTutorsData];
};

export default useGetCategoryTutors;
