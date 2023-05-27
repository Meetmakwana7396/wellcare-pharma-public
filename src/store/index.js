import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./slices/GlobalSlice";
import UserSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: UserSlice,
    global: GlobalSlice,
  },
});

export default store;
