import React from "react";

export default function Codesider() {
  return (
    <div className="w-[100%] flex justify-end max-sm:hidden">
    <div className="w-[26rem] h-[7rem] py-2 absolute bottom-[3.5rem] justify-end flex max-h-codeSiderbottom-[2rem] max-md:bottom-[4.5rem]">
      <div
        className="w-[20rem] h-[100%] bg-green-300 mr-2 hidden max-h-codeSider-ins"
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
        className="w-[3rem] bg-green-300 text-[3rem] h-[100%] flex flex-cols justify-center items-center text-center max-h-codeSider-btn"
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
        </div>
  );
}
