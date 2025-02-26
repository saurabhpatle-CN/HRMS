import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import login from "../../assets/images/login1.png";
import "./login.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          loginId: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-br from-[#73abe031] to-[rgba(3,183,249,0.53)]">
      {/* Left Side - Login Form */}
      <div className="flex flex-col items-center justify-center w-full md:w-[45rem] p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center font-serif">
          Sign In
        </h1>
        <p className="text-gray-600 mb-6 text-center  font-serif">
          Please login to access the dashboard.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
          <div>
            <label className="block text-gray-700 mb-2 px-5.5 font-serif">Username</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white focus:ring-0 focus:border-gray-400"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 px-5.5 font-serif">Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white focus:ring-0 focus:border-gray-400 pr-10"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  size="lg"
                />
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-400 text-white mt-4 py-3 rounded-full hover:bg-blue-500 transition duration-200 font-serif"
          >
            Secure Sign-in
          </button>
          <p className="text-gray-600 mt-4 text-center cursor-pointer hover:underline  font-serif">
            Forgot password?
          </p>
        </form>
      </div>

      {/* Right Side - Image Section (Hidden for 1024x1366 and smaller) */}
      <div className="w-full md:w-1/2 p-4 flex justify-center image-container ">
        <img
          src={login}
          alt="Login Illustration"
          className="inverted-radius w-full md:h-screen object-cover "
        />
      </div>
    </div>
  );
};

export default LoginPage;
