import React from "react";
import { deleteTodo } from "../../store/reducers/TodoSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ITodo } from "../../types/ITodo";

interface TodoProps {
  todo: ITodo;
}
const TodoItem = ({ todo }: TodoProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      {todo.id} . {todo.title}
      <button type="button" onClick={() => dispatch(deleteTodo(todo.id))}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
