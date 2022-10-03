import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { VscBriefcase, VscBell } from "react-icons/vsc";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { BsSunFill, BsSun } from "react-icons/bs";
import { RiWallet3Line } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";

function DesktopLayout({children}) {
  const [darkToggle, setDarkToggle] = useState(false);
  const [sideBarOpen, setsideBarOpen] = useState(false);

  const routes = [
    {
      icon: <FaHome size={24} />,
      name: "dashboard",
      link: "/dashboard",
    },
    {
      icon: <RiWallet3Line size={24} />,
      name: "wallet",
      link: "/wallet",
    },
    {
      icon: <MdOutlinePayments size={24} />,
      name: "payments",
      link: "/payments",
    },
    {
      icon: <VscBriefcase size={24} />,
      name: "profile",
      link: "/profile",
    },
  ];

  const showAnimation = {
    hidden: {
      width: 'auto',
      opacity: 2,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const SideBarItem = ({ icon, name, link }) => {
    const location = window.location.href;
    const className = location.includes(link) ? "text-baseOrng" : "dark:text-white";
    return (
      <Link href={link}>
        <div className={`side-bar-item ${className} dark:${className}`}>
          <div className="py-2">{icon}</div>
          <AnimatePresence>
            {sideBarOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                // animate="show"
                exit="hidden"
                className={`text-2xl  capitalize font-bold  dark:${className}`}
              >
                {name}
              </motion.div>
            )}
            ` `
          </AnimatePresence>
        </div>
      </Link>
    );
  };

  return (
    <div
      className={`grid grid-cols-5 no-scroll  gap-0 ${
        darkToggle && "dark"
      }`}
    >
      <nav className="row-start-1 no-scroll col-span-5  border-b border-slate-200 shadow-sm h-12 rounded dark:rounded-sm dark:bg-black dark:border-black dark:text-white flex flex-row justify-between items-center">
        <div
          // onClick={() => {
          //   setsideBarOpen((prev) => !prev);
          // }}
          className="font-semibold text-2xl px-4 py-2"
        >
          Blurb<span className="text-[#C40505]">Jobs</span>
        </div>
        <div className="relative mr-8 flex gap-6">
          <button
            className="h-full transition-all duration-500 flex justify-center items-center"
            onClick={() => setDarkToggle(!darkToggle)}
          >
            {darkToggle ? <BsSun size={24} /> : <BsSunFill size={24} />}
          </button>

          <a href="/notifications">
            <VscBell className="text-black dark:text-white cursor-progress" size={30} />
            <span className="absolute text-sm text-white bg-red-500 rounded-full right-0 top-0 px-1 z-50 hover:scale-105 cursor-pointer ">
              0
            </span>
          </a>
          {/* bell svg */}
        </div>
      </nav>

      <div className="flex w-scree h-screen col-span-5 no-scroll">
        <AnimatePresence>
          <motion.aside
            // layout
            animate={{ width: sideBarOpen ? "192px" : "48px" }}
            data-expanded={false}
            transition={{
              // type: "linear",
              duration: 0.5,

              // damping: 25,
              // stiffness: 500,
              layout: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className={`desk-sidebar w-12 no-scroll col-start-1 `}
          >
            <motion.div
              onClick={() => {
                setsideBarOpen((prev) => !prev);
              }}
              className={` w-full flex justify-end pr-2 mt-2`}
            >
              <FaBars
                size={30}
                className={`${
                  sideBarOpen && "rotate-90"
                } transition-all duration-300`}
              />
            </motion.div>
            <nav className="mt-12 flex flex-col gap-y-6">
              {routes.map((route, index) => (
                <div className="" key={index}>
                  <SideBarItem
                    // key={index}
                    icon={route.icon}
                    name={route.name}
                    link={route.link}
                  />
                </div>
              ))}
            </nav>
          </motion.aside>
        </AnimatePresence>

        <main className="w-full  bg-bgGray dark:bg-black/90 no-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DesktopLayout;
