import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetTutorialsData = (sortBy = "") => {
  const [tutorialsData, setTutorialsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const getTutorialsData = useCallback(async () => {
    try {
      setIsLoading(true);
      // get Tutorials
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/findTutorials?sortBy=${sortBy}`);
      setTutorialsData(data);
    } catch (error) {
      // handle errors
      // console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch Tutorials Data."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [sortBy]);

  useEffect(() => {
    getTutorialsData();
  }, [getTutorialsData]);

  return [tutorialsData, setTutorialsData, isLoading, errorMessage, getTutorialsData];
};

export default useGetTutorialsData;
