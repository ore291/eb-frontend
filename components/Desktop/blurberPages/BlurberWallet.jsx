import { nairaFormatter } from "../../utils/utils";
import { ConfirmModal, SeenModal } from "../../utils/modals";
import { Table, Button, Modal ,Spinner} from "flowbite-react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";





function BlurberWallet() {
const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  
  
  const twoWeeks = new Date(+new Date() + 12096e5).toDateString();
  const Payments = [
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
      status: "pending",
    },
    {
      amount: "1900",
      date: "10 Nov, 2020 11:10 AM",
      status: "pending",
    },
    {
      amount: "1900",
      date: "10 Nov, 2020 11:10 AM",
      status: "pending",
    },
    {
      amount: "1900",
      date: "10 Nov, 2020 11:10 AM",
      status: "paid",
    },
  ];

  return (
    <div className="grid m-4 gap-y-6">
      <section className="w-full flex items-center justify-around gap-y-1 shadow">
        <div className=" flex text-center ml-3 w-4/12  justify-center items-center  rounded-xl h-[184px]  bg-radial-at-bl from-[#363636] via-slate-800 to-[#191919]  bg-gradient-to-r shadow-lg  dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-r">
          <div className="text-4xl flex flex-col bg-gradient-to-tr from-gray-100 to-gray-300 font-bold bg-clip-text text-transparent font-sans">
            <span className="">{nairaFormatter("400000")}</span>
            <span className="text-sm"> your wallet balance</span>
          </div>
        </div>
        <div className="flex text-center bg-white dark:bg-slate-800 dark:text-white flex-col overflow-hidden w-7/12 h-[184px] ml-auto mr-3 justify-center items-center  rounded-xl  py-8 shadow">
          <p className="text-sm text-baseGray dark:text-slate-400">
            Withdaw button would be made active every two weeks
          </p>
          <p className="dark:text-slate-400">
            next withdrawal{" "}
            <span className="text-black dark:text-white font-black">
              {twoWeeks}
            </span>
          </p>

          <button
            onClick={() => {
              setShowWithdrawModal(true);
            }}
            className="w-2/4 mx-auto mt-5 rounded-md bg-lightOrng text-baseOrng  py-2 hover:bg-orange-200 hover:shadow-md duration-75"
          >
            Withdraw
          </button>
        </div>
      </section>
      <div className="flex justify-between mt-9 ">
        <h1 className="text-4xl text-baseOrng dark:text-baseOrng/90 text-center">
          Payment History
        </h1>
        <div className="bg-baseOrng bg-clip-content flex ml-auto w-fit  rounded-lg text-white">
          <Button color={"#fkffkk"} onClick={() => setShowClearCartModal(true)}>
            See All
          </Button>
        </div>
      </div>
      <section className="max-h-72 no-scroll overflow-scroll">
        <PaymentsTable data={Payments} />
      </section>
      <WithdrawModal
        showModal={showWithdrawModal}
        setShowModal={setShowWithdrawModal}
        
      />
    </div>
  );
}
  const PaymentsTable = ({ data }) => {
    return (
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y ">
          {data
            .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
            .slice(0, 10)
            .map((value, index) => (
              <Table.Row
                key={index}
                className="bg-white whitespace-nowrap first-letter:capitalize dark:border-gray-700 dark:bg-gray-800 h-[20px]"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {value.amount}
                </Table.Cell>
                <Table.Cell>{value.date}</Table.Cell>
                <Table.Cell className="flex justify-start">
                  <div
                    className={`${
                      value.status == "paid"
                        ? "bg-[#C9FBDA99] text-lightGreen dark:text-green-300"
                        : " text-red-500 bg-red-50"
                    } opacity-60 py-1 px-2 dark:bg-inherit text-center  rounded-lg capitalize`}
                  >
                    {value.status}
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    );
  };

const WithdrawModal = ({showModal,setShowModal}) => {
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
    <React.Fragment>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header className="dark:bg-slate-800">
          Withdraw from wallet
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            Available wallet balance is:
            <span className="text-black font-bold">
              {nairaFormatter("400000")}
            </span>{" "}
            <br />
            Your funds will be sent to your{" "}
            <span className="text-black font-bold">
              Access Bank (234567823)
            </span>
          </div>

          <form action="" method="post" className="mt-6 gap-y-2 flex flex-col">
            <label htmlFor="amount">Amount to Withdraw</label>
            <input
              id="amount"
              type={`text`}
              className="rounded-xl px-4 py-3  bg-gray-300 focus:bg-slate-100  w-full"
              placeholder="e.g 4000"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-xl px-4 py-3 bg-gray-300 focus:bg-slate-100 w-full"
              placeholder="Password"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowConfirm(true);
              }}
              className=" mt-6  items-center  max-h-12 text-lg   text-center text-white bg-baseOrng p-3 duration-300 rounded-lg hover:bg-[#ff9900]  w-8/12 mx-auto"
            >
              {!isLoading ? (
                "WITHDRAW TO BANK"
              ) : (
                <div className="w-full justify-center items-center gap-1  flex overflow-visible ">
                  <div className=" text-lg capitalize">processing</div>
                  <div className=" h-full">
                    <Spinner aria-label="Spinner button example" />
                  </div>
                </div>
              )}
            </button>
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
                body={"Your funds has been sent to your bank account!"}
              />
            </AnimatePresence>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default BlurberWallet;
