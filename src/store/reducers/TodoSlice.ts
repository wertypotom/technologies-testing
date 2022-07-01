import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ITodo } from "../../types/ITodo";

interface TodoState {
  todos: ITodo[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.ir/todos?_limit=10"
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchTodos.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
      state.isLoading = false;
      state.error = "";
      state.todos = action.payload;
    },
    [fetchTodos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
