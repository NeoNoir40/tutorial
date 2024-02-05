import React from "react";
import { useAuth } from "../assets/api/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedRoutes() {
  const { loading, isAutehnticated } = useAuth();
  if (loading) {
    return <h1>Cargando...</h1>;
  } else if (!isAutehnticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
