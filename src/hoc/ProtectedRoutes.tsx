import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";

const ProtectedRoutes = () => {
  const { isAuthed } = useAppSelector((store) => store.AuthReducer);

  return <>{isAuthed ? <Outlet /> : <Navigate to={"/auth"} />}</>;
};

export default ProtectedRoutes;
