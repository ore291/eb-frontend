import React from "react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="mt-32">
      <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-start">Welcome</h1>
          <h3 className="font-light text-xl text-start">
            sign in to continue!
          </h3>
          <form action='' className="mt-6">
            <div className="my-5 text-sm">
              <label htmlFor="username" className="block text-black">
                Phone Number
              </label>
              <input
                type="text"
                autofocus
                id="username"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Phone Number"
              />
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="password" className="block text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
              <div className="flex justify-end w-[101px]  ml-auto rounded-md  mt-4 text-xs text-gray-600 bg[#FCBF65]">
                <a href="" className="mx-auto text-[#F67A01] py-0.5">
                  Forget Password?
                </a>
              </div>
            </div>
            <button className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full">
              Login
            </button>
          </form>
          <div className="mt-12 text-xs flex flex-row justify-end gap-1 text-end font-light text-gray-400">
            {" "}
            Don't have an account?{" "}
            <Link href="/register">
              <p className="text-black font-medium">Create One</p>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
