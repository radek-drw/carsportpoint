import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import Logo from "../../common/Logo.jsx";

import { useAdmin } from "@context/AdminContext";

const AdminLogin = () => {
  const { setIsLoggedIn } = useAdmin();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid password. Try again.");
    }
  };

  return (
    <div className="absolute left-0 top-0 flex min-h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Admin Panel
        </h2>
        <p className="mb-6 text-gray-500">Enter your password to access</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative rounded-md border focus-within:border-inputBorder focus-within:shadow-inputShadow hover:border-inputBorder">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full bg-transparent py-2 pl-2 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Toggle password visibility */}
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>

          {/* Display error message if password is incorrect */}
          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="btn blue-btn w-full py-2 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
      <Logo isClickable className="absolute left-3 top-2 w-56" />
    </div>
  );
};

export default AdminLogin;
