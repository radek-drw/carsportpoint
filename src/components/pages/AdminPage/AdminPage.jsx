import React from "react";

import AdminLogin from "./AdminLogin.js";
import AdminDashboard from "./AdminDashboard/AdminDashboard.jsx";

import { AdminProvider, useAdmin } from "@context/AdminContext";

const AdminContent = () => {
  const { isLoggedIn } = useAdmin();
  return <section>{isLoggedIn ? <AdminDashboard /> : <AdminLogin />}</section>;
};

const AdminPage = () => {
  return (
    <AdminProvider>
      <AdminContent />
    </AdminProvider>
  );
};

export default AdminPage;
