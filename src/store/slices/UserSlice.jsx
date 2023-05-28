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
      localStorage.setItem("user_token", response.data.token); //puses data into array(initialState: [])
    },
    removeUser(state, action) {
      state.splice(action.payload, 1); //Removes Single Element From Array
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeAllUser, removeUser } = userSlice.actions;
