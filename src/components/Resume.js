import React from 'react';

function Resume() {
  return (
    <div className="p-4 h-full">
      <div className="fullwidth">
        {/* Header */}
        <h1 className="text-[#58C277] text-3xl font-bold mb-4">TARUN PRAKASH PORAM</h1>
        <h2 className='text-[#58C277] text-2xl  font-bold'>
            EDUCATION :
        </h2>
        <p className='text-white'>ANDHRA UNIVERSITY COLLEGE OF ENGINEERING</p>

        <p> 
          <span className='text-white'>B.Tech in Electronics and Communication Engineering</span>
          
        </p>
      </div>
      
      {/* Achievements Section */}
      <div className="cvsection">
        <h2 className="text-[#58C277] text-xl font-bold mb-2">ACHIEVEMENTS :</h2>
        <ul className=" text-white list-disc pl-6">
          <li>Achieved a rank of under 1800 at Codechef, a top-rated site for competitive programmers, and rated 2*.</li>
          <li>Secured an all India rank of 1577 in Codechef’s Long Challenge for the month of December, surpassing over 8.5k+ participants.</li>
          <li>Selected for second level of Ideathon and pitched startup idea named Expert Storm.</li>
          <li>Earned the March and April LeetCode Daily Challenge Badge for demonstrating dedication and proficiency in coding through daily coding challenges.</li>
        </ul>
      </div>
      
      {/* Hackathons and Ideathons Section */}
      <div className="cvsection">
        <h2 className="text-[#58C277] text-xl font-bold mb-2">HACKATHONS AND IDEATHONS :</h2>
        <div className="cvproject">
          <p className='text-white'> IDEATHON :'Expert Storm' - An online platform bridging experts and students for an enriched learning experience through idea exchange and collaboration.</p>
          <p className='text-white'>TRACK AND TRACE  : Introducing our user-friendly interface for booking storage at
warehouses! With our geolocation feature, drivers can now
easily find and reserve storage without wasting time or effort</p>
        </div>
        {/* Add other hackathons and ideathons */}
      </div>

      <div className="cvsection">
        <h2 className="text-[#58C277] text-xl font-bold mb-2">TECHANICAL SKILLS :</h2>
        <ul className="list-disc text-white pl-6">
          <li><span className="font-bold">Programming languages:</span> C++</li>
          <li><span className="font-bold">Web Technologies:</span> HTML, CSS, Tailwind, JavaScript, MongoDB, Express.js</li>
          <li><span className="font-bold">Android Technologies:</span> Flutter</li>
        </ul>
      </div>

      {/* Add more sections as needed */}
    </div>
  );
}

export default Resume;
