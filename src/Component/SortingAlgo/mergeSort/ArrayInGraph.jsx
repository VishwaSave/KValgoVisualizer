import React from "react";
import { useState, useContext } from "react";
import { arrContext } from "./Merge";

export default function ArrInGraph() {
  const arrdetail = useContext(arrContext);
  const [arr, newArr] = useState(arrdetail.array);
  return (
    <div className="h-[100%]">
    <div className="h-[48%] flex flex-cols justify-end items-center bg-gray-200 pr-[2rem] mx-[3rem] pb-12">
      <div
        className="w-[50%] h-[17rem] flex justify-end relative right-[25%] items-end max-sm:hidden max-md:right-[35%] max-h-array-ins"
        id="barContainer"
      >
          {
          arr.map((val, ind) => {
            return (
              <div
                className={`w-[3rem] bg-blue-300 m-[0.2rem] text-center`}
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
      <div className=" h-[50%] flex justify-end items-end pr-[2rem] mx-[3rem] pb-12 bg-gray-200 transition transition-all ease-in-out duration-200"><div className="w-[50%] h-[17rem] flex justify-end relative right-[25%] items-end max-sm:hidden max-md:right-[35%] max-h-array-ins" id="extra">
          {
          arr.map((val, ind) => {
            return (
              <div
                className={`w-[3rem] m-[0.2rem] bar${ind}`}
              >
              </div>
            );
          })}
          </div>
          </div>
    </div>
  );
}
