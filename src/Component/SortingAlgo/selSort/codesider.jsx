import React from "react";

export default function Codesider() {
  return (
    <div className="w-[100%] flex justify-end max-sm:hidden">
      <div className="w-[26rem] h-[11rem] py-2 absolute bottom-[3.5rem] justify-end flex max-h-codeSider max-md:bottom-[4.5rem]">
        <div
          className="w-[22rem] h-[100%] bg-green-300 mr-2 hidden max-h-codeSider-ins text-[0.93rem]"
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
          className="w-[3rem] bg-green-300 text-[3rem] h-[100%] flex flex-cols justify-center items-center text-center max-h-codeSider-btn"
          onClick={(e) => {
            if (e.currentTarget.innerText === "<") {
              e.currentTarget.innerText = ">";
              document
                .getElementById("codeContainer")
                .classList.remove("hidden");
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
    </div>
  );
}
