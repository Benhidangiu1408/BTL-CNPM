import React from "react";
import useAuth from "./hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import useStudentStore from "./current_user/user";

const PrivateRoute = () => {
  const { info } = useStudentStore();
  if (info.name=="") return <Navigate to="/signin" />;
  return <Outlet />;
};

export default PrivateRoute;
