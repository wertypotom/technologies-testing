import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <p className="error">404 page not found</p>
      <p className="link">
        <NavLink to="/">click here to go home</NavLink>
      </p>
    </div>
  );
};

export default ErrorPage;
