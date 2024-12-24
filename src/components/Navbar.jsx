import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaRegUserCircle } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import useTheme from './../hooks/useTheme';
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  //   const { user, setUser, signOutUser } = useContext(AuthContext);
  const user = {email: "hello"};
    const { theme, toggleTheme } = useTheme();

  const handleLogOut = () => {
    //   signOutUser()
    //     .then(() => {
    //       toast.success("Succussfully Signed out!");
    //       setUser(null);
    //     })
    //     .catch((error) => {
    //       toast.error(error.code);
    //     });
  };

  useEffect(() => {
    const handleScroll = () => {
      const topScroll = window.scrollY;
      setIsSticky(topScroll > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navlinks
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-transparent font-semibold text-green-500 dark:text-green-400 focus:bg-transparent focus:text-green-500"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      {user && user?.email ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent font-semibold text-green-500 dark:text-green-400 focus:bg-transparent focus:text-green-500"
                  : ""
              }
              to="/findTutors"
            >
              Find Tutors
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent font-semibold text-green-500 dark:text-green-400 focus:bg-transparent focus:text-green-500"
                  : ""
              }
              to="/addTutorials"
            >
              Add Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent font-semibold text-green-500 dark:text-green-400 focus:bg-transparent focus:text-green-500"
                  : ""
              }
              to="/myTutorials"
            >
              My Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent font-semibold text-green-500 dark:text-green-400 focus:bg-transparent focus:text-green-500"
                  : ""
              }
              to="/myBookedTutor"
            >
              My Booked Tutor
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <header
      className={`fixed w-full transition-all duration-300 z-50 ${
        isSticky
          ? "fixed bg-white dark:bg-gray-950 shadow-md border-0 dark:border-b dark:border-b-gray-800"
          : "bg-transperant dark:border-b dark:border-b-transparent"
      }`}
    >
      <nav className="max-w-[1400px] w-full mx-auto px-4 md:px-8 xl:px-10">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden p-0"
              >
                <AiOutlineMenu size={20} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navlinks}
              </ul>
            </div>
            <Link
              to="/"
              className={`btn btn-ghost text-xl text-gray-800 font-semibold ${
                isSticky
                  ? "text-gray-800 dark:text-gray-100"
                  : "dark:text-gray-100"
              }`}
            >
              <img
                src="https://i.ibb.co.com/7SdPwvB/icons8-training-96.png"
                alt="tutor book logo"
                className="w-6 sm:w-8"
              />
              <span className="text-sm">TutorBook</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
          </div>
          <div className="navbar-end">
            <button
              className="btn btn-xs btn-ghost btn-circle tooltip tooltip-left mr-2"
                data-tip={theme === "light" ? "dark" : "light"}
                onClick={toggleTheme}
            >
              {theme === "light" ? (
                <FaMoon size={20} className="text-gray-800" />
              ) : (
                <IoSunny size={20} className="text-yellow-300" />
              )}
            </button>

            {user && user?.email ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm dark:bg-green-500 dark:text-white font-medium tooltip tooltip-bottom flex"
                  data-tip="Logout"
                >
                  <span className="max-[425px]:hidden">Logout</span> <FiLogOut size={18} />
                </button>
                {/* user profile */}
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-circle btn-sm dark:bg-green-500 dark:text-green-100 ml-2 p-0">
                    <FaRegUserCircle size={20} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 mt-2 shadow right-0"
                  >
                    <li>User Name</li>
                  </ul>
                </div>
              </>
            ) : (
              <Link
                to="/auth/login"
                className="btn btn-sm dark:bg-green-500 dark:text-white font-medium tooltip tooltip-bottom flex"
                data-tip="Login"
              >
                <FiLogIn size={18} /> <span className="max-[425px]:hidden">Login</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
