import React, { useState, useEffect } from "react";
import states from "../utils/states";
import { ProgressBar, checkIsFilled } from "../utils/utils";
import { verifyPhoneNumber } from "nigerian-phone-number-validator";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  gender: "",
  phone: "",

  email: "",
  password: "",

  naijaState: "",
  naijaLga: "",
  city: "",
  lga: [],

  ageBracket: "",
  salary: "",
  employment: "",
  education: "",
  numofcontacts: "",
  occupation: "",

  socialClass: "",
  numOfViews: "",
  maleViews: "",
  femaleViews: "",

  bankName: "",
  accountNumber: "",
  accountName: "",
};

function BlurberMultiPartForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
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
    }, [cPassword]);

    return (
      <motion.div className="mt-12 md:mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-12/12 m-auto my-10 shadow-md transition ease-in-out delay-500">
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
                {/*toggle password */}
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
                {/*toggle confirm password */}
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
                Passwords do not match{" "}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  // Multi step form controller

  const [page, setpage] = useState(0);
  const componentsList = [
    <PersonalDetails
      page={page}
      setPage={setpage}
      {...data}
      updateFields={updateFields}
    />,
    <LocationDetails
      page={page}
      setPage={setpage}
      {...data}
      updateFields={updateFields}
    />,
    <OccupationDetails
      page={page}
      setPage={setpage}
      {...data}
      updateFields={updateFields}
    />,
    <WhatsappDetails
      page={page}
      setPage={setpage}
      {...data}
      updateFields={updateFields}
    />,
    <BankDetails
      page={page}
      setPage={setpage}
      {...data}
      updateFields={updateFields}
    />,
    <SecurityDetails
      page={page}
      setPage={setpage}
      {...data}
      updateFields={updateFields}
    />,
  ];
  return <AnimatePresence>{componentsList[page]}</AnimatePresence>;
}

