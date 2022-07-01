import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { logIn, setError } from "../../store/reducers/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./Authentication.css";

const Authentication = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { error } = useAppSelector((store) => store.AuthReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorize = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (login === "user" && password === "12345") {
      dispatch(logIn());
      dispatch(setError(""));
      navigate("/");
    } else {
      dispatch(setError("Authorization went wrong, try again"));

      setTimeout(() => {
        dispatch(setError(""));
      }, 2000);

      setLogin("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={authorize} className="authorization-form">
      <h1 style={{ textAlign: "center" }}>Authorization</h1>
      <Input
        placeholder="Enter Username"
        onChange={(e) => setLogin(e.target.value)}
        value={login}
      />
      <Input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <div className="btn-container">
        <Button title="Sign In" type="outlined" />
      </div>

      {!!error && (
        <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>
      )}
    </form>
  );
};

export default Authentication;
