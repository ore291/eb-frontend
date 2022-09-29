import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiCheckboxChecked } from "react-icons/bi";
import { nairaFormatter } from "../utils/utils";
import { RiSubtractLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import {
  addToCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../slices/cartSlice";

function ClientCart() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  const totalAmount = getTotal().totalPrice;
  return (
    <div className="min-h-screen overflow-auto no-scroll">
      <div className="flex flex-col gap-y-6">
        {cart.map((item, index) => (
          <div className="bg-white rounded-lg px-2 py-4" key={index}>
            <div className="flex justify-between">
              <p className="capitalize text-baseGray text-[20px] font-semibold">
                {item.title}
              </p>
                    <button className="rotate-[4] cart-btn"
                        onClick={() => {
                        dispatch(removeItem())
                    }}><HiX size={'15'} /></button>
            </div>
            <div>
              <ul className="flex flex-col p-3 text-lg font-medium">
                {Object.values(item.description).map((des, i) => (
                  <li
                    key={i}
                    className="flex items-center first-letter:capitalize gap-1 "
                  >
                    <BiCheckboxChecked className="text-baseOrng bg-lightOrng bg-clip-text opacity-100" />
                    {des}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between px-2 w-full pb-2">
              <div className="flex items-center gap-1 text-slate-400 w-2/4">
                Price:{" "}
                <p className="text-lg text-baseOrng font-bold">
                  {nairaFormatter(item.price)}
                </p>
              </div>
              <div className="flex items-center gap-x-3 justify-end text-xl w-2/4">
                <button
                  className="cart-btn"
                  onClick={() => {
                    dispatch(decrementQuantity(item.id));
                  }}
                >
                  <RiSubtractLine />
                </button>
                <div>{item.quantity}</div>
                <button
                  className="cart-btn"
                  onClick={() => {
                    dispatch(incrementQuantity(item.id));
                  }}
                >
                  <BiPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg flex items-center justify-between px-2 mt-8 mb-2.5 p-4">
        <div className="text-baseGray font-semibold text-xl capitalize">
          total
        </div>
        <div className="font-bold text-2xl capitalize text-baseOrng">
          {nairaFormatter(totalAmount)}
        </div>
      </div>
    </div>
  );
}

export default ClientCart;
