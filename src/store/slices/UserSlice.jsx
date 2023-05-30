import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "none",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState, // We have Declared Empty Array as initial State
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
