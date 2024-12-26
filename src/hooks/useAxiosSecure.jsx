import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthContext from './useAuthContext';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser, setUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      // interceptor response
      (response) => {
        return response;
      },
      (error) => {
        // interceptor error
        if (error.status === 401 || error.status === 403) {
        //   console.log(error);
          signOutUser()
            .then(() => {
              toast.success("Forbidden Access! Signed out!");
              setUser(null);
              // navigate to login page
              navigate("/auth/login");
            })
            .catch((error) => {
              console.log("Sign out error: ", error);
            });
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, setUser, signOutUser]);
  return axiosInstance;
};

export default useAxiosSecure;