import React from "react";

export default function Codesider() {
  return (
    <div className="w-[26%] h-[26%] py-2 absolute bottom-16 right-[0px] flex justify-end">
      <div
        className="w-[83%] h-[100%] bg-green-300 mr-2 hidden"
        id="codeContainer"
      >
        <div className="px-2" id="br1">
          split each element into partitions of size 1
        </div>
        <div className="px-2" id="br2">
          recursively merge adjacent partitions
        <br/>
          for i = leftPartIdx to rightPartIdx
        </div>
        <div className="px-2" id="br3">
          if leftPartHeadValue {"<="} rightPartHeadValue
          <br />
          copy leftPartHeadValue
        </div>
        <div className="px-2" id="br4">
          else: copy rightPartHeadValue
        </div>
        <div className="px-2" id="br5">
          copy elements back to original array
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
