import React ,{useState} from 'react'
import {BsInfoLg} from 'react-icons/bs'

function BluberWithdraw() {
    const [withdrawAmount, setWithdrawAmount] = useState()
  return (
    <div className="flex flex-col gap-9 min-h-screen md:h-full h-full w-full bg-bgGray overflow-aut0 wallet  md:mb-0 md:w-8/12 mx-auto">
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
              setWithdrawAmount(e.target.value);
            }}
            id="password"
            className="rounded-xl px-4 py-5 mt-3 focus:outline-none bg-gray-100 focus:bg-white w-full"
            placeholder="Password"
          />
        </div>
        <button className="block mt-36 text-center text-white bg-[#F67A01] p-3 duration-300 rounded-lg hover:bg-[#ff9900] w-full">
          WITHDRAW TO BANK
        </button>
      </form>
    </div>
  );
}

export default BluberWithdraw