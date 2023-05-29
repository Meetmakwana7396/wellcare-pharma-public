import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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
        let totalQuantity = cartData.reduce(
          (totalQuantity, cartItem) => totalQuantity + cartItem.quantity_unit,
          0
        );

        dispatch(setCart(cartData));
        dispatch(setCartCount(totalQuantity));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default globalSlice.reducer;
export const { addProducts, setCart, setCartCount } = globalSlice.actions;
