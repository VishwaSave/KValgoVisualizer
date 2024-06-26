import React from "react";

export default function Codesider() {
  return (
    <div className="w-[100%] flex justify-end max-sm:hidden">
      <div className="w-[26rem] h-[12rem] py-2 absolute bottom-[3.5rem] justify-end flex max-h-codeSider max-md:bottom-[4.5rem]">
        <div
          className="w-[20rem] h-[100%] bg-green-300 mr-2 hidden max-h-codeSider-ins text-[0.93rem]"
          id="codeContainer"
        >
        <div className="px-2" id="br1">
          Mark first element as sorted
          <br />
        </div>
        <div className="px-2" id="br2">
          For each unsorted element X<br />
          'Extract' the element X
          <br />
        </div>
        <div className="px-2" id="br3">
          For j = lastSortedIndex down to 0
          <br />
        </div>
        <div className="px-2" id="br4">
          If current element j {">"} X
          <br />
          Move sorted element to the right by 1
          <br />
        </div>
        <div className="px-2" id="br5">
          Break loop and insert X here
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
