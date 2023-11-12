import React from "react";

export default function Codesider() {
  return (
    <div className="w-[26%] h-[18%] py-2 absolute bottom-16 right-[0px] flex justify-end">
      <div
        className="w-[83%] h-[100%] bg-green-300 mr-2 hidden"
        id="codeContainer"
      >
        <div className="px-2" id="br1">
          For i = 0 to indexOfLastUnsortedElement-2
          <br />
          For j = 0 to indexOfLastUnsortedElement-2
        </div>
        <div className="px-2" id="br2">
          If currentElement {">"} rightElement
        </div>
        <div className="px-2" id="br3">
          Swap(currentElement, rightElement)
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
