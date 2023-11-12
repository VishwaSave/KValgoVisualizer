import React from "react";

export default function Codesider() {
  return (
    <div className="w-[27%] h-[23%] py-2 absolute bottom-16 right-[0px] flex justify-end">
      <div
        className="w-[83%] h-[100%] bg-green-300 mr-2 hidden"
        id="codeContainer"
      >
        <div className="px-2" id="br1">
          Repeat (numOfElements - 1) times
          <br />
          Set the first unsorted element as the minimum
          <br />
          For each of the unsorted elements
        </div>
        <div className="px-2" id="br2">
          If element {"<"} currentMinimum
          <br />
        </div>
        <div className="px-2" id="br3">
          Set element as new minimum
          <br />
        </div>
        <div className="px-2" id="br4">
          Swap minimum with first unsorted position
          <br />
        </div>
      </div>
      <button
        className="w-[59px] bg-green-300 text-[3rem] h-[100%] flex flex-cols justify-center items-center text-center"
        onClick={(e) => {
          if (e.currentTarget.innerText === "<") {
            e.currentTarget.innerText = ">";
            document.getElementById("codeContainer").classList.remove("hidden");
          } else {
            e.currentTarget.innerText = "<";
            document.getElementById("codeContainer").classList.add("hidden");
          }
        }}
        id="cdbtn"
      >
        {"<"}
      </button>
    </div>
  );
}
