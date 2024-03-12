import React from "react";

export default function Codesider() {
  return (
    <div className="w-[100%] flex justify-end max-sm:hidden">
      <div className="w-[26rem] h-[9rem] py-2 absolute bottom-[3.5rem] justify-end flex max-h-codeSider max-md:bottom-[4.5rem]">
        <div
          className="w-[22.5rem] h-[100%] bg-green-300 mr-2 hidden max-h-codeSider-ins text-[0.93rem]"
          id="codeContainer"
        >
        <div className="px-2" id="br1">
          create 10 buckets (queues) for each digit (0 to 9)
        </div>
        <div className="px-2" id="br2">
          for each digit placing
        </div>
        <div className="px-2" id="br3">
          for each e in list, move e into its bucket
        </div>
        <div className="px-2" id="br4">
          for each bucket b, starting from smallest digit
        </div>
        <div className="px-2" id="br5">
          while b is non-empty, restore e to list
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
