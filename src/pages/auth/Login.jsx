import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LoginForm from './../../components/LoginForm';
import useAuthContext from './../../hooks/useAuthContext';
import Lottie from "lottie-react";
import loginAnimation from "../../assets/animation/loginAnimation.json"

const Login = () => {
  const { googleSignIn, setUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        toast.success("Signed in Successfully.");
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
          Welcome Back!
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

        <LoginForm />

        <p className="mt-4 text-sm text-gray-800 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            state={location?.state}
            to="/auth/register"
            className="text-green-700 dark:text-green-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-green-100 dark:bg-gray-900">
        <Lottie animationData={loginAnimation} loop={true} />
      </div>
      {/* <Toaster /> */}
    </section>
  );
};

export default Login;