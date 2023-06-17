import { Navigate, Link } from "react-router-dom";
import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const PrivateRoute = () => {
  const { currentUser, handleLoggingOut } = useContext(AppContext);
  return (
    <>
      {!currentUser && !currentUser.name && <Navigate to="/login"></Navigate>}
    </>
  );
};

export default PrivateRoute;
