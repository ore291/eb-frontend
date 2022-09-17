import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";
import React, { useState,useEffect } from "react";
import states from "../utils/states";
import { ProgressBar } from "../utils/utils";

function BlurberMultiPartForm() {
  const [gender, setGender] = useState("");
  const [ageBracket, setAgeBracket] = useState('')
  const [salary, setSalary] = useState('')
  const [employment, setEmployment] = useState('')
  const [education, setEducation] = useState('')
  


  const [naijaState, setNaijaState] = useState("");
  const [naijaLga, setNaijaLga] = useState("");
  const [lga, setLga] = useState([]);

  const SelectState = () => {
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
            <ProgressBar width={0} />
            <form action="" className="mt-6">
              <div className="my-5 text-sm">
                <input
                  type="text"
                  name="fullName"
                  autoFocus
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
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full focus:bg-white"
                  placeholder="Email"
                />
              </div>
              <div className="my-5 text-sm">
                <input
                  type="text"
                  id="Phone"
                  name="Phone"
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
  const LocationDetails = () => {
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
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
                  autofocus
                  id="city"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                  placeholder="City"
                />
              </div>

              <SelectState />
            </form>
            <button className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full">
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  };

  const OccupationDetails = () => {
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
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
                  name="numbers_contact"
                  autofocus
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
            <button className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full">
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  };

  const WhatsappDetails = () => {
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
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
                    setEducation(e.target.value);
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
            <button className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full">
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  }

  const BankDetails = () => {
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
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
            <button className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full">
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  }

  const SecurityDetails = () => {
        const [cPassword, setCPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [password, setPassword] = useState("");
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    useEffect(() => {
         if (isCPasswordDirty) {
           if (password === cPassword) {
             setShowErrorMessage(false);
           } else {
             setShowErrorMessage(true);
           }
         }          
    }, [cPassword])
    
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
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
              <div className="my-5 text-sm flex-col flex gap-3">
                <input
                  type="password"
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
                  type="password"
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
  }

  return (
    <div>
      <PersonalDetails />
      <LocationDetails />
      <OccupationDetails />
      <WhatsappDetails />
      <BankDetails />
      <SecurityDetails />
    </div>
  );
}

export default BlurberMultiPartForm;
