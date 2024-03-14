import React from "react";
import { useState, useContext, useEffect } from "react";
import { listContext } from "./linkedlist";

export default function ListR() {
  const listdetail = useContext(listContext);
  const [list, newList] = useState(listdetail.list);
  useEffect(() => {
    if (list.length > 1) {
      let ao = document.getElementById("title0");
      ao.innerHTML = "<b>head/0</b>";
      let bo = document.getElementById(`title${list.length - 1}`);
      bo.innerHTML = "<b>tail/" + (list.length - 1) + "</b>";
    } else {
      let bo = document.getElementById(`title${list.length - 1}`);
      bo.innerHTML = "<b>head/tail/0</b>";
    }
    let n =
      document.getElementById("barContainer").children[list.length - 1]
        .children[0];
    n.children[1].classList.add("hidden");
    n.children[2].classList.add("hidden");
    n.children[3].classList.add("hidden");
    n.children[4].classList.add("hidden");
    n.children[5].classList.add("hidden");
    n.children[6].classList.add("hidden");
  }, [list]);
  return (
    <>
      <div className="w-[100%] h-[73%] max-lg:text-[1.5rem]" id="disContainer">
        <div className=" h-[86vh] flex justify-center items-center bg-gray-200 pr-[2rem] mx-[3rem]">
          <div
            className="w-[100%]  h-[2rem] flex justify-center relative bottom-[100px] max-sm:hidden max-h-array-ins"
            id="barContainer"
          >
            {list.map((val, ind) => {
              return (
                <div>
                  <div className="flex">
                    <div
                      className="w-[4rem] max-lg:w-[5rem] pb-[1.4rem] max-lg:pb-[2.1rem] text-center border-4 border-black rounded-[50%] z-10 font-extrabold"
                      id={"bar" + ind}
                    >
                      {val}
                    </div>
                    <div className="relative w-5">
                      <hr
                        className={
                          "w-7 h-1 bg-black absolute top-1.5 left-[-0.5rem] transition ease-in-out duration-[3s] arrow-" + ind
                        }
                      />
                    </div>
                    <div className="absolute">
                      <hr
                        className={
                          "w-2 h-1 bg-black relative top-1 left-[5.05rem] rotate-45 arrow-" +
                          ind
                        }
                      />
                    </div>
                    <div className="absolute">
                      <hr
                        className={
                          "w-2 h-1 bg-black relative top-2 left-[5.05rem] rotate-[140deg] arrow-" +
                          ind
                        }
                      />
                    </div>
                    <div className="absolute">
                      <hr
                        className={
                          "w-7 h-1 bg-black relative right-[-3.8rem] top-5 transition ease-in-out duration-[3s] arrow-" + ind
                        }
                      />
                    </div>
                    <div className="absolute">
                      <hr
                        className={
                          "w-2 h-1 bg-black border-0 relative top-[23px] left-[3.75rem] rotate-45 arrow-" +
                          ind
                        }
                      />
                    </div>
                    <div className="absolute">
                      <hr
                        className={
                          "w-2 h-1 bg-black border-0 relative top-[19px] left-[3.8rem] rotate-[140deg] arrow-" +
                          ind
                        }
                      />
                    </div>
                  </div>
                  <div
                    className="w-[4rem] max-lg:w-[5rem] text-center text-red-700 z-50"
                    id={"title" + ind}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <dialog
          className="w-[90%] text-[10rem] ml-[4rem] text-center bg-gray-200 sm:hidden vert"
          open
        >
          Please rotate your device to landscape mode for a better user
          experience
        </dialog>
        <dialog
          className="w-[90%] text-[12px] ml-[4rem] text-center bg-gray-200 hidden hori"
          open
        >
          This site can't be run on this device please try another device
        </dialog>
      </div>
    </>
  );
}
