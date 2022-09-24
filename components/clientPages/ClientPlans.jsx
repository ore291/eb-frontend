import { nairaFormatter } from "../utils/utils";
import { BiCheckboxChecked } from "react-icons/bi";
import Link from "next/link";

function ClientPlans() {
  const packs = [
    {
      title: "Nano pack",
      price: "12000",
      descriptions: {
        1: "20,000+ Overall Impressions",
        2: "2 days in a week",
        3: "Maximum file upload 30",
      },
      totalUploads: 2,
    },
    {
      title: "starter pack",
      price: "34000",
      descriptions: {
        1: "60,000+ Overall Impressions",
        2: "3 days in a week",
        3: "Maximum file upload 30",
      },
      totalUploads: 4,
    },
  ];
  return (
    <div className="h-screen bg-bgGray">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 mt-6  bg-bgGray ">
        {packs.map((pack, key) => (
          <div className="bg-white p-5" key={key}>
            <div className="text-start text-lg font-bold capitalize">
              {pack.title}
            </div>
            <div className="text-center text-baseRed  font-bold text-3xl my-2">
              {nairaFormatter(pack.price)}
            </div>
            <ul className="flex flex-col p-3 text-lg font-medium">
              {Object.values(pack.descriptions).map((des, i) => (
                <li
                  key={i}
                  className="flex items-center first-letter:capitalize gap-1 "
                >
                  <BiCheckboxChecked className="text-baseOrng bg-lightOrng bg-clip-text opacity-100" />
                  {des}
                </li>
              ))}
            </ul>
            <p className="font-bold text-start text-lg ">
              {"Total Uploads : "}
              <span className="text-baseOrng font-extrabold text-xl">{pack.totalUploads}</span>
            </p>
            
            <button className="bg-lightOrng mt-3 mb-0 text-baseOrng rounded-lg mx-auto w-full md:w-9/12 p-3 text-lg font-bold">
              Upload Blurb Material
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientPlans;
