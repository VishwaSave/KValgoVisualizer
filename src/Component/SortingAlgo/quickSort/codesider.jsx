import React from "react";

export default function Codesider() {
  return (
    <div className="w-[100%] flex justify-end max-sm:hidden">
      <div className="w-[26rem] h-[12rem] py-2 absolute bottom-[3.5rem] justify-end flex max-h-codeSider max-md:bottom-[4.5rem]">
        <div
          className="w-[20rem] h-[100%] bg-green-300 mr-2 hidden max-h-codeSider-ins"
          id="codeContainer"
        >
        <div className="px-2" id="br1">
          for each (unsorted) partition
        </div>
        <div className="px-2" id="br2">
          set first element as pivot
        </div>
        <div className="px-2" id="br3">
          storeIndex = pivotIndex+1
        </div>
        <div className="px-2" id="br4">
          for i = pivotIndex+1 to rightmostIndex
        </div>
        <div className="px-2" id="br5">
          if ((a[i] {"<"} a[pivot]) or (equal but 50% lucky))
        </div>
        <div className="px-2" id="br6">
          swap(i, storeIndex); ++storeIndex
        </div>
        <div className="px-2" id="br7">
          swap(pivot, storeIndex-1)
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