const PersonalDetails = ({
  page,
  setPage,
  updateFields,
  firstName,
  lastName,
  gender,
  phone,
}) => {
  const [verifyPhone, setverifyPhone] = useState(null);
  // const [gender, setGender] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phone, setPhone] = useState("");

  const [showErrMsg, setshowErrMsg] = useState(false);

  return (
    <motion.div
      className="mt-12 md:mt-32"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.9,
          type: "ease-in-out",
          damping: 25,
          stiffness: 500,
        },
      }}
      exit={{ opacity: 0, x: window.innerWidth }}
    >
      <div className="bg-white lg:w-4/12 md:6/12 w-12/12 m-auto my-10 shadow-md  ">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-start">
            {" "}
            Create Account
          </h1>
          <h3 className="font-light text-sm text-start">
            Blurbers Sign in form
          </h3>
          <ProgressBar width={0} />
          <form
            action=""
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="my-5 text-sm">
              <input
                type="text"
                name="first-name"
                autoFocus
                onChange={(e) => {
                  e.preventDefault();
                  updateFields({ firstName: e.target.value });
                  setshowErrMsg(false);
                }}
                value={firstName}
                id="first-name"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                placeholder="First Name"
              />
            </div>
            <div className="my-5 text-sm">
              <input
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                onChange={(e) => {
                  updateFields({ lastName: e.target.value });
                  setshowErrMsg(false);
                }}
                required
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full focus:bg-white"
                placeholder="Last Name"
              />
            </div>
            <div className="my-5 text-sm">
              <input
                type="text"
                id="Phone"
                name="Phone"
                value={phone}
                onChange={(e) => {
                  updateFields({ phone: e.target.value });

                  setshowErrMsg(false);
                }}
                onKeyUp={(e) => {
                  setverifyPhone(verifyPhoneNumber(e.target.value));
                }}
                required
                className="rounded-sm focus:bg-white px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Phone Number"
              />
              <span
                className={`text-red-600  mt- capitalize ${
                  verifyPhone === null || phone === ""
                    ? "hidden mt-2"
                    : "flex p-0"
                }`}
              >
                {!verifyPhone && "please input a valid phone number"}
              </span>
            </div>

            <div className="my-5 text-sm">
              <div className="w-full bg-[#F5F5F5]">
                <div className="mb-3 md:w-full">
                  <select
                    onChange={(e) => {
                      updateFields({ gender: e.target.value });
                      setshowErrMsg(false);
                    }}
                    value={gender}
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

          {showErrMsg && (
            <div className="text-red-600  mt-2 capitalize">
              Please fill all fields before continuing
            </div>
          )}

          <div className="flex items-center justify-between pt-5">
            <button
              onClick={() => {
                setPage(page);
              }}
              className="md:w-4/12 rounded-md text-center text-white bg-[#000] p-3 duration-300  hover:bg-[#241c1c] "
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (checkIsFilled(4, firstName, gender, phone, lastName)) {
                  setPage(page + 1);
                } else {
                  setshowErrMsg(true);
                }
              }}
              className="rounded-md text-center text-white bg-[#F67A01] py-3 px-5 duration-300 md:w-4/12 hover:bg-[#ff9900] "
            >
              Next
            </button>
          </div>

          <div className="mt-12 text-xs flex flex-row justify-end gap-1 text-end font-light text-gray-400">
            {/* {" "}
                Don't have an account?{" "}
                <Link href="/register">
                  <p className="text-black font-medium">Create One</p>
                </Link>{" "} */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LocationDetails = ({
  page,
  setPage,
  updateFields,
  naijaState,
  naijaLga,
  lga,
  city,
}) => {
  const [showErrMsg, setshowErrMsg] = useState(false);
  const stateList = Object.keys(states).map((state, i) => ({
    id: i,
    name: state,
  }));
  const handleStateSelect = (e) => {
    e.preventDefault();
    const stateSel = e.target.value;
    const lgaSel = stateSel !== "" ? states[stateSel] : "";
    updateFields({ lga: lgaSel });
    updateFields({ naijaState: e.target.value });
  };

  const handleLgaSelect = (e) => {
    e.preventDefault();
    updateFields({ naijaLga: e.target.value });
  };

  return (
    <motion.div
      className="mt-12 md:mt-32"
      layout
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.9,
          type: "ease-in",
          damping: 25,
          stiffness: 500,
        },
      }}
      exit={{ opacity: 0, x: window.innerWidth }}
    >
      <div className="bg-white lg:w-4/12 md:6/12 w-12/12 m-auto my-10 shadow-md transition ease-in-out delay-500">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-start">
            {" "}
            Create Account
          </h1>
          <h3 className="font-light text-sm text-start">
            Blurbers Sign in form
          </h3>
          <ProgressBar width={10} />
          <form action="">
            <div className="my-5 text-sm flex gap-5 flex-col">
              <input
                type="text"
                name="city"
                value={city}
                autoFocus
                onChange={(e) => {
                  updateFields({ city: e.target.value });
                  setshowErrMsg(false);
                }}
                required
                id="city"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                placeholder="City"
              />
            </div>
            <AnimatePresence initial={false} exitBeforeEnter={true}>
              <motion.div
                layout
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <select
                  onChange={(e) => {
                    handleStateSelect(e);
                    e.preventDefault();
                  }}
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
                  onChange={(e) => {
                    e.preventDefault();
                    handleLgaSelect(e);
                  }}
                  className="form-select py-3 my-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  value={naijaLga}
                >
                  <option value="selected"> {"Select LGA"}</option>
                  {lga.map((lga, key) => (
                    <option key={key} value={lga}>
                      {lga}
                    </option>
                  ))}
                </select>
              </motion.div>
            </AnimatePresence>
          </form>
          {showErrMsg ? (
            <div className="text-red-600  mt-2 capitalize">
              Please fill all fields before continuing
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center justify-between pt-5">
            <button
              onClick={() => {
                setPage(page - 1);
              }}
              className="md:w-4/12 rounded-md text-center text-white bg-[#000] p-3 duration-300  hover:bg-[#241c1c] "
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (checkIsFilled(1, city)) {
                  setPage(page + 1);
                } else {
                  setshowErrMsg(true);
                }
              }}
              className="rounded-md text-center text-white bg-[#F67A01] py-3 px-5 duration-300 md:w-4/12 hover:bg-[#ff9900] "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OccupationDetails = ({
  page,
  setPage,
  updateFields,
  ageBracket,
  salary,
  employment,
  education,
  numofcontacts,
  occupation,
}) => {
  const [showErrMsg, setshowErrMsg] = useState(false);

  return (
    <motion.div
      className="mt-12 md:mt-32"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          type: "ease",
          damping: 25,
          stiffness: 500,
        },
      }}
      exit={{ opacity: 0, x: window.innerWidth }}
    >
      <div className="bg-white lg:w-4/12 md:6/12 w-12/12 m-auto my-10 shadow-md transition ease-in-out delay-500">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-start">
            {" "}
            Create Account
          </h1>
          <h3 className="font-light text-sm text-start">
            Blurbers Sign in form
          </h3>
          <ProgressBar width={20} />
          <form action="">
            <div className="my-5 text-sm flex-col flex gap-3">
              <input
                type="text"
                name="numbers-contact"
                value={numofcontacts}
                onChange={(e) => {
                  updateFields({ numofcontacts: e.target.value });
                  setshowErrMsg(false);
                }}
                autoFocus
                id="n-c"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                placeholder="Number of Contacts"
              />

              <select
                onChange={(e) => {
                  updateFields({ ageBracket: e.target.value });
                  setshowErrMsg(false);
                }}
                value={ageBracket}
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
                  updateFields({ salary: e.target.value });
                  setshowErrMsg(false);
                }}
                value={salary}
                className="form-select py-3 text-start 	 mt-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option value="selected" className="text-slate-400">
                  Salary Range
                </option>
                <option value="0-49"> &#8358;0 - &#8358;49,999</option>
                <option value="50-199"> &#8358;50,000 - &#8358;199,999</option>
                <option value="200-499">
                  {" "}
                  &#8358;200,000 - &#8358;499,999
                </option>
                <option value="500-999">
                  {" "}
                  &#8358;500,000 - &#8358;999,999
                </option>
                <option value="1000"> &#8358;1,000,000+</option>
              </select>

              <select
                onChange={(e) => {
                  updateFields({ employment: e.target.value });
                  setshowErrMsg(false);
                }}
                value={employment}
                className="form-select py-3 text-start 	 mt-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option value="selected" className="text-slate-400">
                  Employment Type
                </option>
                <option value="1"> None</option>
                <option value="2"> Employed</option>
                <option value="3"> Self-Employed</option>
              </select>
              <input
                type="text"
                name="occupation"
                onChange={(e) => {
                  updateFields({ occupation: e.target.value });
                  setshowErrMsg(false);
                }}
                value={occupation}
              
                id="occupation"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                placeholder="Occupation"
              />
              <select
                onChange={(e) => {
                  updateFields({ education: e.target.value });
                  setshowErrMsg(false);
                }}
                value={education}
                className="form-select py-3 text-start 	 mt-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option value="selected" className="text-slate-400">
                  Education Level
                </option>
                <option value="1">Primary</option>
                <option value="2">Secondary</option>
                <option value="3">Vocational</option>
                <option value="4">Tertiary</option>
              </select>
            </div>
          </form>
          {showErrMsg ? (
            <div className="text-red-600  mt-2 capitalize">
              Please fill all fields before continuing
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center justify-between pt-5">
            <button
              onClick={() => {
                setPage(page - 1);
              }}
              className="md:w-4/12 rounded-md text-center text-white bg-[#000] p-3 duration-300  hover:bg-[#241c1c] "
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (
                  checkIsFilled(
                    6,
                    occupation,
                    education,
                    employment,
                    salary,
                    ageBracket,
                    numofcontacts
                  )
                ) {
                  setPage(page + 1);
                } else {
                  setshowErrMsg(true);
                }
              }}
              className="rounded-md text-center text-white bg-[#F67A01] py-3 px-5 duration-300 md:w-4/12 hover:bg-[#ff9900] "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WhatsappDetails = ({
  page,
  setPage,
  updateFields,
  socialClass,
  numOfViews,
  maleViews,
  femaleViews,
}) => {
  

  const [showErrMsg, setshowErrMsg] = useState(false);

  return (
    <motion.div
      className="mt-12 md:mt-32"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          type: "ease",
          damping: 25,
          stiffness: 500,
        },
      }}
      exit={{ opacity: 0, x: window.innerWidth }}
    >
      <div className="bg-white lg:w-4/12 md:6/12 w-12/12 m-auto my-10 shadow-md transition ease-in-out delay-500">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-start">
            {" "}
            Create Account
          </h1>
          <h3 className="font-light text-sm text-start">
            Blurbers Sign in form
          </h3>
          <ProgressBar width={40} />
          <form action="">
            <div className="my-5 text-sm flex-col flex gap-3">
              <div className="my-5 text-sm">
                <label htmlFor="whatsapp" className="block text-black">
                  Whatsapp Details
                </label>
                <input
                  type="text"
                  autoFocus
                  id="whatsapp"
                  onChange={(e) => {
                    updateFields({ numOfViews: e.target.value });
                    setshowErrMsg(false);
                  }}
                  value={numOfViews}
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
                    name="whatsapp-male"
                    onChange={(e) => {
                      updateFields({ maleViews: e.target.value });
                      setshowErrMsg(false);
                    }}
                    value={maleViews}
                   
                    id="whatsapp-male"
                    className="rounded-lg px-auto focus:bg-white py-3 text-xs md:text-sm mt-3 outline-black bg-gray-100 w-3/4"
                    placeholder="Number of male viewers"
                  />
                  <input
                    type="text"
                    name="whatsapp-female"
                    onChange={(e) => {
                      updateFields({ femaleViews: e.target.value });
                      setshowErrMsg(false);
                    }}
                    value={femaleViews}
                  
                    id="whatsapp-female"
                    className="rounded-lg px-aut focus:bg-white py-3 text-xs md:text-sm mt-3 outline-black bg-gray-100 w-3/4"
                    placeholder=" Number of female viewers
