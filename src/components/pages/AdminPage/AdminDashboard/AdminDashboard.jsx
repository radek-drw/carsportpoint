import React from "react";

import AdminForm from "./AdminForm";
import LogoutButton from "./LogoutButton";

const AdminDashboard = () => {
  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">
        Admin Panel
      </h2>
      <AdminForm />
      <LogoutButton />
    </div>
  );
};

export default AdminDashboard;
