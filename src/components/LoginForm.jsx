import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthContext from "./../hooks/useAuthContext";
import Input from "./Input";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const { setUser, loginUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful.");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
      <Input inputType="email" inputText="Email" inputName="email" />
      <div>
        <label
          className="block text-sm font-medium text-gray-800 dark:text-gray-300"
          htmlFor="password"
        >
          Password*
        </label>
        <label className="input bg-gray-50 dark:bg-gray-900 input-bordered mt-2 border border-gray-300 dark:border-gray-800 focus-within:border-green-700 focus-within:outline-none flex items-center gap-2 text-gray-800 dark:text-gray-50">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Enter your Password"
            className="grow"
            id="password"
            required
          />
          <button
            onClick={handleShowPassword}
            className="text-xl text-gray-800 dark:text-gray-400"
          >
            {showPass ? <FaEye /> : <FaEyeSlash />}
          </button>
        </label>
      </div>

      <div className="flex justify-between items-center mt-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-sm border-2 border-gray-300 dark:border-gray-500 rounded-md checked:border-none"
          />
          <span className="text-gray-600 dark:text-gray-500">Remember me</span>
        </label>
        <a
          href="#"
          className="text-green-700 dark:text-green-500 hover:underline text-sm"
        >
          Forgot password?
        </a>
      </div>

      <Button
        btnType="submit"
        btnText="Login to your account"
        btnStyle="w-full bg-green-600 hover:bg-green-700 outline-none border-none text-white"
      />
    </form>
  );
};

export default LoginForm;