"
                  />
                </div>
              </div>
              <select
                onChange={(e) => {
                  updateFields({ socialClass: e.target.value });
                  setshowErrMsg(false);
                }}
                value={socialClass}
                className="form-select py-3 text-start 	 mt-5 appearance-none block w-full bg-gray-100  text-base font-normal bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition
      ease-in-out text-slate-500 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option value="selected" className="text-slate-400">
                  Social class of viewers
                </option>
                <option value="1">Poor</option>
                <option value="2">Middle Class</option>
                <option value="3">Rich</option>
              </select>
            </div>
          </form>
          {showErrMsg ? (
            <div className="text-red-600  mt-2 capitalize">
              Please fill all fields before continuing
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center justify-between pt-5">
            <button
              onClick={() => {
                setPage(page - 1);
              }}
              className="md:w-4/12 rounded-md text-center text-white bg-[#000] p-3 duration-300  hover:bg-[#241c1c] "
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (
                  checkIsFilled(
                    4,
                    numOfViews,
                    maleViews,
                    femaleViews,
                    socialClass
                  )
                ) {
                  setPage(page + 1);
                } else {
                  setshowErrMsg(true);
                }
              }}
              className="rounded-md text-center text-white bg-[#F67A01] py-3 px-5 duration-300 md:w-4/12 hover:bg-[#ff9900] "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BankDetails = ({ page, setPage, updateFields, bankName,accountNumber,accountName }) => {
  //  const [bankName, setBankName] = useState("");
  //  const [accountNumber, setAccountNumber] = useState("");
  //  const [accountName, setAccountName] = useState("");

   const [showErrMsg, setshowErrMsg] = useState(false);

   return (
     <motion.div
       className="mt-12 md:mt-32"
       initial={{ opacity: 0 }}
       animate={{
         opacity: 1,
         x: 0,
         transition: {
           duration: 0.5,
           type: "ease",
           damping: 25,
           stiffness: 500,
         },
       }}
       exit={{ opacity: 0, x: window.innerWidth }}
     >
       <div className="bg-white lg:w-4/12 md:6/12 w-12/12 m-auto my-10 shadow-md transition ease-in-out delay-500">
         <div className="py-8 px-8 rounded-xl">
           <h1 className="font-medium text-2xl mt-3 text-start">
             {" "}
             Create Account
           </h1>
           <h3 className="font-light text-sm text-start">
             Input your bank details
           </h3>
           <motion.div
             initial={{ opacity: 0.9 }}
             animate={{
               opacity: 1,
               x: 0,
               transition: {
                 duration: 1,
                 type: "tween",
                 damping: 25,
                 stiffness: 500,
               },
             }}
             exit={{ opacity: 0, x: window.innerWidth }}
           >
             <ProgressBar width={80} />
           </motion.div>

           <form action="">
             <div className="my-5 text-sm flex-col flex gap-3">
               <input
                 type="text"
                 name="bank-name"
                 onChange={(e) => {
                   updateFields({ bankName: e.target.value });
                   setshowErrMsg(false);
                 }}
                 value={bankName}
                 autoFocus
                 id="bank-name"
                 className="rounded-lg px-auto focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                 placeholder="Bank Name"
               />

               <input
                 type="text"
                 name="account-number"
                 onChange={(e) => {
                   updateFields({ accountNumber: e.target.value });
                   setshowErrMsg(false);
                 }}
                 value={accountNumber}
                 id="account-number"
                 className="rounded-lg px-auto focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                 placeholder="Account Number"
               />

               <input
                 type="text"
                 name="account-name"
                 onChange={(e) => {
                   updateFields({ accountName: e.target.value });
                   setshowErrMsg(false);
                 }}
                 value={accountName}
                 id="account-name"
                 className="rounded-lg px-auto focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                 placeholder="Account Name"
               />
             </div>
           </form>
           {showErrMsg ? (
             <div className="text-red-600  mt-2 capitalize">
               Please fill all fields before continuing
             </div>
           ) : (
             ""
           )}
           <div className="flex items-center justify-between pt-5">
             <button
               onClick={() => {
                 setPage(page - 1);
               }}
               className="md:w-4/12 rounded-md text-center text-white bg-[#000] p-3 duration-300  hover:bg-[#241c1c] "
             >
               Previous
             </button>
             <button
               onClick={() => {
                 if (checkIsFilled(3, bankName, accountName, accountNumber)) {
                   setPage(page + 1);
                 } else {
                   setshowErrMsg(true);
                 }
               }}
               className="rounded-md text-center text-white bg-[#F67A01] py-3 px-5 duration-300 md:w-4/12 hover:bg-[#ff9900] "
             >
               Next
             </button>
           </div>
         </div>
       </div>
     </motion.div>
   );
 };

export default BlurberMultiPartForm;
