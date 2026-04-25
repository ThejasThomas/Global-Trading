import type { JSX } from "react";
import { Navigate } from "react-router-dom";

 const PublicRoute = ({ children }: { children: JSX.Element }) => {

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (token) {
    return user.role === "admin"
      ? <Navigate to="/admin/dashboard" replace />
      : <Navigate to="/home" replace />;
  }

  return children;
};
export default PublicRoute