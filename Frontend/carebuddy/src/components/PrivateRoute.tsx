import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { JSX } from "react";

export default function PrivateRoute({
  children,
  role,
}: {
  children: JSX.Element;
  role: string | string[];
}) {
  const { token, role: userRole } = useAuth();
  const allowed =
    token &&
    (Array.isArray(role)
      ? (role as string[]).includes(userRole!)
      : role === userRole);
  return allowed ? children : <Navigate to="/login" replace />;
}
