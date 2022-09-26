import React from "react";
import Header from "../Header";
import { GoPackage } from "react-icons/go";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { TiUserOutline } from "react-icons/ti";
import { ActiveLink } from "../utils/utils";
import {FiUpload} from 'react-icons/fi'

function ClientLayout({ children, Page }) {
  return (
    <div>
      {/* <Header /> */}

      <div className="h-full mb-10 md:mb-0  w-screen flex bg-bgGray">
        {/* container */}

        <aside className="hidden h-screen  lg:flex flex-col items-center bg-bgGray text-gray-700  ">
          {/* Side Nav Bar*/}
          <div className="h-16 flex items-center  w-full ">
            {/* Logo Section */}
            <a className="h-6 w-6 mx-auto" href="">
              {/* <img
                className="h-6 w-6 mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                a lt="svelte logo"
              /> */}
            </a>
          </div>
          <ul>
            {/* Items Section */}
            <li className="hover:bg-gray-100">
              <a
                href="."
                className="h-16 px-6 flex  justify-center items-center w-full
					focus:text-orange-500"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                  <path
                    d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
							2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
							0-1.79 1.11z"
                  />
                </svg>
              </a>
            </li>
            <li className="hover:bg-gray-100">
              <a
                href="."
                className="h-16 px-6 flex  justify-center items-center w-full
					focus:text-orange-500"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </li>
            <li className="hover:bg-gray-100">
              <a
                href="."
                className="h-16 px-6 flex  justify-center items-center w-full
					focus:text-orange-500"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={3} />
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
							0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
							0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
							2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
							0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
							0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
							0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
							0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
							1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
							1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
							0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
							1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
							2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
							0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
							1.65 0 0 0-1.51 1z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div className="mt-auto h-16 flex items-center w-full">
            {/* Action Section */}

            <button
              className="h-16  mx-auto  flex justify-center items-center
				w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none"
            >
              <svg
                className="h-5 w-5 text-red-700"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1={21} y1={12} x2={9} y2={12} />
              </svg>
            </button>
          </div>
        </aside>
        <div className="flex-1 flex flex-col">
          <nav className="px-4 flex justify-between md:justify-center mx-auto bg-whit bg-bgGray h-16 ">
            {/* top bar */}
            <ul className="flex items-center lg:hidden">
              {/* top bar left */}
              <li className="h-6 w-6">
                {/* <img
                  className="h-full w-full mx-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                  alt="svelte logo"
                /> */}
              </li>
            </ul>
            <ul className="flex items-center">
              {/* top bar center */}
              <li>
                <span className="text-2xl text-center mx-auto  flex justify-center  md:w-full font-silka font-black capitalize text-[#2A3A64]">
                  
                  {Page}
                </span>
              </li>
            </ul>
            <ul className="flex items-center">
              {/* to bar right  */}
              <li className="pr-4"></li>
              <li className="h-8 w-8"></li>
            </ul>
          </nav>

          {/*main content*/}

          <div className="relative mx-auto w-[90vw] bg-bgGray h-full  ">
            {children}
          </div>
        </div>

        <nav
          className="fixed bottom-0  w-full border bg-white lg:hidden flex
		overflow-x-auto"
        >
          {/* Bottom Icon Navigation Menu */}

          <div
            className="flex flex-col flex-grow items-center justify-center
			overflow-hidden whitespace-no-wrap text-sm transition-colors
			duration-100 ease-in-out hover:bg-gray-00 focus:text-orange-500"
          >
            <ActiveLink href={`/products`}>
              <GoPackage size={"30"} />
            </ActiveLink>
            <span className="p-0 text-sm capitalize">Bundles</span>
          </div>
          <div
            className="flex flex-col flex-grow items-center justify-center
			overflow-hidden whitespace-no-wrap text-sm transition-colors
			duration-100 ease-in-out hover:bg-gray-00 t"
          >
            <ActiveLink href={"/plans"}>
              <AiOutlineBars size={"30"} />
            </ActiveLink>

            <span className="text-sm capitalize">plans</span>
          </div>
          <div
            className="flex flex-col flex-grow items-center justify-center
			overflow-hidden whitespace-no-wrap text-sm transition-colors
			duration-100 ease-in-out hover:bg-gray-00 focus:text-orane-500"
          >
            <ActiveLink href="/uploads">
              <FiUpload size={"30"} />
            </ActiveLink>

            <span className=" text-sm capitalize">uploads</span>
          </div>
          <div
            className="flex flex-col flex-grow items-center justify-center
			overflow-hidden whitespace-no-wrap text-sm transition-colors
			duration-100 ease-in-out hover:bg-gray-00 focus:text-orange-500"
          >
            <ActiveLink href={"/profile"}>
              <TiUserOutline size={"30"} />
            </ActiveLink>

            <span className=" text-sm capitalize">Profile</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default ClientLayout;
