import React ,{useState,useEffect} from "react";
import { ProgressBar } from "../utils/utils";
import upload from './upload.svg'

function ClientMultiPartForm() {
  const CompanyDetails = ({ page, setPage }) => {
    return (
      <div className="mt-32">
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
          <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-start">
              Create Account
            </h1>
            <h3 className="font-light text-sm text-start">
              Client sign up form
            </h3>
            <ProgressBar width={50} />
            <form action="" encType="multipart/form-data">
              <div className="my-5 text-sm flex-col flex gap-3">
                <input
                  type="text"
                  name="company-name"
                  autoFocus
                  id="company-name"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                  placeholder="Company Name"
                />
                <input
                  type="text"
                  name="company-rep"
                  autoFocus
                  id="company-rep"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                  placeholder="Company Representative' Name"
                />
                <input
                  type="text"
                  name="company-rep-contact"
                  autoFocus
                  id="company-rep-conatct"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                  placeholder="Representative’s Contact"
                />
                <input
                  type="email"
                  name="company-rep-email"
                  autoFocus
                  id="company-rep-email"
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                  placeholder="Representative’s Email"
                />

                {/* upload compony logo ,the input is covered so i could style it like the design */}
                <label
                  htmlFor="logo"
                  className=" text-center p- cursor-pointer bg-gray-100"
                >
                  <div className=" flex justify-start items-center p-0">
                    <span className="bg-[#fcdb2400] md:px-auto flex justify-center capitalize items-center gap-2 px-2 py-2 rounded-lg text-lg w-full text-black  text-center md:p-auto whitespace-nowrap ">
                      Upload company logo
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
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </span>
                    {/* <p className="text-lg mx-auto bg-gray-100 md:w-8/12 hidden md:block w-0 py- whitespace-nowrap text-center">
                      Company Logo
                    </p> */}
                  </div>
                  <input
                    className="form-control f"
                    style={{ display: "none" }}
                    type="file"
                    accept="image/png, image/gif, image/jpeg ,image/webp"
                    name="company-logo"
                    required
                    id="logo"
                  />
                </label>
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
                  Client sign up form
                </h3>
                <ProgressBar width={100} />
                <form action="">
                  <div className="my-5 text-sm flex-col flex gap-3 relative">
                    <input
                      type="text"
                      name="company-name"
                      //  autoFocus
                      id="company-name"
                      className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
                      placeholder={`Blurb Angel ID (optional)`}
                    />
                    <label htmlFor="username" className="text-[#1A284B]">
                      Login details
                    </label>
                    <input
                      type="text"
                      name="username"
                      // autoFocus
                      id="username"
                      className="rounded-sm px-4 py-3  focus:outline-none bg-gray-100 focus:bg-white w-full"
                      placeholder="Username"
                    />
                    <input
                      type={passwordType ? "password" : "text"}
                      name="password"
                      autoComplete="false"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                      //autoFocus
                      id="password"
                      className="rounded-lg px-auto focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                      placeholder="Password"
                    />
                    <input
                      required
                      type={CpasswordType ? "password" : "text"}
                      name="Cpassword"
                      onChange={(e) => {
                        setCPassword(e.target.value);
                        setIsCPasswordDirty(true);
                      }}
                      value={cPassword}
                      // autoFocus
                      id="Cpassword"
                      className="rounded-lg px-auto focus:bg-white py-3 mt-3 outline-black bg-gray-100 w-full"
                      placeholder="Confirm Password"
                    />
                    {/*toggle password */}

                    <div
                      className="absolute right-4 top-48"
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
                      className="absolute right-4 bottom-4"
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
                <button className="block text-center text-white bg-[#F67A01] p-3 duration-300 rounded-sm hover:bg-[#ff9900] w-full">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        );
    }
    
    const [page, setpage] = useState(0);
    const componentsList = [
      <CompanyDetails page={page} setPage={setpage} />,
      <SecurityDetails page={page} setPage={setpage} />,
    ];
  return (
    <div>
      <div>{componentsList[page]}</div>
    </div>
  );
}

export default ClientMultiPartForm;
