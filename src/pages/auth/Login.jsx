import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LoginForm from './../../components/LoginForm';
import useAuthContext from './../../hooks/useAuthContext';

const Login = () => {
  const { googleSignIn, setUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(async (result) => {
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
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-transperant dark:bg-gray-950 py-28">
        <h2 className="text-2xl font-semibold mb-6 dark:text-white text-gray-900">
          Welcome Back
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
        <h2 className="text-4xl font-bold mb-4">
          Explore the world’s leading design portfolios.
        </h2>
        <p className="text-lg mb-8 max-w-md text-center">
          Millions of designers and agencies around the world showcase their
          portfolio work on Flowbite - the home to the world’s best design and
          creative professionals.
        </p>
        <div className="flex items-center gap-4">
          <div className="avatar-group -space-x-6">
            <div className="avatar">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar"
                className="rounded-full border-2 border-white w-12 h-12"
              />
            </div>
            <div className="avatar">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar"
                className="rounded-full border-2 border-white w-12 h-12"
              />
            </div>
            <div className="avatar">
              <img
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt="avatar"
                className="rounded-full border-2 border-white w-12 h-12"
              />
            </div>
          </div>
          <p className="text-lg">
            Over <span className="font-bold">15.7k</span> Happy Customers
          </p>
        </div>
      </div>
      {/* <Toaster /> */}
    </section>
  );
};

export default Login;