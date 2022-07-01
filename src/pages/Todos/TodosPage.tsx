import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "../../components/List/List";
import { fetchTodos } from "../../store/reducers/TodoSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ITodo } from "../../types/ITodo";
import TodoItem from "./TodoItem";

const TodosPage = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, todos } = useAppSelector(
    (store) => store.TodoReducer
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (!!isLoading) {
    return <h1>Todos are loading...</h1>;
  }

  if (!!error) {
    return <h1>{error}</h1>;
  }

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
