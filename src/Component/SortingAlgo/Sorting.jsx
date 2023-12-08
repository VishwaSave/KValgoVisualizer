import React, { useState, useEffect, useCallback } from "react";
import Footer from "../Footer";
import { msg } from "../Footer";
import Bubble from "./bubbleSort/bubble";
import Selection from "./selSort/selection";
import Insertion from "./insertionSort/Insertion";
import Merge from "./mergeSort/Merge";
import Quick from "./quickSort/quick";
import Radix from "./radixSort/radix";
import { Link } from "react-router-dom";

export default function Sorting(props) {
  const [Component, newComponent] = useState(<Bubble />);
  function MoveLocate(e, nam) {
    e.currentTarget.innerText = nam;
    let a = [...document.getElementById("navbarContainer").children];
    a.map((val, ind) => {
      if (ind !== 0) {
        if (a[ind].children[0] !== e.currentTarget)
          a[ind].children[0].innerText = a[ind].children[0].innerText.slice(
            0,
            3
          );
        a[ind].children[0].classList.remove("text-white");
      }
    });
    switch (e.currentTarget.innerText) {
      case "SELECTION SORT":
        newComponent(<Selection />);
        break;

      case "INSERTION SORT":
        newComponent(<Insertion />);
        break;

      case "MERGE SORT":
        newComponent(<Merge />);
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
  }
  const handleKeyDown = useCallback((e) => {
    if(e.key=="ArrowLeft"){
        document.getElementById('speedController').value-=1
        if (document.getElementById('speedController').value !== "0") {
          msg.rate = parseInt(document.getElementById('speedController').value);
          document.getElementById("rangeValue").innerText =
          document.getElementById('speedController').value + "X";
        } else {
          msg.rate = 0.5;
          document.getElementById("rangeValue").innerText = "0.5X";
        }
      }
      if(e.key=="ArrowRight"){
        let n=6-document.getElementById('speedController').value
        n=6-n
        n+=1
        document.getElementById('speedController').value=n
        if (document.getElementById('speedController').value !== "0") {
          msg.rate = parseInt(document.getElementById('speedController').value);
          document.getElementById("rangeValue").innerText =
          document.getElementById('speedController').value + "X";
        } else {
          msg.rate = 0.5;
          document.getElementById("rangeValue").innerText = "0.5X";
        }
      }
    },[]);

    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [handleKeyDown]);

  return (
    <>
    <Footer />
      <div className="w-[100vw]">{Component}</div>
      <div className="w-[100vw] h-[52px] fixed bg-gray-900 text-white absolute top-[0]">
        <ul className="flex w-[100vw] px-4 align-center" id="navbarContainer">
          <li className="text-[2.2rem]">
            <Link to="/" className="ml-4">
              <button>KValgoVisualizer</button>
            </Link>
          </li>
          <li className="text-lg my-4 ml-4 text-gray-400">
            <button
              className="text-white"
              onClick={(e) => {
                MoveLocate(e, "BUBBLE SORT");
              }}
            >
              BUBBLE SORT
            </button>
          </li>
          <li className="text-lg my-4 ml-2 text-gray-400">
            <button onClick={(e) => MoveLocate(e, "SELECTION SORT")}>
              SEL
            </button>
          </li>
          <li className="text-lg my-4 ml-2 text-gray-400">
            <button onClick={(e) => MoveLocate(e, "INSERTION SORT")}>
              INS
            </button>
          </li>
          <li className="text-lg my-4 ml-2 text-gray-400">
            <button onClick={(e) => MoveLocate(e, "MERGE SORT")}>MER</button>
          </li>
          <li className="text-lg my-4 ml-2 text-gray-400">
            <button onClick={(e) => MoveLocate(e, "QUICK SORT")}>QUI</button>
          </li>
          <li className="text-lg my-4 ml-2 text-gray-400">
            <button onClick={(e) => MoveLocate(e, "RADIX SORT")}>RAD</button>
          </li>
        </ul>
      </div>
    </>
  );
}
