import "../../App.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Bubble from "./bubbleSort/bubble";
import Selection from "./selSort/selection";
import Insertion from "./insertionSort/Insertion";
import Quick from "./quickSort/quick";
import Radix from "./radixSort/radix";
import { Link } from "react-router-dom";
import play from "../../img&other/play.png"

export default function Sorting() {
  const [Component, newComponent] = useState(<Bubble />);
  const [foot, newFoot] = useState();
  const speech = window.speechSynthesis;
  const [count, newCount] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      newFoot(<Footer />);
      if(count<1)
      newCount(count+1);
    },50);
  },[count])
  
  function MoveLocate(e, nam) {
    document.getElementById('ppcont').disabled=true;
    e.currentTarget.innerText = nam;
    speech.cancel();
    document.getElementById('play/pause').src=play;
    let a = [...document.getElementById("navbarContainer").children];
    a.map((val, ind) => {
      if (ind !== 0) {
        if (a[ind].children[0] !== e.currentTarget)
          a[ind].children[0].innerText = a[ind].children[0].innerText.slice(
            0,
            3
          );
        a[ind].children[0].classList.remove("text-white");
        a[ind].children[0].disabled=false;
      }
    });
    switch (e.currentTarget.innerText) {
      case "SELECTION SORT":
        newComponent(<Selection />);
        break;

      case "INSERTION SORT":
        newComponent(<Insertion />);
        break;

      case "QUICK SORT":
        newComponent(<Quick />);
        break;

      case "RADIX SORT":
        newComponent(<Radix />);
        break;

      default:
        newComponent(<Bubble />);
        break;
    }
    e.currentTarget.classList.remove("text-yellow-400");
    e.currentTarget.classList.add("text-white");
    e.currentTarget.disabled=true
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-gray-900">
      <div className="w-[100%] h-[3.2rem] bg-gray-900 text-white max-sm:h-[20rem]">
        <div
          className="flex w-[95rem] pl-[1rem] align-center z-10"
          id="navbarContainer"
        >
          <div className="text-[2.2rem] max-h-name">
            <Link to="/" className="ml-[0.4rem] max-sm:text-[10rem]">
              <button>KValgoVisualizer</button>
            </Link>
          </div>
          <div className="text-lg mt-[0.9rem] ml-[0.6rem] text-gray-400 max-sm:hidden">
            <button
              className="text-white"
              onClick={(e) => {
                MoveLocate(e, "BUBBLE SORT");
              }}
            >
              BUBBLE SORT
            </button>
          </div>
          <div className="text-lg mt-[0.9rem] ml-[0.4rem] text-gray-400 max-sm:hidden">
            <button onClick={(e) => MoveLocate(e, "SELECTION SORT")}>
              SEL
            </button>
          </div>
          <div className="text-lg mt-[0.9rem] ml-[0.4rem] text-gray-400 max-sm:hidden">
            <button onClick={(e) => MoveLocate(e, "INSERTION SORT")}>
              INS
            </button>
          </div>
          <div className="text-lg mt-[0.9rem] ml-[0.4rem] text-gray-400 max-sm:hidden">
            <button onClick={(e) => MoveLocate(e, "QUICK SORT")}>QUI</button>
          </div>
          <div className="text-lg mt-[0.9rem] ml-[0.4rem] text-gray-400 max-sm:hidden">
            <button onClick={(e) => MoveLocate(e, "RADIX SORT")}>RAD</button>
          </div>
        </div>
      </div>
      <div className="w-[100vw]">{Component}</div>
      {
        foot
      }
    </div>
  );
}
