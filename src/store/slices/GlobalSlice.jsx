import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { URL } from "../../../baseurl";

const initialState = {
  cart: null,
  cart_count: "",
  products: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState: initialState, // We have Declared Empty Array as initial State
  reducers: {
    addProducts(state, action) {
      state.products = action.payload; //puses data into array(initialState: [])
    },

    setCart(state, payload) {
      state.cart = payload.payload;
    },

    setCartCount(state, payload) {
      state.cart_count = payload.payload;
    },
  },
});

export const getCartList = () => {
  return async (dispatch) => {
    axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
      url: `${URL}customers/get-cart`,
    })
      .then((response) => {
        let cartData = response.data.data;
        dispatch(setCart(cartData));
        dispatch(setCartCount(cartData.length));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default globalSlice.reducer;
export const { addProducts, setCart, setCartCount } = globalSlice.actions;
