import React, { useState } from 'react';
import Resume from './Resume.js';

function Home() {
  const [showResume, setShowResume] = useState(false);

  const handleShowResume = () => {
    setShowResume(true);
  };

  return (
    <div className="p-4 h-full flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col items-center mb-4">
        <div className="flex justify-center items-center">
          <img
            src="images/profile.jpg"
            className="rounded-full w-40 h-40"
            alt="Tarun Prakash"
          />
        </div>
        <div>
          <div className="text-[#58C277] hover:text-yellow-300 text-6xl font-bold">
            I'm Tarun Prakash
          </div>
          <p className="text-white text-2xl text-center">
            Student at Andhra University
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <a
            href="https://www.linkedin.com/in/tarun-prakash-poram/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full w-8 h-8 bg-[#58C277] hover:bg-yellow-500 transition duration-300 flex items-center justify-center"
          >
            <img
              src="twitter.png"
              alt="Twitter"
              className="w-4 h-4"
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full w-8 h-8 bg-[#58C277] hover:bg-yellow-500 transition duration-300 flex items-center justify-center"
          >
            <img
              src="linkedinicon.png"
              alt="LinkedIn"
              className="w-4 h-4"
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full w-8 h-8 bg-[#58C277] hover:bg-yellow-500 flex items-center justify-center"
          >
            <img
              src="github.png"
              alt="Github"
              className="w-4 h-4"
            />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1uh7cQQWW_if3sH7fd4ZVMe1lA0RViagn/view?usp=sharing" // Replace with your Google Drive link
          target="_blank"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          View Resume
        </a>
      </div>

      {showResume && <Resume />}
    </div>
  );
}

export default Home;
