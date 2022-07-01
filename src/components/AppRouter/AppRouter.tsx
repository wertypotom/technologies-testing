import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProtectedRoutes from "../../hoc/ProtectedRoutes";
import Authentication from "../../pages/Authentication/Authentication";
import ErrorPage from "../../pages/Error/ErrorPage";
import MainPage from "../../pages/Main/MainPage";
import TodosPage from "../../pages/Todos/TodosPage";
import UserItemPage from "../../pages/Users/UserItemPage/UserItemPage";
import UserPage from "../../pages/Users/UserPage";
import { useAppSelector } from "../../store/store";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Authentication />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
