import React from "react";
import { useState, useContext } from "react";
import { arrContext } from "./quick";

export default function ArrInGraph() {
  const arrdetail = useContext(arrContext);
  const [arr, newArr] = useState(arrdetail.array);
  return (
    <>
    <div className="xl:w-[93%] h-[79%] max-h-array flex flex-cols justify-center items-center bg-gray-200 p-8 ml-12 pb-12 max-xl:w-[91.6%] max-lg:w-[89.5%] max-md:w-[85.8%] max-sm:w-[83.2%]">
      <div
        className="w-[100vh] h-[50%] flex justify-center items-end max-sm:hidden"
        id="barContainer"
      >
          {
          arr.map((val, ind) => {
            return (
              <div
                className="w-[7%] bg-blue-300 m-1 text-center"
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
          <dialog className="w-[70vh] text-[2rem] text-center bg-gray-200 sm:hidden" open>Please rotate your device to landscape mode for a better user experience</dialog>
      </div>
      <div className="xl:w-[93%] h-[15%] bg-gray-200 ml-12 max-xl:w-[91.6%] max-lg:w-[89.5%] max-md:w-[85.8%] max-sm:w-[83.2%]"></div>
    </>
  );
}
