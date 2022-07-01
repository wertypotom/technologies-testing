import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { IUser } from "./../../../types/IUser";
import "./UserItemPage.css";

interface UserItemParams {
  id: string;
}

const UserItemPage = () => {
  const params = useParams<keyof UserItemParams>() as UserItemParams;
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fethchUser();
  }, []);

  const fethchUser = async () => {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.ir/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="user-container">
      <h1> {user?.username}</h1>
      <h4>Email: {user?.email}</h4>
      <h4>Lives in: {user?.address.city}</h4>
      <Button title="Back" type="filled" onClick={() => navigate(-1)} />
    </div>
  );
};

export default UserItemPage;
