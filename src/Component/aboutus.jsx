import React from 'react';

const AboutUsCard = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 hidden" id="aboutuspage">
      <div className="bg-white rounded-lg p-3 max-w-[80vw]">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-xl font-semibold">ABOUT US</h2>
          <button onClick={(e)=>{
            e.preventDefault();
            document.getElementById('aboutuspage').classList.add('hidden');
          }} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <p className="text-gray-700 mb-2">
            Welcome to <span className="font-bold">KValgoVisualizer</span>, where algorithms come to life through interactive visualizations. Established in 2024, our platform is built with React.js and Tailwind CSS, aimed at making algorithm learning accessible and enjoyable.
          </p>
          <div className="mb-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Our Mission</h2>
            <p className="text-gray-700">
              We're on a mission to simplify algorithm understanding for everyone. Through immersive visualizations, we empower users to explore and appreciate the intricacies of algorithms.
            </p>
          </div>
          <div className="mb-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Our Vision</h2>
            <p className="text-gray-700">
              We envision a future where learning algorithms is engaging and accessible to all. Join us as we foster a community of algorithm enthusiasts eager to delve into the world of computational thinking.
            </p>
          </div>
          <div className="mb-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">What We Offer</h2>
            <p className="text-gray-700">
              Currently, KValgoVisualizer features three modules:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Sorting Algorithms</li>
              <li>Linked List Algorithms</li>
              <li>Array Algorithms</li>
            </ul>
          </div>
          <div className="mb-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Why Choose KValgoVisualizer?</h2>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Interactive Learning</li>
              <li>Comprehensive Coverage</li>
              <li>User-Friendly Interface</li>
            </ul>
          </div>
          <div className="mb-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Join Us</h2>
            <p className="text-gray-700">
              Join us on our journey as we expand our visualization modules and innovate algorithmic learning for users worldwide.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Get Started Today</h2>
            <p className="text-gray-700">
              Start your algorithmic learning journey with KValgoVisualizer. Explore, experiment, and unlock the secrets of computational thinking. Happy exploring!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
