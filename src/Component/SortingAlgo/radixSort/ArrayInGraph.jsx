import React from "react";
import { useState, useContext } from "react";
import { arrContext } from "./radix";

export default function ArrInGraph() {
  const arrdetail = useContext(arrContext);
  const [arr, newArr] = useState(arrdetail.array);
  return (
    <>
      <div className="w-[100%] h-[70%]" id="disContainer">
        <div className="w-[93%] h-[21%] flex justify-center bg-gray-200 p-8 ml-12">
          <div
            className="w-[70%] h-[100%] flex ml-[15%]"
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
          className="w-[93%] h-[79%] flex items-end p-8 ml-12 pb-12 bg-gray-200 gap-x-[15px] transition transition-all ease-in-out duration-200"
          id="buckets"
        ></div>
      </div>
      <div className="w-[93%] h-[15%] bg-gray-200 ml-12 "></div>
    </>
  );
}
