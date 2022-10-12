import React from 'react'
import { nairaFormatter } from '../utils/utils';

function BlurberPayments() {
    const payments = [
      {
        amount: "1500",
        date: "10 Nov, 2020 11:10 AM",
        status: "paid",
      },
      {
        amount: "2235",
        date: "10 Nov, 2020 11:10 AM",
        status: "paid",
      },
      {
        amount: "900",
        date: "10 Nov, 2020 11:10 AM",
        status: "paid",
      },
      {
        amount: "150",
        date: "10 Nov, 2020 11:10 AM",
        status: "paid",
      },
      {
        amount: "90000",
        date: "10 Nov, 2020 11:10 AM",
        status: "paid",
      },
      {
        amount: "1000",
        date: "10 Nov, 2020 11:10 AM",
        status: "paid",
      },
      {
        amount: "7500",
        date: "10 Nov, 2020 11:10 AM",
        status: "paid",
      },
      {
        amount: "1900",
        date: "10 Nov, 2020 11:10 AM",
        status: "paid",
      },
  ];
   const { format } = new Intl.NumberFormat("en-Uk");
  return (
    <div className="flex flex-col gap-16 min-h-screen md:h-full h-full w-full bg-whit overflow-aut0 wallet  md:mb-0 md:w-8/12 mx-auto">
      <div className=" bg-white rounded-xl h-full">
        <div className="flex justify-between py-4 px-2">
          <span className="text-lg capitalize">Today</span>
        </div>
        <div className=" md:max-h-min overflow-auto wallet md:s scroll-pb-0">
          {payments.map((payment,index) => (
            <div className="flex justify-between  mb-2" key={index}>
              <div className="flex flex-col px-1">
                <span className="text-[#EA4A2B] text-2xl font-medium text-start">
                  &#8358;{format(payment.amount)}
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
                } opacity-60 px-6 m-1 py-2  text-center rounded-lg capitalize`}
              >
                {payment.status}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between py-4 px-2">
          <span className="text-lg capitalize">Yesterday</span>
        </div>
        <div className=" md:max-h-min overflow-auto wallet md:s scroll-pb-0">
          {payments.map((payment) => (
            <div className="flex justify-between  mb-2">
              <div className="flex flex-col px-1">
                <span className="text-[#EA4A2B] text-2xl font-medium text-start">
                  {nairaFormatter(payment.amount)}
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
                } opacity-60 px-6 m-1 py-2  text-center rounded-lg capitalize`}
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

export default BlurberPayments