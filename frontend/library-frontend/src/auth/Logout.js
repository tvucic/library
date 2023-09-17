import React from "react";
import { Redirect } from "react-router";
import { isAuthenticated, logout } from "../auth/AuthService";

const Logout = () => {
  return (
    <div>
      {logout()}
      <Redirect to="/" />
    </div>
  );
};

export default Logout;
