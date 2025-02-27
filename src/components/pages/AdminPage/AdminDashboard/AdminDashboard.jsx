import React from "react";

import AdminForm from "./AdminForm";
import LogoutButton from "./LogoutButton";
import Logo from "../../../common/Logo.jsx";

const AdminDashboard = () => {
  return (
    <div className="absolute left-0 top-0 flex min-h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">
          Admin Panel
        </h2>
        <AdminForm />
        <LogoutButton />
      </div>
      <Logo isClickable className="absolute left-3 top-2 w-56" />
    </div>
  );
};

export default AdminDashboard;
