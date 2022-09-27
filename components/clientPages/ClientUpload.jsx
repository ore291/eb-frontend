import  { useState, useEffect } from "react";
import states from "../utils/states";
import { BsUpload } from "react-icons/bs";
import {UploadModal} from '../utils/utils'
import { AnimatePresence } from "framer-motion";

function ClientUpload() {
  const statesList = Object.keys(states).map((state, i) => ({
    id: i + 1,
    name: state,
    checked: false,
  }));

  const [state, setStates] = useState(statesList);
  const [checkedStates, setCheckedStates] = useState();

  const [caption, setCaption] = useState("");
  const [link, setLink] = useState("");

   const [showUploadModal,setShowUploadModal]=useState(false)

  const handleClick = (event, index) => {
    const newArr = state.map((obj) => {
      let state = obj.checked;
      if (obj.id === index) {
        return { ...obj, checked: !state };
      }
      return obj;
    });
    setStates(newArr);
  };

  const selectAll = () => {
    const newArr = state.map((obj) => {
      let state = obj.checked;
      if (obj.id >= 0) {
        return { ...obj, checked: !state };
      }
      return obj;
    });
    setStates(newArr);
  };

  useEffect(() => {
    const checkedState = state?.filter((obj) => {
      return obj.checked === true;
    });
    console.log(checkedStates);
    setCheckedStates(checkedState);

    return () => {};
  }, [state]);

  return (
    <div className="h-full bg-bgGray  flex flex-col gap-12 mx-auto">
      <div className="w-full">
        <form
          action=""
          method="post"
          className="mt-7 flex flex-col gap-y-6 realtive"
          encType="multipart/form-data"
        >
          <textarea
            id="message"
            name="caption"
            value={caption}
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            rows="4"
            className="block p-2.5 w-full text-base text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Caption for Material (optional)"
          ></textarea>
          <textarea
            id="message"
            name="link"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
            rows="4"
            className="block p-2.5 w-full text-base text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter link (optional)"
          ></textarea>
          <label
            htmlFor="logo"
            className=" text-center p- cursor-pointer bg-gray-100"
          >
            <div className=" flex justify-start items-center p-0">
              <span className="bg-baseOrng mt-6 text-white md:px-auto flex justify-center items-center gap-2 px-2 py-2 rounded-lg text-lg w-full   text-center md:p-auto whitespace-nowrap ">
                Upload Image or Video
                <BsUpload />
              </span>
            </div>
            <input
              className="form-control "
              style={{ display: "none" }}
              type="file"
              accept="image/png, image/gif, image/jpeg ,image/webp"
              name="company-logo"
              required
              id="logo"
            />
          </label>

          <div>
            <div className="text-start text-lg text-gray-900">
              <h1>Choose Demograph :</h1>
            </div>
            <div className="text-start text-lg text-gray-900 max-h-72 overflow-auto">
              <ul className="bg-white rounded-lg">
                <li className="">
                  <div className="flex gap-2 items-center mb-3 px-2">
                    <input
                      type="checkbox"
                      className="rounded "
                      id={`custom-checkbox-${`100`}`}
                      name={`select-all`}
                      value={` `}
                      onChange={(e) => {}}
                      onClick={(e) => selectAll()}
                    />
                    <label
                      htmlFor={`custom-checkbox-${`100`}`}
                    >{`Toggle select`}</label>
                  </div>
                </li>
                {state.map(({ name, id, checked }, index) => {
                  return (
                    <li key={index}>
                      <div className="">
                        <div className="flex gap-3 items-center px-2 pb-2">
                          <input
                            type="checkbox"
                            className="rounded "
                            checked={checked}
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            onChange={(e) => {}}
                            onClick={(e) => handleClick(e, id)}
                          />
                          <label
                            className="capitalize text-xl"
                            htmlFor={`custom-checkbox-${index}`}
                          >
                            {name}
                          </label>
                        </div>
                        <div className="right-section"></div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowUploadModal(true);
            }}
            className="w-full absolut my-3 rounded-lg bottom-0 bg-baseOrng text-white  p-3  "
          >
            Upload
          </button>
        </form>
      </div>
      <div>
        <AnimatePresence>
          <UploadModal
            className=""
            showModal={showUploadModal}
            setShowModal={setShowUploadModal}
            title={"Upload"}
            body={"Blurb uploaded sucessfully"}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ClientUpload;
