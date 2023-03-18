import React from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children, isAuth }) {
  if (!isAuth) {
    return <Navigate to="/"/>
  }
  return children;
}
