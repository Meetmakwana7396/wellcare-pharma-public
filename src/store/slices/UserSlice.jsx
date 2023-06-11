import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../../baseurl";

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

export const getProfileDetails = () => {
  return async (dispatch) => {
    axios({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
      url: `${URL}customers/get-profile`,
      method: "get",
    })
      .then((response) => {
        // console.log(response.data.data, "profile");
        dispatch(addUser(response.data.data));
      })
      .catch((error) => {
        console.log(error.response, "profile error");
      });
  };
};

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
