import React from "react";
import states from "./states";
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
  // a = a ||null
  // b = b || null;
  // c = c || null;
  // d = d || true;

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

export const ActiveLink =({ children, href }) =>{
  const router = useRouter();
  const style = {
    
    color: router.asPath.includes(href) ? "" : "black",
  };
  const className = router.asPath.includes(href)
    ? "text-baseOrng"
    : "text-black";

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div>
      <a href={href} onClick={handleClick} style={style}  className={className}>
        {children}
      </a>
    </div>
  );
}



export default utils;
