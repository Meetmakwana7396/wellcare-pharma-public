import React from "react";
import { useSelector } from "react-redux";
import { toIndianCurrency } from "../../baseurl";
import CartProductCard from "../components/common/CartProductCard";
import Main from "../components/common/Main";

const Cart = () => {
  const { cart } = useSelector((state) => state.global);
  const { cart_count } = useSelector((state) => state.global);

  const subtotal = () => {
    if (cart) {
      let totalPrice = 0;
      for (const item of cart) {
        const { quantity_unit } = item;
        const { price } = item.medical_shop_order.medicin;
        totalPrice += price * quantity_unit;
      }
      return toIndianCurrency(totalPrice.toString());
    }
  };

  return (
    <Main>
      <p className="font-bold text-3xl mb-5">Cart</p>
      <div className="flex h-[70vh] gap-5">
        {/* Left side - Products */}
        <div className="w-4/5 bg-primary/5 rounded p-4 overflow-y-auto">
          <div className="flex items-center mb-5">
            <span className="text-xl font-semibold ">Products</span>
            <span className="ml-2 text-black/50">{`( ${cart_count} )`}</span>
          </div>
          <ul>
            {cart?.map((product) => (
              <div key={product.cart_id}>
                <CartProductCard data={product} />
              </div>
            ))}

            {/* Add more product items here */}
          </ul>
        </div>
        {/* Right side - Billing */}
        <div className="w-1/4 p-4 bg-secondary/20 rounded h-fit">
          <h1 className="text-xl font-semibold mb-4">Billing</h1>
          <table className="w-full">
            <thead className="border-b-2 border-black/20">
              <tr>
                <th className="py-2 text-start">#</th>
                <th className="py-2 text-start">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">
                  <span className="font-semibold text-sm whitespace-nowrap">
                    Subtotal:
                  </span>
                </td>
                <td className="py-2 whitespace-nowrap">{subtotal()}</td>
              </tr>
              <tr>
                <td className="py-2">
                  <span className="font-semibold text-sm whitespace-nowrap">
                    Tax:
                  </span>
                </td>
                <td className="py-2 whitespace-nowrap">
                  {toIndianCurrency("10")}
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <span className="font-semibold text-sm whitespace-nowrap">
                    Additional Charges:
                  </span>
                </td>
                <td className="py-2 whitespace-nowrap">
                {toIndianCurrency("5")}
                  
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <span className="font-semibold text-sm whitespace-nowrap">
                    Discount:
                  </span>
                </td>
                <td className="py-2 whitespace-nowrap">-$15.00</td>
              </tr>
              <tr className="border-t-2 border-black/20 border-dashed">
                <td className="py-4">
                  <span className="font-semibold text-md whitespace-nowrap">
                    Grand Total:
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap">$100.00</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button className="bg-black/80 p-2 text-white rounded w-full">
                    Checkout
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Main>
  );
};

export default Cart;
