import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuth {
  isAuthed: boolean;
  error: string;
}

const initialState: IAuth = {
  isAuthed: false,
  error: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state) {
      state.isAuthed = true;
    },

    logOut(state) {
      state.isAuthed = false;
    },

    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { logIn, logOut, setError } = AuthSlice.actions;
export default AuthSlice.reducer;
