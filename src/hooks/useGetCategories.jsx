import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const getCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      // get categories
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/findCategories`
      );
      setCategories(data);
    } catch (error) {
      // handle errors
      // console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch Categories Data."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return [categories, isLoading, errorMessage, getCategories];
};

export default useGetCategories;
