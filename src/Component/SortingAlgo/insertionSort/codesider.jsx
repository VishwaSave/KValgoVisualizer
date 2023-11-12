import React from "react";

export default function Codesider() {
  return (
    <div className="w-[26%] h-[26.5%] py-2 absolute bottom-16 right-[0px] flex justify-end">
      <div
        className="w-[83%] h-[100%] bg-green-300 mr-2 hidden"
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
