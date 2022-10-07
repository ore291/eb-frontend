import React from 'react'
import Header from "../Header";
import { VscBriefcase } from "react-icons/vsc";
import { RiWallet3Line } from "react-icons/ri";
import { MdOutlinePayments } from 'react-icons/md'
import {TiUserOutline} from 'react-icons/ti'
import {ActiveLink} from '../utils/utils'



function Layout({ children ,Page}) {
  
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
          <nav className="px-4 flex justify-between md:justify-center mx-auto bg-whit bg-[#f2f2f2] h-16 ">
            {/* top bar */}
            <ul className="flex items-center lg:hidden">
              {/* top bar left */}
              <li className="h-6 w-6">
               
              </li>
            </ul>
            <ul className="flex items-center">
              {/* top bar center */}
              <li>
                <span className="text-2xl text-center md:w-full font-silka font-black capitalize text-[#2A3A64]">
                  {" "}
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

          <div className="relative mx-auto w-[90vw] bg-bgGray h-full">
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
			duration-100 ease-in-out "
          >
            <ActiveLink href={`/jobs`}>
              <VscBriefcase size={"30"} />
            </ActiveLink>
            <span className="p-0 text-sm capitalize">jobs</span>
          </div>
          <div
            className="flex flex-col flex-grow items-center justify-center
			overflow-hidden whitespace-no-wrap text-sm transition-colors
			duration-100 ease-in-out "
          >
            <ActiveLink href={"/wallet"}>
              <RiWallet3Line size={"30"} />
            </ActiveLink>

            <span className="text-sm capitalize">wallet</span>
          </div>
          <div
            
            className="flex flex-col flex-grow items-center justify-center
			overflow-hidden whitespace-no-wrap text-sm transition-colors
			duration-100 ease-in-out "
          >
            <ActiveLink href='/payments'>
              <MdOutlinePayments size={'30'} />
            </ActiveLink>
            
            <span className=" text-sm capitalize">payments</span>
          </div>
          <div
            
            className="flex flex-col flex-grow items-center justify-center
			overflow-hidden whitespace-no-wrap text-sm transition-colors
			duration-100 ease-in-out  "
          >
            <ActiveLink href={'/profile'}>
              <TiUserOutline  size={'30'}/>

            </ActiveLink>
            
            <span className=" text-sm capitalize">Profile</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Layout