import "../../App.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Arr from "./ArrayOperations/arr";
import { Link } from "react-router-dom";

export default function Sorting() {
  const [Component, newComponent] = useState(<Arr />);
  const [foot, newFoot] = useState();
  const [count, newCount] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      newFoot(<Footer />);
      if(count<1)
      newCount(count+1);
    },50);
  },[count])
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
            <button className="text-white">ARRAY</button>
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
