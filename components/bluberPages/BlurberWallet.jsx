import React from "react";

function BlurberWallet() {
  const { format } = new Intl.NumberFormat("en-Uk");
  let balance = format("4000000");
  const payments = [
    {
      amount: "1500",
      date: "10 Nov, 2020 11:10 AM",
      status: "paid",
    },
    {
      amount: "1500",
      date: "10 Nov, 2020 11:10 AM",
      status: "paid",
    },
    {
      amount: "1500",
      date: "10 Nov, 2020 11:10 AM",
      status: "paid",
    },
    {
      amount: "1500",
      date: "10 Nov, 2020 11:10 AM",
      status: "paid",
    },
    {
      amount: "1500",
      date: "10 Nov, 2020 11:10 AM",
      status: "paid",
    },
    {
      amount: "1500",
      date: "10 Nov, 2020 11:10 AM",
      status: "paid",
    },
    {
      amount: "1500",
      date: "10 Nov, 2020 11:10 AM",
      status: "paid",
    },
  ];
  return (
    <div className="flex flex-col gap-16 min-h-screen h-full w-full bg-bgGray overflow-auto wallet  md:mb-0 md:w-8/12 mx-auto">
      <div className="mx-auto w-full bg-[#f4f4f4] ">
        <div className=" flex text-center  overflow-hidden w-12/12 mx-auto justify-center items-center mt-3 rounded-xl h-[184px] bg-gradient-to- bg-radial-at-bl from-[#363636] via-blac to-[#191919]  bg-gradient-to-r shadow-lg">
          <div className="text-4xl flex flex-col bg-gradient-to-tr from-gray-100 to-gray-300 font-bold bg-clip-text text-transparent font-sans">
            <span className=""> &#8358;{balance}</span>
            <span className="text-sm"> your wallet balance</span>
          </div>
        </div>

        <div className="flex text-center bg-white flex-col overflow-hidden w-12/12 mx-auto justify-center items-center mt-8 rounded-xl h-max py-8 shadow">
          <p className="text-sm text-baseGray">
            Withdaw button would be made active every two weeks
          </p>
          <p>
            next withdrawal{" "}
            <span className="text-black font-black">10 feb 2021</span>
          </p>
          <button className="w-2/4 mx-auto mt-5 rounded-md bg-lightOrng text-baseOrng  py-2 hover:bg-orange-200 hover:shadow-md duration-75">
            Withdraw
          </button>
        </div>
      </div>

      <div className=" bg-white rounded-xl ">
        <div className="flex justify-between py-4 px-2">
          <span className="text-lg capitalize"> payment history</span>
          <span className="text-[#00A5FF]">see all</span>
        </div>
        <div className="max-h-72 md:max-h-min overflow-auto wallet md:s scroll-pb-40">
          {payments.map((payment) => (
            <div className="flex justify-between items-cente mb-2">
              <div className="flex flex-col px-1">
                <span className="text-[#EA4A2B] text-2xl font-medium">
                  {payment.amount}
                </span>
                <span className="text-xs text-baseGray opacity-80">
                  {payment.date}
                </span>
              </div>

              <div
                className={`${
                  payment.status == "paid"
                    ? "bg-[#C9FBDA99] text-[#00BA88] "
                    : ""
                } opacity-60 px-6 m-1 py-2  text-center rounded-lg `}
              >
                {payment.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlurberWallet;