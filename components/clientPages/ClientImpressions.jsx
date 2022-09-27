import React from "react";
import {
  verifyPhoneNumber,
  sanitizePhoneNumber,
} from "nigerian-phone-number-validator";

function ClientImpressions() {
  const hashNumber = (str) => {
    try {
      const fullNumber = sanitizePhoneNumber(str, {
        mode: "throwInvalid",
      });
      const hashedNumber = fullNumber.substring(0, fullNumber.length - 2) + "**";
      if (hashedNumber.length > 14) {
        return "invalid Number";
      } else {
        return hashedNumber;
      }
    } catch (error) {
      return error.message;
    }
  };

  

  const impressions = [
    {
      number: "08154422996",
      impressions: "5000",
    },
    {
      number: "08154422996",
      impressions: "6000",
    },
    {
      number: "08133909876",
      impressions: "1000",
    },
    {
      number: "08057880646",
      impressions: "500",
    },
    {
      number: "07064870646",
      impressions: "600",
    },
    {
      number: "07057902036",
      impressions: "850",
    },
    {
      number: "08054422996",
      impressions: "920",
    },
    {
      number: "2348154422996",
      impressions: "5",
    },
  ];
  return (
    <div className="min-h-screen bg-bgGray">
      <div className="flex flex-col gap-3 max-h-screen overflow-auto ">
        {impressions.map((impression, index) => (
          <div
            className="bg-white grid grid-cols-3 grid-rows-2 gap-x-6 p-1 rounded-lg "
            key={index}
          >
            <span className="col-span-1 text-textGray/90">Number</span>
            <span className="col-span-1 text-textGray/90">Impressions</span>
            <span className="col-span-1 row-start-2">
              +{hashNumber(impression.number)}
            </span>
            <span className="col-span-1 row-start-2  ">
              {impression.impressions}
            </span>
            <button className="col-span-1 row-span-2 capitalize bg-lightOrng/25 m-2 rounded-lg text-baseOrng">
              view
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientImpressions;
