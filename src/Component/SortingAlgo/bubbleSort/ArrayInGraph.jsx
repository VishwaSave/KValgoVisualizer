import React from "react";
import { useState, useContext } from "react";
import { arrContext } from "./bubble";

export default function ArrInGraph() {
  const arrdetail = useContext(arrContext);
  const [arr, newArr] = useState(arrdetail.array);
  return (
    <>
      <div className="w-[93%] h-[70%] flex flex-cols justify-center items-center bg-gray-200 p-8 ml-12 pb-12">
        <div
          className="w-[100vh] h-[100%] flex justify-center items-end"
          id="barContainer"
        >
          {
          arr.map((val, ind) => {
            return (
              <div
                className="w-[7%] bg-blue-300 m-1 text-center transition-all duration-[3s] ease-out"
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
      </div>
      <div className="w-[93%] h-[15%] bg-gray-200 ml-12 "></div>
    </>
  );
}
