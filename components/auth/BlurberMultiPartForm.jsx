import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";
import React, { useState,useEffect } from "react";
import states from "../utils/states";
import { ProgressBar } from "../utils/utils";

function BlurberMultiPartForm() {
  
  
  


  const SelectState = () => {
    
  const [naijaState, setNaijaState] = useState("");
  const [naijaLga, setNaijaLga] = useState("");
  const [lga, setLga] = useState([]);

    const stateList = Object.keys(states).map((state, i) => ({
      id:i,
      name: state,

    }));
    const handleStateSelect = (e) => {
     
      const stateSel = e.target.value;
     const lgaSel = stateSel !== "" ? states[stateSel] : "";
      setNaijaState(stateSel);
      setLga(lgaSel);
      setNaijaLga("");
      console.log(stateSel);
    };

    const handleLgaSelect = (e) => {
     
      const lgaSel = e.target.value;
      setNaijaLga(lgaSel);
    };

    return (
      <div>
        <select
          onChange={(e) => handleStateSelect(e)}
          className="form-select py-3 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={naijaState}
        >
          <option value="selected"> {"Select State"}</option>
          {stateList.map((state, key) => (
            <option key={key} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
        <select
          name="Cities"
          onChange={(e) => handleLgaSelect(e)}
          className="form-select py-3 my-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={naijaLga}
        >
          <option value=""> {"Select LGA"}</option>
          {lga.map((lga, key) => (
            <option key={key} value={lga}>
              {lga}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const PersonalDetails = ({ page, setPage }) => {
    const [gender, setGender] = useState("");
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md transition ease-in-out delay-500 ">
          <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-start">
              {" "}
              Create Account
            </h1>
            <h3 className="font-light text-sm text-start">
              Blurbers Sign in form
            </h3>
            <ProgressBar width={0} />
            <form action="" className="mt-6">
              <div className="my-5 text-sm">
                <input
                  type="text"
                  name="fullName"
                  autoFocus
                  required
                  id="full-name"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="my-5 text-sm">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full focus:bg-white"
                  placeholder="Email"
                />
              </div>
              <div className="my-5 text-sm">
                <input
                  type="text"
                  id="Phone"
                  name="Phone"
                  required
                  className="rounded-sm focus:bg-white px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder="Phone Number"
                />
                <div className="flex justify-end w-[101px]  ml-auto rounded-md  mt-4 text-xs text-gray-600 bg[#FCBF65]"></div>
              </div>

              <div className="my-5 text-sm">
                <div className="w-full bg-[#F5F5F5]">
                  <div className="mb-3 md:w-full">
                    <select
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      className="form-select py-3 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                      <option value="selected" className="text-slate-400">
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full"
            >
              Proceed
            </button>
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
  const LocationDetails = ({ page, setPage }) => {
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md transition ease-in-out delay-500">
          <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-start">
              {" "}
              Create Account
            </h1>
            <h3 className="font-light text-sm text-start">Sign up and earn</h3>
            <ProgressBar width={10} />
            <form action="">
              <div className="my-5 text-sm flex gap-5 flex-col">
                <input
                  type="text"
                  name="city"
                  required
                  id="city"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                  placeholder="City"
                />
              </div>

              <SelectState />
            </form>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  };

  const OccupationDetails = ({ page, setPage }) => {
    const [ageBracket, setAgeBracket] = useState("");
    const [salary, setSalary] = useState("");
    const [employment, setEmployment] = useState("");
    const [education, setEducation] = useState("");
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md transition ease-in-out delay-500">
          <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-start">
              {" "}
              Create Account
            </h1>
            <h3 className="font-light text-sm text-start">
              You're almost done
            </h3>
            <ProgressBar width={20} />
            <form action="">
              <div className="my-5 text-sm flex-col flex gap-3">
                <input
                  type="text"
                  name="numbers-contact"
                  autoFocus
                  id="full-name"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                  placeholder="Numbers of Contact"
                />

                <select
                  onChange={(e) => {
                    setAgeBracket(e.target.value);
                  }}
                  className="form-select py-3 text-start 	 mt-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                >
                  <option value="selected" className="text-slate-400">
                    Age bracket
                  </option>
                  <option value="0-18">0-18</option>
                  <option value="18-25">18-25</option>
                  <option value="26-35"> 26-35 </option>
                  <option value="36-50"> 36-50</option>
                  <option value="50+"> 50+ </option>
                </select>

                <select
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                  className="form-select py-3 text-start 	 mt-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                >
                  <option value="selected" className="text-slate-400">
                    Salary Range
                  </option>
                  <option value="0-18"> &#8358;0 - &#8358;49,999</option>
                  <option value="0-18"> &#8358;50,000 - &#8358;199,999</option>
                  <option value="0-18"> &#8358;200,000 - &#8358;499,999</option>
                  <option value="0-18"> &#8358;500,000 - &#8358;999,999</option>
                  <option value="0-18"> &#8358;1,000,000+</option>
                </select>

                <select
                  onChange={(e) => {
                    setEmployment(e.target.value);
                  }}
                  className="form-select py-3 text-start 	 mt-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                >
                  <option value="selected" className="text-slate-400">
                    Employment Type
                  </option>
                  <option value=""> None</option>
                  <option value=""> Employed</option>
                  <option value=""> Self-Employed</option>
                </select>
                <input
                  type="text"
                  name="occupation"
                  autofocus
                  id="occupation"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                  placeholder="Occupation"
                />
                <select
                  onChange={(e) => {
                    setEducation(e.target.value);
                  }}
                  className="form-select py-3 text-start 	 mt-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                >
                  <option value="selected" className="text-slate-400">
                    Education Level
                  </option>
                  <option value="">Primary</option>
                  <option value="">Secondary</option>
                  <option value="">Vocational</option>
                  <option value="">Tertiary</option>
                </select>
              </div>
            </form>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  };

  const WhatsappDetails = ({ page, setPage }) => {
    const [socialClass, setSocialClass] = useState("");
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md transition ease-in-out delay-500">
          <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-start">
              {" "}
              Create Account
            </h1>
            <h3 className="font-light text-sm text-start">
              Earn up to 10,000 a day
            </h3>
            <ProgressBar width={40} />
            <form action="">
              <div className="my-5 text-sm flex-col flex gap-3">
                <div className="my-5 text-sm">
                  <label htmlFor="username" className="block text-black">
                    Whatsapp Details
                  </label>
                  <input
                    type="text"
                    autoFocus
                    id="whatsapp"
                    className="rounded-sm px-4 focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                    placeholder="Average Whatsapp Views"
                  />
                </div>
                <div className="my-5 text-sm ">
                  <label
                    htmlFor="whatsapp-male"
                    className="block text-black w-full"
                  >
                    Whatsapp gender ratio of viewers
                  </label>
                  <div className="flex justify-between gap-3 mx-auto w-12/12">
                    <input
                      type="text"
                      name="female"
                      autoFocus
                      id="whatsapp-male"
                      className="rounded-lg px-auto focus:bg-white py-3 text-sm mt-3 outline-black bg-gray-100 w-2/4"
                      placeholder="number of Male viewers"
                    />
                    <input
                      type="text"
                      name="whatsapp-female"
                      autoFocus
                      id="whatsapp-female"
                      className="rounded-lg px-aut focus:bg-white py-3 text-sm mt-3 outline-black bg-gray-100 w-2/4"
                      placeholder=" number of Female viewers
"
                    />
                  </div>
                </div>
                <select
                  onChange={(e) => {
                    setSocialClass(e.target.value);
                  }}
                  className="form-select py-3 text-start 	 mt-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                >
                  <option value="selected" className="text-slate-400">
                    Social class of viewers
                  </option>
                  <option value="">Poor</option>
                  <option value="">Middle Class</option>
                  <option value="">Rich</option>
                </select>
              </div>
            </form>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  };

  const BankDetails = ({ page, setPage }) => {
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md transition ease-in-out delay-500">
          <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-start">
              {" "}
              Create Account
            </h1>
            <h3 className="font-light text-sm text-start">
              Input your bank details
            </h3>
            <ProgressBar width={80} />
            <form action="">
              <div className="my-5 text-sm flex-col flex gap-3">
                <input
                  type="text"
                  name="bank-name"
                  autoFocus
                  id="bank-name"
                  className="rounded-lg px-auto focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                  placeholder="Bank Name"
                />

                <input
                  type="text"
                  name="account-number"
                  autoFocus
                  id="account-number"
                  className="rounded-lg px-auto focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                  placeholder="Account Number"
                />

                <input
                  type="text"
                  name="account-name"
                  autoFocus
                  id="account-name"
                  className="rounded-lg px-auto focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                  placeholder="Account Name"
                />
              </div>
            </form>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  };

  const SecurityDetails = ({ page, setPage }) => {
    const [cPassword, setCPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [password, setPassword] = useState("");
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    const [passwordType, setPasswordType] = useState(true);
    const [CpasswordType, setCPasswordType] = useState(true);

    useEffect(() => {
      if (isCPasswordDirty) {
        if (password === cPassword) {
          setShowErrorMessage(false);
        } else {
          setShowErrorMessage(true);
        }
      }
    }, [cPassword, password]);

    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md transition ease-in-out delay-500">
          <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-start">
              {" "}
              Create Account
            </h1>
            <h3 className="font-light text-sm text-start">
              You did it! you're done!
            </h3>
            <ProgressBar width={100} />
            <form action="">
              <div className="my-5 text-sm flex-col flex gap-3 relative">
                <input
                  type={passwordType ? "password" : "text"}
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  autoFocus
                  id="password"
                  className="rounded-lg px-auto focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                  placeholder="Password"
                />
                <input
                  type={CpasswordType ? "password" : "text"}
                  name="Cpassword"
                  onChange={(e) => {
                    setCPassword(e.target.value);
                    setIsCPasswordDirty(true);
                  }}
                  value={cPassword}
                  autoFocus
                  id="Cpassword"
                  className="rounded-lg px-auto focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                  placeholder="Confirm Password"
                />
                <div
                  className="absolute right-4 top-6"
                  onClick={() => {
                    setPasswordType((prev) => !prev);
                  }}
                >
                  {passwordType ? (
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
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
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </div>
                <div
                  className="absolute right-4 top-24"
                  onClick={() => {
                    setCPasswordType((prev) => !prev);
                  }}
                >
                  {CpasswordType ? (
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
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
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </form>
            {showErrorMessage && isCPasswordDirty ? (
              <div className="text-red-700 font-bold transition delay-100 ease-in-out">
                {" "}
                Passwords did not match{" "}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const [page, setpage] = useState(0)
  const componentsList = [
    <PersonalDetails page={page} setPage={setpage} />,
    <LocationDetails page={page} setPage={setpage} />,
    <OccupationDetails page={page} setPage={setpage} />,
    <WhatsappDetails page={page} setPage={setpage} />,
    <BankDetails page={page} setPage={setpage} />,
    <SecurityDetails page={page} setPage={setpage} />,
  ];
  return (
    <div>
      <div>{componentsList[page]}</div>
    </div>
  );
}

export default BlurberMultiPartForm;
