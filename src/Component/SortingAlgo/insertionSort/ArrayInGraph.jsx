import React from "react";
import { useState, useContext } from "react";
import { arrContext } from "./Insertion";

export default function ArrInGraph() {
  const arrdetail = useContext(arrContext);
  const [arr, newArr] = useState(arrdetail.array);
  return (
    <>
    <div className="h-[79%] max-h-array flex flex-cols justify-end items-center bg-gray-200 pr-[2rem] mx-[3rem] pb-12">
      <div
        className="w-[50%] h-[10rem] flex justify-end relative right-[25%] items-end max-sm:hidden max-md:right-[35%] max-h-array-ins"
        id="barContainer"
      >
          {
          arr.map((val, ind) => {
            return (
              <div
                className="w-[3rem] bg-blue-300 m-[0.2rem] relative text-center"
                style={{
                  height: val + "%",
                }}
                id={"bar" + ind}
              >
                <span className="relative bottom-6">{val}</span>
              </div>
            );
          })}
        </div>
          <dialog className="w-[90%] text-[10rem] ml-[4rem] text-center bg-gray-200 sm:hidden vert" open>Please rotate your device to landscape mode for a better user experience</dialog>
          <dialog className="w-[90%] text-[12px] ml-[4rem] text-center bg-gray-200 hidden hori" open>This site can't be run on this device please try another device</dialog>
      </div>
      <div className="h-[19%] bg-gray-200 mx-[3rem]" id="extra"></div>
    </>
  );
}
