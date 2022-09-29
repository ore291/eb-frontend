import { useState } from "react";
import states from "./states";
import { motion } from "framer-motion";
import { BsUpload } from "react-icons/bs";
import { useRouter } from "next/router";



export const ConfirmModal = ({
  showModal,
  setShowModal,
  setshowSeen,
  title,
  body,
}) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };
  return (
    <>
      {showModal ? (
        <>
          <motion.div
            className="justify-center items-center   flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
            }}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-auto my- mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full mx-auto bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  justify-betwee p-3 rounded-t">
                  <h3 className="text-xl font-semibold text-center mx-auto capitalize">
                    {title}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p- flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed md:mx-2 md:px-2 mx-2">
                    {/* Are you sure you want to withdraw the amount entered? */}
                    {body}
                  </p>
                </div>
                {/*footer*/}

                <div className="flex items-center justify-between p-6  rounded-b">
                  <button
                    className="text-baseOrng bg-lightOrng font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-baseOrng text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setshowSeen(true);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowModal(false);
            }}
          ></motion.div>
        </>
      ) : null}
    </>
  );
};

export const SeenModal = ({ showModal, setShowModal, title, body }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };
  return (
    <>
      {showModal ? (
        <>
          <motion.div
            className="justify-center items-center   flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
            }}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-auto my- mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  mx-auto bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  justify-betwee p-3 rounded-t">
                  <h3 className="text-xl font-semibold text-center mx-auto">
                    {title}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p- flex-auto">
                  <p className="my-2 text-slate-500 text-lg leading-relaxed md:mx-2 md:px-2 mx-2">
                    {body}
                  </p>
                </div>
                {/*footer*/}

                <div className="flex items-center justify-center p-4  rounded-b">
                  <button
                    className="bg-baseOrng text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowModal(false);
            }}
          ></motion.div>
        </>
      ) : null}
    </>
  );
};

export const UploadModal = ({ showModal, setShowModal, title, body }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };
  return (
    <>
      {showModal ? (
        <>
          <motion.div
            className="justify-center items-center   flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
            }}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-auto my- mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  p-3 rounded-t">
                  <h3 className="text-xl font-semibold text-center mx-auto">
                    {title}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative px-12 flex-auto">
                  <p className="my-4 w-full text-slate-500 text-lg leading-relaxed md:mx-2 md:px-2 mx-2">
                    {body}
                  </p>
                </div>
                {/*footer*/}

                <div className="flex items-center justify-center p-6  rounded-b">
                  <button
                    className="bg-baseOrng text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Start Blurb
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowModal(false);
            }}
          ></motion.div>
        </>
      ) : null}
    </>
  );
};


export const CartModal = ({
  showModal,
  setShowModal,
  setshowSeen,
  title,
  body,
}) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };
  return (
    <>
      {showModal ? (
        <>
          <motion.div
            className="justify-center items-center   flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
            }}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-auto my- mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full mx-auto bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  justify-betwee p-3 rounded-t">
                  <h3 className="text-xl font-semibold text-center mx-auto capitalize">
                    {title}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p- flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed md:mx-2 md:px-2 mx-2">
                    {/* Are you sure you want to withdraw the amount entered? */}
                    {body}
                  </p>
                </div>
                {/*footer*/}

                <div className="flex items-center justify-between p-6  rounded-b">
                  <button
                    className="text-baseOrng bg-lightOrng font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-baseOrng text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setshowSeen(true);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowModal(false);
            }}
          ></motion.div>
        </>
      ) : null}
    </>
  );
};
