import React, { useState } from "react";
import { JobsCard } from "../utils/utils";
import { VscSettings } from "react-icons/vsc";
import Link from "next/link";
import { motion } from "framer-motion";

function BlurberHome() {
  const [showFilter, setShowFilter] = useState(false);

  const jobs = [
    {
      cover: "https://placedog.net/400",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem ggggg ",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
    },
    {
      cover: "https://placedog.net/500",
      client: "israel padonu",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum iusto magnam obcaecati molestiae animi numquam cupiditate cum id, a quia nihil sapiente. Sequi sit obcaecati debitis quisquam tempora quidem",
    },
  ];
  return (
    <>
      <div className="">
        <main className="">
          <div className="flex items-center realtive p-2 justify-between font-semibold text-2xl ">
            <div>
              Blurb<span className="text-[#C40505]">Jobs</span>
            </div>

            <div className="relative">
              <Link href="/notifications">
                <span className="absolute text-sm text-white bg-red-500 rounded-full right-0 top-0 px-1 z-50 hover:scale-105 cursor-pointer ">
                  0
                </span>
              </Link>
              {/* bell svg */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* <span className='text-red-800 absolute top-12 text-4xl right-0'>.</span> */}
            </div>
          </div>

          <form
            action=""
            method="get"
            className="pt-2 relative mx-auto text-gray-600 flex  gap-1 md:justify-start  md:flex-auto"
          >
            {/* search bar */}
            <input
              className="border-2 border-gray-300 text-start bg-white h-10 px-10 pr-16 w-full md:w-6/12 rounded-lg text-sm "
              type="search"
              name="search"
              placeholder="Search for jobs"
            />
            {/* search icon */}
            <button
              type="submit"
              className="absolute left-2 opacity-50 top-0 mt-5 mr-4"
            >
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>

            {/* filter by button */}
            <div className="rotate-90 flex items-center   md:hidden bg-baseOrng rounded-lg  text-white ">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowFilter((prev) => !prev);
                }}
              >
                <VscSettings className="w-10 mx-auto" size={`32`} />
              </button>
            </div>
          </form>
        </main>

        <div className="">
          {/* filter by div */}
          <React.Fragment>
            <div
              className={`fixed top-0 left-0  h-full w-screen    blur-lg ${
                showFilter ? "block" : "hidden"
              }`}
              onClick={() => setShowFilter(false)}
            ></div>
            <motion.div
              initial={{
                y: "-100vh",
              }}
              animate={{
                y: "0vh",
                transition: {
                  ease: "easeIn",
                  duration: 0.5,
                  type: "linear",
                },
              }}
              // className={`absolute right-0 top-30 md:hidden z-10 mt- w-full  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              //
              // }`}
              className={`${
                showFilter ? "absolut" : "hidden"
              } absolut mx-auto justify-center  z-50 w-full origin-top-right rounded-md mt-2 md:h-0 transition-all ease-in-out duration-200 md:hidden shadow-lg bg-white`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1 text-gray-400" role="none">
                {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                <span className="ml-3 text-black text-lg py-3">Filter by</span>

                <a
                  href="#"
                  className="text-gray-500 block px-4 py-2 text-base  active:bg-gray-100 hover:text-baseOrng"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  Available Jobs
                </a>
                <a
                  href="#"
                  className="text-gray-500 block px-4 py-2 text-base  active:bg-gray-100 hover:text-baseOrng"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  Accepted Jobs
                </a>
                <a
                  href="#"
                  className="text-gray-500 block px-4 py-2 text-base  active:bg-gray-100 hover:text-baseOrng"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  Submitted Jobs
                </a>
                <a
                  href="#"
                  className="text-gray-500 block px-4 py-2 text-base  active:bg-gray-100 hover:text-baseOrng"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  Approved Jobs
                </a>
                <a
                  href="#"
                  className="text-gray-500 block px-4 py-2 text-base  active:bg-gray-100 hover:text-baseOrng"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  Declined Jobs
                </a>
              </div>
            </motion.div>
          </React.Fragment>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 mt-6">
            {jobs.map((job, key) => (
              <JobsCard
                cover={job.cover}
                client={job.client}
                description={job.description}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlurberHome;
