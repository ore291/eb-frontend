import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Notifications() {
  const Notifications = [
    {
      author: "BM01",
      content: `Good day Blurbers.. 
If you are new, the process of successfully completing a Blurb job is easy.
 When you are assigned a job:
 Carefully read the Blurb instruction on each job before accepting a job, 
Click the "Accept Job" button,
Download the material if the job comes `,
    },
    {
      author: "BM01",
      content: `Good day Blurbers.. 
If you are new, the process of successfully completing a Blurb job is easy.
 When you are assigned a job:
 Carefully read the Blurb instruction on each job before accepting a job, 
Click the "Accept Job" button,
Download the material if the job comes `,
    },
    {
      author: "BM01",
      content: `Good day Blurbers.. 
If you are new, the process of successfully completing a Blurb job is easy.
 When you are assigned a job:
 Carefully read the Blurb instruction on each job before accepting a job, 
Click the "Accept Job" button,
Download the material if the job comes `,
    },
    {
      author: "BM01",
      content: `Good day Blurbers.. 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id fugit voluptatem ullam, incidunt at fugiat asperiores delectus error. Facere aspernatur ducimus nemo illo libero expedita voluptate. Magni molestiae voluptas dolores.
 `,
    },
  ];
  return (
    <div className="min-h-scree bg-bgGray h-full overflow-scroll">
      <div className="flex flex-col gap-y-6">
        {Notifications?.map((notification, index) => (
          <SeeMore
            author={notification.author}
            content={notification.content}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

const SeeMore = ({ author, content }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <AnimatePresence>
      <motion.article
        className="bg-white rounded-lg transition duration-300 ease-in-out  justify-center flex flex-col gap-y-4"
        
        style={{ height: showMore ? "max-content" : "min-content" }}
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: '0',
          transition: {
            duration: 0.6,
            type: "spring",
            ease: "easeIn",
            damping: 25,
            stiffness: 500,
          },
        }}
        exit={{
          x: "100vw",
          transition: {
            duration: 0.4,
            type: "ease",
            ease: "easeOut",
            damping: 25,
            stiffness: 500,
          },
        }}
      >
        <div className="flex justify-between px-4 py-2 ">
          <p>
            From:{" "}
            <span className="text-baseGray text-xl font-bold ">{author}</span>
          </p>
          <button className=" cart-btn" onClick={() => {}}>
            <HiX size={"15"} />
          </button>
        </div>
        <div>
          <p className="font-normal text-sm text-slate-500 mx-auto w-11/12 text-start  whitespace-pre-line text-clip ">
            {showMore ? content : content.substring(0, 102)}
            {showMore ? <span></span> : <span>{""}...</span>}
          </p>
        </div>
        <button
          className="bg-lightOrng mt-3  text-baseOrng rounded-lg mx-auto w-9/12 p-2 text-lg font-bold capitalize mb-2"
          onClick={() => {
            setShowMore((prev) => !prev);
          }}
        >
          {showMore ? "show less" : "show more"}
        </button>
      </motion.article>
    </AnimatePresence>
  );
};

export default Notifications;
