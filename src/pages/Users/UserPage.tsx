import React, { useEffect, useState } from "react";
import { IUser } from "../../types/IUser";
import List from "../../components/List/List";
import UserItem from "./UserItem/UserItem";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchUsers } from "../../store/reducers/UserSlice";
import Input from "../../components/Input/Input";
import SortBy from "../../components/SortBy/SortBy";
import { sortByValue } from "../../helpers/sortArray";

const UserPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  const { error, isLoading, users } = useAppSelector(
    (store) => store.UserReducer
  );
  const [newUsers, setNewUsers] = useState<IUser[]>([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    setNewUsers(users);
  }, [users]);

  useEffect(() => {
    const sortedUsers = sortByValue(newUsers, sort as keyof IUser);
    setNewUsers(sortedUsers);
  }, [sort]);

  useEffect(() => {
    setNewUsers(
      users.filter((user) =>
        user.username.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  if (!!isLoading) {
    return <h1>Todos are loading...</h1>;
  }

  if (!!error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <Input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder={"Search users by name..."}
      />
      <SortBy
        options={[
          { value: "", title: "Search by:" },
          { value: "username", title: "userName A-Z" },
        ]}
        onChange={(e) => setSort(e.target.value)}
      />
      <List
        items={newUsers}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </>
  );
};

export default UserPage;
