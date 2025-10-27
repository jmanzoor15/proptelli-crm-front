import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";


const ProtectedRoute = () => {
  const { access, user } = useAuthStore();

  if (!access || !user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet/>; 
};

export default ProtectedRoute;
