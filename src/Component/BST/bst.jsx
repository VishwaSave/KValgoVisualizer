import React from "react";
import { Link } from "react-router-dom";
const BST = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="w-[100%] absolute h-[3.2rem] bg-gray-900 text-white max-sm:h-[20rem]">
        <ul
          className="flex w-[95rem] pl-[1rem] align-center"
          id="navbarContainer"
        >
          <li className="text-[2.2rem] max-h-name">
            <Link to="/" className="ml-[0.4rem] max-sm:text-[10rem]">
              <button>KValgoVisualizer</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <div className="text-[3rem]">
          <b>Coming Soon</b>
        </div>
      </div>
    </div>
  );
};

export default BST;
