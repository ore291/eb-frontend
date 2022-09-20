import React from "react";
import states from "./states";

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
    showErr= true

  }

  return <div>{showErr ? (
    <div>
      <span className="text-red-500">Please input a valid number</span>
    
    </div>) :
    (<div>
      
  </div>)}
  </div>;
};


export const jobsCard = ({cover,description,slug,client}) => {
  return (
 <div className="flex  items-center justify-center bg-indigo-50 px-4">
  <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
    <img src={cover} alt="plant" className="h-auto w-full" />
        <div className="p-5">
          <div>{client }</div>
          {}
          
          <p className="font-medium mb-5 text-gray-700">{description}</p>
      <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button>
    </div>
  </div>
</div>

  )
}


export default utils;
