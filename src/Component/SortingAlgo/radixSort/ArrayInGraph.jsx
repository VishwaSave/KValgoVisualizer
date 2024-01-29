import React from "react";
import { useState, useContext } from "react";
import { arrContext } from "./radix";

export default function ArrInGraph() {
  const arrdetail = useContext(arrContext);
  const [arr, newArr] = useState(arrdetail.array);
  return (
    <>
      <div className="w-[100%] h-[73%]" id="disContainer">
      <div className="max-h-array h-[55.3%] flex justify-center bg-gray-200 pr-[2rem] mx-[3rem]">
        <div
          className="w-[50%] h-[2rem] flex ml-[15%] mt-20 max-sm:hidden max-h-array-ins"
          id="barContainer"
        >
            {arr.map((val, ind) => {
              return (
                <div
                  className="w-[3rem] m-[0.2rem] h-[2rem] text-center border-2 border-black"
                  id={"bar" + ind}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="max-h-array h-[79%] flex items-end pr-[2rem] mx-[3rem] pb-12 bg-gray-200 gap-x-[15px] transition transition-all ease-in-out duration-200 "
          id="buckets"
        ></div>
        <dialog className="w-[90%] text-[10rem] ml-[4rem] text-center bg-gray-200 sm:hidden vert" open>Please rotate your device to landscape mode for a better user experience</dialog>
        <dialog className="w-[90%] text-[12px] ml-[4rem] text-center bg-gray-200 hidden hori" open>This site can't be run on this device please try another device</dialog>
    </div>
    </>
  );
}
