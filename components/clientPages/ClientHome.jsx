import React from "react";
import { nairaFormatter } from "../utils/utils";
import { BiCheckboxChecked } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import Link from "next/link";
import { Tooltip } from "flowbite-react";

function ClientHome() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart?.map((item) => {
      total += item.quantity;
    });
    return total;
  };

  const total = getTotalQuantity();

  const packs = [
    {
      id: 1,
      title: "Nano pack",
      price: 12000,
      descriptions: {
        1: "20,000+ Overall Impressions",
        2: "2 days in a week",
      },
    },
    {
      id: 2,
      title: "starter pack",
      price: 34000,
      descriptions: {
        1: "60,000+ Overall Impressions",
        2: "3 days in a week",
      },
    },
    {
      id: 3,
      title: "standard pack",
      price: 80000,
      descriptions: {
        1: "140,000+ Overall Impressions",
        2: "5 days in a week",
      },
    },
    {
      id: 4,
      title: "entrprise pack",
      price: 120000,
      descriptions: {
        1: "200,000+ Overall Impressions",
        2: "A month",
      },
    },
  ];
  return (
    <div className="min-h-screen bg-bgGray">
      {" "}
      <main className="relativ">
        <div className="flex  items-center realtive p-2 justify-between font-semibold text-2xl ">
          <div className="">
            Blurb <span className="text-[#C40505]">Products</span>
          </div>

          <div className="">
            {/* bell svg */}
            <div className="relative">
              <Link href="/products/cart">
               
                  <span
                    className={`${
                      total === 0 && "hidden"
                    } absolute text-sm text-white bg-red-500 rounded-full right-0 top-0 px-1 z-50 hover:scale-105 cursor-pointer `}
                  >
                    {total || 0}
                  </span>
                
              </Link>

              <Link href="/products/cart">
                <BsCartFill className="mt-1 cursor-pointer" size={30} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-6  mt-6  bg-bgGray ">
        {packs.map((pack, key) => (
          <div className="bg-white p-5 md:p-auto" key={key}>
            <div className="text-start text-lg font-bold capitalize">
              {pack.title}
            </div>
            <div className="text-center text-baseRed  font-bold text-3xl my-2">
              {nairaFormatter(pack.price)}
            </div>
            <ul className="flex flex-col p-3 text-lg font-medium">
              {Object.values(pack.descriptions).map((des, i) => (
                <li
                  key={i}
                  className="flex items-center first-letter:capitalize gap-1 "
                >
                  <BiCheckboxChecked className="text-baseOrng bg-lightOrng bg-clip-text opacity-100" />
                  {des}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                dispatch(
                  addToCart(pack.id, pack.title, pack.price, pack.descriptions)
                );
              }}
              className="bg-lightOrng mt-3 mb-0 text-baseOrng rounded-lg mx-auto w-9/12 p-2 text-lg font-bold"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientHome;
