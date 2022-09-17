import React from "react";

function BlurberMultiPartForm() {
  const PersonalDetails = () => {
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
          <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-start">
              {" "}
              Create Account
            </h1>
            <h3 className="font-light text-sm text-start">
              Blurbers Sign in form
            </h3>
            <form action="" className="mt-6">
              <div className="my-5 text-sm">
                <input
                  type="text"
                  name="fullName"
                  autofocus
                  id="full-name"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="my-5 text-sm">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder="Email"
                />
              </div>
              <div className="my-5 text-sm">
                <input
                  type="text"
                  id="Phone"
                  name="Phone"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder="Phone Number"
                />
                <div className="flex justify-end w-[101px]  ml-auto rounded-md  mt-4 text-xs text-gray-600 bg[#FCBF65]"></div>
              </div>

              <div className="my-5 text-sm">
                <div className="w-full bg-[#F5F5F5]">
                  <div classname="mb-3 md:w-full">
                    <select
                      onChange={(e) => {
                        setUserType(e.target.value);
                      }}
                      className="form-select py-3 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                      <option
                        value="selected"
                        disabled
                        className="text-slate-400"
                      >
                      Gender
                      </option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              <button className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full">
                Proceed
              </button>
            </form>
            <div className="mt-12 text-xs flex flex-row justify-end gap-1 text-end font-light text-gray-400">
              {/* {" "}
                Don't have an account?{" "}
                <Link href="/register">
                  <p className="text-black font-medium">Create One</p>
                </Link>{" "} */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    
    <PersonalDetails/>
  )
}

export default BlurberMultiPartForm;
