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
               
              </a>
            </li>
            <li className="hover:bg-gray-100">
              <a
                href="."
                className="h-16 px-6 flex  justify-center items-center w-full
					focus:text-orange-500"
              >
               
              </a>
            </li>
            <li className="hover:bg-gray-100">
              <a
                href="."
                className="h-16 px-6 flex  justify-center items-center w-full
					focus:text-orange-500"
              >
               
              </a>
            </li>
          </ul>
          <div className="mt-auto h-16 flex items-center w-full">
            {/* Action Section */}

            <button
              className="h-16  mx-auto  flex justify-center items-center
				w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none"
            >

            </button>
          </div>
        </aside>
        <div className="flex-1 flex flex-col">
          <nav className="px-4 flex justify-between md:justify-center mx-auto bg-whit bg-bgGray h-16 ">
            {/* top bar */}
            <ul className="flex items-center lg:hidden">
              {/* top bar left */}
              <li className="h-6 w-6">

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
        
        {/* Bottom Icon Navigation Menu */}
        <nav
          className="fixed bottom-0  w-full border bg-white lg:hidden flex
		overflow-x-auto"
        >
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
            <ActiveLink href={"/account"}>
              <TiUserOutline size={"30"} />
            </ActiveLink>

            <span className=" text-sm capitalize">Account</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default ClientLayout;
