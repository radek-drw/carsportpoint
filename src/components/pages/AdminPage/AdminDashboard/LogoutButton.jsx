import React from "react";

import { useAdmin } from "@context/AdminContext";

const LogoutButton = () => {
  const { setIsLoggedIn } = useAdmin();

  return (
    <button
      onClick={() => setIsLoggedIn(false)}
      className="btn red-btn mt-4 w-full py-2 font-semibold"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
