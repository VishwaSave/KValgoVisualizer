import React from "react";
import { useState, useContext } from "react";
import { arrContext } from "./radix";

export default function ArrInGraph() {
  const arrdetail = useContext(arrContext);
  const [arr, newArr] = useState(arrdetail.array);
  return (
    <>
      <div className="w-[100%] h-[70%]" id="disContainer">
      <div className="xl:w-[93%] max-h-array h-[55.3%] flex justify-center bg-gray-200 p-8 ml-12 max-xl:w-[91.6%] max-lg:w-[89.5%] max-md:w-[85.8%] max-sm:w-[83.2%]">
        <div
          className="w-[70%] h-[20%] flex ml-[15%] mt-12 max-sm:hidden"
          id="barContainer"
        >
            {arr.map((val, ind) => {
              return (
                <div
                  className="w-[50px] py-[1.5px] m-1 text-center border-2 border-black"
                  id={"bar" + ind}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="xl:w-[93%] h-[79%] flex items-end p-8 ml-12 pb-12 bg-gray-200 gap-x-[15px] transition transition-all ease-in-out duration-200 max-xl:w-[91.6%] max-lg:w-[89.5%] max-md:w-[85.8%] max-sm:w-[83.2%]"
          id="buckets"
        ></div>
        <dialog className="w-[70vh] text-[2rem] text-center bg-gray-200 sm:hidden" open>Please rotate your device to landscape mode for a better user experience</dialog>
    </div>
    <div className="xl:w-[93%] h-[15%] bg-gray-200 ml-12 max-xl:w-[91.6%] max-lg:w-[89.5%] max-md:w-[85.8%] max-sm:w-[83.2%]"></div>
    </>
  );
}
