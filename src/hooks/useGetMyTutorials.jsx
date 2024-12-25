import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetMyTutorials = (email) => {
  const [myTutorialsData, setMyTutorialsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const getMyTutorialsData = useCallback(async () => {
    try {
      setIsLoading(true);
      // get My Tutorials
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/myTutorials?email=${email}`);
      setMyTutorialsData(data);
    } catch (error) {
      // handle errors
      // console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch My Tutorials Data."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  useEffect(() => {
    getMyTutorialsData();
  }, [getMyTutorialsData]);

  return [myTutorialsData, isLoading, errorMessage, getMyTutorialsData];
};

export default useGetMyTutorials;
