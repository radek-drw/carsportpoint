import React, { useState } from "react";

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating backend validation
    if (password === "admin123") {
      setError("");
      onLogin();
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

        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter password"
            className="mb-4 w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:shadow-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
