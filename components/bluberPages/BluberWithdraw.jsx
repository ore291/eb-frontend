import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsInfoLg } from "react-icons/bs";
import { ConfirmModal, SeenModal, Spinner } from "../utils/utils";
import {AnimatePresence} from 'framer-motion'

function BluberWithdraw() {
  const [withdrawAmount, setWithdrawAmount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSeen, setShowSeen] = useState(false);


  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);

      setShowSeen(true);
    }, 5000);
    clearTimeout();
  }

  


  
  return (
    <div className="flex flex-col  min-h-screen  h-full w-full bg-bgGray overflow-auto wallet  md:mb-0 md:w-8/12 mx-auto">
      <div className="text-start py-4 ">
        <p className="text-2xl ">Withdraw from wallet</p>
        <p className="text-baseOrng text-base py-2">
          Available wallet balance is: N400,000
        </p>
      </div>

      <div className="bg-[#18A880] rounded-xl  py-8 w-full flex justify-around text-white text-base items-center">
        <p className="bg-[#096b4f] opacity-30 w-2/12 h-min rounde-xl p-4 rounded-xl mx- text-center">
          <BsInfoLg size={30} className="text-white" />
        </p>
        <p className="w-9/12 text-start">
          Your funds will be sent to your Access Bank (234567823)
        </p>
      </div>

      <form action="" method="post">
        <div className="my-10 text-sm flex-col flex gap-3">
          <input
            type="text"
            name="withdraw-amount"
            onChange={(e) => {
              setWithdrawAmount(e.target.value);
            }}
            id="withdraw-amount"
            className="rounded-xl px-4 py-5 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
            placeholder="Amount to withdraw (e.g 4000)"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            className="rounded-xl px-4 py-5 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
            placeholder="Password"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowConfirm(true);
          }}
          className="flex justify-center h-12  items-center absolute max-h-14 text-lg  bottom-4 text-center text-white bg-baseOrng p-3 duration-300 rounded-lg hover:bg-[#ff9900] w-full md:w-8/12 md:mx-auto"
        >
          {!isLoading ? (
            "WITHDRAW TO BANK"
          ) : (
            <div className="w-32 justify-center items-center gap-3  flex overflow-visible ">
              <div className="w-2/4 text-lg capitalize">processing</div>
              <div className="w-2/4 h-full">
                {" "}
                <Spinner />
              </div>
            </div>
          )}
        </button>
      </form>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        <ConfirmModal
          showModal={showConfirm}
          setShowModal={setShowConfirm}
          setshowSeen={setIsLoading}
          title={"confirm transfer"}
          body={"Are you sure you want to withdraw the amount entered?"}
        />

        <SeenModal
          showModal={showSeen}
          setShowModal={setShowSeen}
          title={"Sent"}
          body={"Your funds has been sent to your bank account"}
        />
      </AnimatePresence>
    </div>
  );
}

export default BluberWithdraw;
