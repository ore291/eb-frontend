import React, { useState } from "react";
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
import { motion } from "framer-motion";
import { CartModal } from "../utils/modals";
import { Button } from "flowbite-react";
import { AiOutlineClear } from "react-icons/ai";

function ClientCart() {
  const cart = useSelector((state) => state.cart.cart);

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

  const [showRemoveItemModal, setShowRemoveItemModal] = useState(false);
  const [showClearCartModal, setShowClearCartModal] = useState(false)

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  const handleClear = () => {
    dispatch(clearCart())
  }

  return (
    <div className="min-h-screen h bg-bgGray overflow-auto no-scroll relative">
      <div className="flex flex-col gap-y-6">
        {cart.length === 0 && (
          <div className="text-baseGray text-xl font-semibold text-center w-full mt-6 ">
            No Items In Cart
          </div>
        )}

        {cart.map((item, index) => (
          <div className="bg-white rounded-lg px-2 py-4" key={index}>
            <CartModal
              showModal={showRemoveItemModal}
              setShowModal={setShowRemoveItemModal}
              title={"Remove Item"}
              body={"Are you sure you want to remove this item from cart?"}
              onConfirm={() => {
                handleRemove(item.id);
              }}

              //dispatch={dispatch(removeItem())}
            />
            <div className="flex justify-between">
              <p className="capitalize text-baseGray text-[20px] font-semibold">
                {item.title}
              </p>
              <button
                className="rotate-[4] cart-btn"
                onClick={() => {
                  setShowRemoveItemModal(true);
                  // dispatch(removeItem(item.id))
                }}
              >
                <HiX size={"15"} />
              </button>
            </div>
            <div>
              <ul className="flex flex-col p-3 text-lg font-medium">
                {Object?.values(item?.description).map((des, i) => (
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
        {cart.length !== 0 && (
          <div className="bg-baseOrng bg-clip-content flex ml-auto w-fit  rounded-lg text-white">
            <Button
              color={"#fkffkk"}
              onClick={() => setShowClearCartModal(true)}
            >
              <AiOutlineClear className="mr-2 h-5 w-5 " />
              Clear Cart
            </Button>
          </div>
        )}

        <CartModal
          showModal={showClearCartModal}
          setShowModal={setShowClearCartModal}
          title={"Clear Cart"}
          body={"Are you sure you want to clear the cart?     "}
          onConfirm={() => {
            handleClear();
          }}
        />
        {/* clear cart */}
      </div>
      <div className="bg-white rounded-lg flex items-center justify-between px-2 mt-8 mb- p-4">
        <div className="text-baseGray font-semibold text-xl capitalize">
          total
        </div>
        <div className="font-bold text-2xl capitalize text-baseOrng">
          {nairaFormatter(totalAmount)}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <button
          className={` ${
            cart === [] ? "bg-opacity-50 opacity-50" : "bg-baseOrn"
          }block my-8 text-center text-white bg-baseOrng p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full`}
        >
          Procced To Payment
        </button>
      </div>
    </div>
  );
}

export default ClientCart;
