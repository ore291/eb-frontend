import React from "react";
import Image from "next/image";
import { TbLock } from "react-icons/tb";

function BlurberProfile() {
  const user = {
    lastName: "Padonu",
    firstName: "israel",
    email: "israelpadonu13@gmail.com",
    phone: "08057880646",
  };
  return (
    <div className="flex flex-col gap-1 min-h-screen md:h-full h-full w-full bg-bgGray overflow-aut0 wallet  md:mb-0 md:w-8/12 mx-auto">
      <div className="w-full flex gap-1 items-center justify-start">
        <div className="rounded-xl w-3/12 py-6">
          <Image
            className="mx-auto"
            objectFit="contain"
            src="/images/avatar.svg"
            width="42"
            height="42"
            alt="avatar"
          />
        </div>
        <div className="text-start pb-2">
          <p className="text-bold">Account</p>
          <p className="text-slate-400 text-sm whitespace-nowrap">
            Edit and manage your account details
          </p>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-3 h-fit py-6 px-4 rounded-lg  ">
        <div className="bg-bgGray flex text-start flex-col">
          <span className="text-slate-400 text-sm pl-3 py-1">Full Name </span>
          <h3 className="capitalize font-semibold pl-3 pb-2 text-lg">
            {user.lastName + " " + user.firstName}
          </h3>
        </div>
        <div className="bg-bgGray flex text-start flex-col">
          <span className="text-slate-400 text-sm pl-3 py-1">Email </span>
          <h3 className=" font-semibold pl-3 pb-2 text-lg">{user.email}</h3>
        </div>
        <div className="bg-bgGray flex text-start flex-col">
          <span className="text-slate-400 text-sm pl-3 py-1">
            Phone Number{" "}
          </span>
          <h3 className=" font-semibold pl-3 pb-2 text-lg">{user.phone}</h3>
        </div>
      </div>
      <div className="w-full flex gap-4 items-center justify-start">
        <div className="rounded-lg  py-6 flex items-center justify-center   text-white bg-clip-content ">
          <TbLock size={54} className=" bg-baseOrng p-2 rounded-lg" />
        </div>
        <div className="text-start ">
          <p className="text-bold">Password</p>
          <p className="text-slate-400 text-sm whitespace-nowrap">
            Change password
          </p>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-3 h-fit py-6 px-4 rounded-lg  ">
        <form
          action=""
          className="flex flex-col gap-3 h-fit  rounded-lg"
        >
          {" "}
          <div className="flex text-start flex-col">
            <input
              type="password"
              id="current-password"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-bgGray w-full"
              placeholder="Current Password"
            />
          </div>
          <div className=" flex text-start flex-col">
            <input
              type="password"
              id="new-password"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-bgGray w-full"
              placeholder="New Password"
            />
          </div>
          <button className="block text-center text-white bg-baseOrng p-3 duration-300 rounded-lg hover:bg-[#ff9900] ">
            Change Password

          </button>
        </form>
      </div>
    </div>
  );
}

export default BlurberProfile;
