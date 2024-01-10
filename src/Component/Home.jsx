import React from 'react';
import sortImg from '../img&other/sorting.gif'
import list from '../img&other/list.gif'
import bst from '../img&other/bst.gif'
import { Link } from "react-router-dom";

const HomePage = () => {
  const algorithms = [
    { name: 'Sorting Algorithms', imag: sortImg, description: 'Visualize various sorting algorithms', next:'/sorting-algorithms'},
    { name: 'Linked List', imag: list, description: 'Explore linked list operations and algorithms', next:'/linkedlist-algorithms'},
    { name: 'Binary Search Tree', imag: bst, description: 'Visualize operations on binary search trees', next:'/bst-algorithms'},
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col justify-center items-center w-[100%]">
      <h1 className="text-5xl font-bold text-white mt-[25px] max-sm:text-[25rem]">KValgoVisualizer</h1>
      <p className="text-2xl text-center text-white mb-6 max-sm:text-[6rem] max-sm:mt-28">visualising data structures and algorithms through animation</p>
      <p className="text-xl text-white mb-8 max-sm:text-[10rem] max-sm:mt-[35px] max-sm:mb-[35px]">Choose an algorithm to visualize:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {algorithms.map((algorithm, index) => (
          <div
            key={index}
            className="bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-md hover:shadow-lg text-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 max-sm:h-[470px] max-sm:w-[90vw] max-sm:rounded-[5rem] max-sm:mb-[15px]"
          >
            <img src={algorithm.imag} className='max-sm:w-[80vw] max-sm:mb-36 max-sm:h-[300px]' alt='sorry'/>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 max-sm:text-[15rem]">{algorithm.name}</h2>
            <p className="text-gray-600 mb-4 max-sm:text-[9.5rem] max-sm:mt-[30px]">{algorithm.description}</p>
            <Link
              to={algorithm.next}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out max-sm:text-[10rem] max-sm:py-[20px] max-sm:px-[20px] max-sm:mt-20"
            >
              Visualize
            </Link>
          </div>
        ))}
      </div>
    <div className="bg-gray-900 w-[100%] text-white py-8 max-sm:h-[100px]">
      <div className="container mx-auto flex flex-col items-center max-sm:space-y-[10px]">
        <div className=" flex space-x-4 max-sm:space-x-[20px] max-sm:mt-[20px]">
          <Link to="/about" className="hover:underline max-sm:text-[9rem]">About</Link>
          <Link to="/team" className="hover:underline max-sm:text-[9rem]">Team</Link>
          <Link to="/contact" className="hover:underline max-sm:text-[9rem]">Contact</Link>
        </div>
        <div className="mt-4 max-sm:text-[8rem]">
          &copy; {new Date().getFullYear()} KValgoVisualizer. All Rights Reserved.
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
