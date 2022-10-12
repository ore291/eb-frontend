import {useState} from "react";
import Tabs from "react-simply-tabs";
import Link from "next/link";

function ClientUploads() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activePlans = [
    {
      packType: "Enterprise",
      image: "/images/betway.png",
      expectedImpressions: "20,000+",
      gottenImpression: "592,345",
    },
    {
      packType: "Enterprise",
      image: "/images/betway.png",
      expectedImpressions: "20,000+",
      gottenImpression: "592,345",
    },
    {
      packType: "Enterprise",
      image: "/images/betway.png",
      expectedImpressions: "20,000+",
      gottenImpression: "592,345",
    },
    {
      packType: "Enterprise",
      image: "/images/betway.png",
      expectedImpressions: "20,000+",
      gottenImpression: "592,345",
    },
  ];

  return (
    <Tabs
      className="min-h-screen mt-6"
      activeTabIndex={activeTabIndex}
      onRequestChange={setActiveTabIndex}
      activeTabProps={{
        className: "active w-full",
      }}
      tabsWrapperProps={{
        className: "w-full",
      }}
      activeControlProps={{
        className:
          "active bg-white rounded-lg transition duration-500 ease-in-out",
      }}
      controlsWrapperProps={{
        className: "bg-[#e4e4e5] rounded duration-300 ease-in-out",
      }}
      controls={[
        <button
          type="button"
          className="rounded-lg px-6 w-2/4"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Active
        </button>,
        <button type="button" className="rounded-lg px-6 w-2/4">
          Expired
        </button>,
      ]}
    >
      {/* Active plans tab */}
      <div className="max-h-screen overflow-auto mt-5 uploads flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-y-6 gap-y-6">
        {activePlans.map((plan, index) => (
          <div
            className="flex  items-center justify-center  md:px-4 w-full  md:my-0 "
            key={index}
          >
            <div className="md:max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 md:hover:scale-105 hover:shadow-xl ">
              <img
                src={plan.image}
                alt=""
                className="object-contain max-h-[10%] "
              />

              <div className="p-4 text-start">
                <div className=" flex m-2 w-full relative">
                  <div className="capitalize font-bold text-xl">
                    {plan.packType} pack
                  </div>
                </div>
                {}

                <div className="font-normal text-sm mb-5 text-baseGray opacity-60 text-justify ">
                  <p className="text-baseGray font-medium text-base my-1">
                    Expected Impressions:{"  "}
                    <span className="text-baseOrng text-lg font-semibold ">
                      {plan.expectedImpressions}
                    </span>
                  </p>
                  <p className="text-baseGray font-medium text-base my-1">
                    Impression Gotten:{" "}
                    <span className="text-baseOrng text-lg font-semibold ">
                      {plan.gottenImpression}
                    </span>
                  </p>
                </div>
                <Link href={"/uploads/impressions"}>
                  <button className="w-full rounded-md bg-lightOrng text-baseOrng  py-2 hover:bg-orange-200 hover:shadow-md duration-75">
                    {"See Details"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Expired plans tab */}
      <div className="max-h-screen overflow-auto mt-5 uploads flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-y-6 gap-y-6">
        {" "}
        {activePlans.map((plan, index) => (
          <div
            className="flex  items-center justify-center   md:px-4 w-full  md:my-0 "
            key={index}
          >
            <div className="md:max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 md:hover:scale-105 hover:shadow-xl ">
              <img
                src={plan.image}
                alt=""
                className="object-contain max-h-[10%] "
              />

              <div className="p-4 text-start">
                <div className=" flex m-2 w-full relative">
                  <div className="capitalize font-bold text-xl">
                    {plan.packType} pack
                  </div>
                </div>
                {}

                <div className="font-normal text-sm mb-5 text-baseGray opacity-60 text-justify ">
                  <p className="text-baseGray font-medium text-base my-1">
                    Expected Impressions:{"  "}
                    <span className="text-baseOrng text-lg font-semibold ">
                      {plan.expectedImpressions}
                    </span>
                  </p>
                  <p className="text-baseGray font-medium text-base my-1">
                    Impression Gotten:{" "}
                    <span className="text-baseOrng text-lg font-semibold ">
                      {plan.gottenImpression}
                    </span>
                  </p>
                </div>
                <Link href={"/uploads/impressions"}>
                  <button className="w-full rounded-md bg-lightOrng text-baseOrng  py-2 hover:bg-orange-200 hover:shadow-md duration-75">
                    {"See Details"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Tabs>
  );
}

export default ClientUploads;
