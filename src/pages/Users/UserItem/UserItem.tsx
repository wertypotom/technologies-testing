import React from "react";
import { useNavigate } from "react-router-dom";
import { UsersSlice } from "../../../store/reducers/UserSlice";
import { useAppDispatch } from "../../../store/store";
import { IUser } from "../../../types/IUser";
import "./UserItem.css";

interface UserItemProps {
  user: IUser;
}
const UserItem = ({ user }: UserItemProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate("/users/" + user.id)}
        className={"user-item"}
      >
        {user.id} . {user.username} lives in {user.address.city} in{" "}
        {user.address.street}
      </div>
    </>
  );
};

export default UserItem;
