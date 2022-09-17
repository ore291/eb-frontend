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

export default utils;
