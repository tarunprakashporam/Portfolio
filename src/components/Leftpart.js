import React from 'react';

function Leftpart({ handleContentChange }) {
  return (
    <div className="p-4 h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-yellow-500 mb-4">Portfolio</h1>
      <div className="flex flex-col items-center space-y-3">
        <div
          onClick={() => handleContentChange('home')}
          className="text-green-500 hover:text-yellow-500 cursor-pointer"
        >
          Home
        </div>
        <div
          onClick={() => handleContentChange('contact')}
          className="text-green-500 hover:text-yellow-500 cursor-pointer"
        >
          Contact
        </div>
        <div
          onClick={() => handleContentChange('Profiles')}
          className="text-green-500 hover:text-yellow-500 cursor-pointer"
        >
          Profiles
        </div>
        <div
          onClick={() => handleContentChange('projects')}
          className="text-green-500 hover:text-yellow-500 cursor-pointer"
        >
          Projects
        </div>
        <div
          onClick={() => handleContentChange('resume')}
          className="text-green-500 hover:text-yellow-500 cursor-pointer"
        >
          Resume
        </div>
      </div>
    </div>
  );
}

export default Leftpart;
