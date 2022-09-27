import {useState} from "react";
import states from "./states";
import {motion} from 'framer-motion'
import { BsUpload } from "react-icons/bs";
import { useRouter } from "next/router";

function utils() {
  return <div>utils</div>;
}

export const ProgressBar = ({ width }) => {
  return (
    <div className="mt-6">
      <span className="text-sm font-medium">{`${width}% completed`}</span>

      <div
        id="progress-bar"
        className={` flex justify-start mt-3 m-auto bg-gray-300 rounded-full h-2.5 dark:bg-gray-700`}
      >
        <div
          className={`bg-[#F67A01] h-2.5 rounded-full `}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export const checkIsFilled = (num, a, b, c, d, e, f) => {
  switch (num) {
    case 1:
      a = a;
      b = true;
      c = true;
      d = true;
      e = true;
      f = true;

      break;
    case 4:
      a = a;
      b = b;
      c = c;
      d = d;
      e = true;
      f = true;

      break;
    case 6:
      a = a;
      b = b;
      c = c;
      d = d;
      e = e;
      f = f;
      break;
    case 3:
      a = a;
      b = b;
      c = c;
      d = true;
      e = true;
      f = true;
      break;

    default:
      break;
  }

  if (a && b && c && d && e && f) return true;
  return false;
};

export const checkNumber = (str, length) => {
  const reg = new RegExp("^[0-9]+$");
  var pattern = new RegExp("/^[0-9]{11}$/");

  let showErr = false;

  if (!reg.test(str) && str.length < length) {
    showErr = true;
  }

  return (
    <div>
      {showErr ? (
        <div>
          <span className="text-red-500">Please input a valid number</span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export const JobsCard = ({ cover, description, client, status }) => {
  return (
    <div className="flex  items-center justify-center  md:px-4 w-full  md:my-0">
      <div className="md:max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 md:hover:scale-105 hover:shadow-xl">
        <img src={cover} alt="" className="object-contain max-h-[40%] " />
        <div className="p-4 text-start">
          <div className=" flex m-2 w-full relative">
            <div
              className="w-[40px] h-[40px] mr-2  rounded-full border-[2px] border-solid border-black  bg-contain bg-no-repea bg-center"
              style={{ backgroundImage: `url(${cover})` }}
            ></div>
            <div className="capitalize font-bold text-xl">{client}</div>
            <div className="justify-self-end absolute right-0 top-1">
              <button>
                <BsUpload />
              </button>
            </div>
          </div>
          {}

          <p className="font-normal text-sm mb-5 text-baseGray opacity-60 text-justify ">
            {description}
          </p>
          <button className="w-full rounded-md bg-lightOrng text-baseOrng  py-2 hover:bg-orange-200 hover:shadow-md duration-75">
            {status || "Accept Job"}
          </button>
        </div>
      </div>
    </div>
  );
};

export const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  
  const className = router.asPath.includes(href)
    ? "text-baseOrng"
    : "text-black";

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div>
      <a href={href} onClick={handleClick}  className={className}>
        {children}
      </a>
    </div>
  );
};


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
                    onClick={() => {setShowModal(false)}}
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

 
 export const Spinner = () => {
   return (
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: '0', background: 'none', display: 'flex', shapeRendering: 'auto'}} width="100%" height="200%" viewBox=" 0 0 100 100" preserveAspectRatio="xMidYMid">
  <g transform="rotate(0 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9090909090909091s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(32.72727272727273 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8181818181818182s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(65.45454545454545 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.7272727272727273s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(98.18181818181819 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6363636363636364s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(130.9090909090909 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5454545454545454s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(163.63636363636363 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.45454545454545453s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(196.36363636363637 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.36363636363636365s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(229.0909090909091 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.2727272727272727s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(261.8181818181818 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.18181818181818182s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(294.54545454545456 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.09090909090909091s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(327.27272727272725 50 50)">
    <rect x="46.5" y="27.5" rx="2.5500000000000003" ry="2.5500000000000003" width={7} height={15} fill="#f4f4f4">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
    </rect>
  </g>
</svg>

   )
 }
 
export const nairaFormatter = (number) => {
    const { format } = new Intl.NumberFormat("en-Uk");
  let balance = format(number);
  
  
  return <span> &#8358;{balance }</span>;
   
 }



export default utils;
