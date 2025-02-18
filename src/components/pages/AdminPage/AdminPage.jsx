import React, { useState } from "react";

import AdminLogin from "./AdminLogin.js";
import AdminDashboard from "./AdminDashboard";

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <section>
      {isLoggedIn ? (
        <AdminDashboard onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <AdminLogin onLogin={() => setIsLoggedIn(true)} />
      )}
    </section>
  );
};

export default AdminPage;
