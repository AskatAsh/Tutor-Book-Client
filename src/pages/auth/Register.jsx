import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import RegisterForm from "./../../components/RegisterForm";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/animation/registerAnimation.json";

const Register = () => {
  const { setUser, googleSignIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(async (result) => {
        const newUser = result.user;
        setUser(newUser);
        toast.success("Account created Successfully!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <section className="flex flex-col md:flex-row min-h-dvh">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 bg-transperant dark:bg-gray-950 pt-28 pb-10">
        <h2 className="text-2xl font-semibold mb-6 dark:text-white text-gray-900">
          Register Now!
        </h2>

        <div className="flex gap-4 mb-4 flex-col lg:flex-row max-w-md w-full">
          <button
            onClick={handleGoogleSignIn}
            className="btn border shadow-none border-gray-300 dark:border-gray-800 bg-transparent dark:bg-gray-900 hover:bg-gray-100 hover:dark:bg-gray-800 lg:w-auto gap-2 flex-1 text-gray-800 dark:text-gray-400"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
        </div>

        <div className="divider w-full max-w-md mx-auto text-gray-800 dark:text-gray-400">
          or
        </div>

        <RegisterForm />

        <p className="mt-4 text-sm text-gray-800 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-green-700 dark:text-green-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-green-100 dark:bg-gray-900">
        <h3 className="text-3xl sm:text-6xl font-extrabold px-2 mb-10 text-center text-green-500">
          Join us on this teaching platform
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-10 px-4 text-base sm:text-xl text-center">And join our family with over 30,000 tutors and 1M+ learners, we know language learning.</p>
        <Lottie animationData={registerAnimation} loop={true} />
      </div>
    </section>
  );
};

export default Register;
