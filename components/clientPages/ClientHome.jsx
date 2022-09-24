import React from "react";
import { nairaFormatter } from "../utils/utils";
import { BiCheckboxChecked } from "react-icons/bi";

function ClientHome() {
  const packs = [
    {
      title: "Nano pack",
      price: "12000",
      descriptions: {
        1: "20,000+ Overall Impressions",
        2: "2 days in a week",
      },
    },
    {
      title: "starter pack",
      price: "34000",
      descriptions: {
        1: "60,000+ Overall Impressions",
        2: "3 days in a week",
      },
    },
    {
      title: "standard pack",
      price: "80000",
      descriptions: {
        1: "140,000+ Overall Impressions",
        2: "5 days in a week",
      },
    },
    {
      title: "entrprise pack",
      price: "120000",
      descriptions: {
        1: "200,000+ Overall Impressions",
        2: "A month",
      },
    },
  ];
  return (
    <div className="h-full bg-bgGray">
      {" "}
      <main className="">
        <div className="flex  items-center realtive p-2 justify-between font-semibold text-2xl ">
          <div className="">
            Blurb <span className="text-[#C40505]">Products</span>
          </div>

          <div className="relative">
            {/* bell svg */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {/* <span className='text-red-800 absolute top-12 text-4xl right-0'>.</span> */}
          </div>
        </div>
      </main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 mt-6  bg-bgGray ">
        {packs.map((pack, key) => (
          <div className="bg-white p-5" key={key}>
            <div className="text-start text-lg font-bold capitalize">{pack.title}</div>
            <div className="text-center text-baseRed  font-bold text-3xl my-2">
              {nairaFormatter(pack.price)}
            </div>
            <ul className="flex flex-col p-3 text-lg font-medium">
              {Object.values(pack.descriptions).map((des, i) => (
                <li key={i} className="flex items-center first-letter:capitalize gap-1 ">
                  <BiCheckboxChecked className="text-baseOrng bg-lightOrng bg-clip-text opacity-100" />
                  {des}
                </li>
              ))}
            </ul>
            <button className="bg-lightOrng mt-3 mb-0 text-baseOrng rounded-lg mx-auto w-9/12 p-2 text-lg font-bold">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientHome;
