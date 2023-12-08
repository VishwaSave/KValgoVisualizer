import React from 'react';
import sortImg from '../img&other/sorting.gif'
import list from '../img&other/list.gif'
import bst from '../img&other/bst.gif'
import { Link } from "react-router-dom";

const HomePage = () => {
  const algorithms = [
    { name: 'Sorting Algorithms', imag: sortImg, description: 'Visualize various sorting algorithms.' },
    { name: 'Linked List', imag: list, description: 'Explore linked list operations and algorithms.' },
    { name: 'Binary Search Tree', imag: bst, description: 'Visualize operations on binary search trees.' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col justify-center items-center w-[100%]">
      <h1 className="text-5xl font-bold text-white mt-12">KValgoVisualizer</h1>
      <p className="text-2xl text-white mb-6">visualising data structures and algorithms through animation</p>
      <p className="text-xl text-white mb-8">Choose an algorithm to visualize:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {algorithms.map((algorithm, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg text-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img src={algorithm.imag} alt='sorry'/>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{algorithm.name}</h2>
            <p className="text-gray-600 mb-4">{algorithm.description}</p>
            <Link
              to={`/${algorithm.name.replace(/\s+/g, '-').toLowerCase()}`}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
            >
              Visualize
            </Link>
          </div>
        ))}
      </div>
    <div className="bg-gray-900 w-[100%] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className=" flex space-x-4">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/team" className="hover:underline">Team</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="mt-4">
          &copy; {new Date().getFullYear()} KValgoVisualizer. All Rights Reserved.
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
