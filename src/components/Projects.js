import React from 'react';

function Project() {
  return (
    <div className="p-4 h-full">
      <h1 className="text-[#58C277]">Project</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Card
          imageSrc="geoware.png"
          title="Project 1"
          description="Description for Project 1"
        />
        <Card
          imageSrc="chess.png"
          title="Project 2"
          description="Description for Project 2"
        />
        <Card
          imageSrc="leetcode123.png"
          title="Project 3"
          description="Description for Project 3"
        />
      </div>
    </div>
  );
}

function Card({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col bg-white p-4 relative w-80 h-96 rounded-lg border-yellow-500 border-4">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-16 mx-auto mb-2 object-contain"
      />
      <div className="bg-black text-center">
        <h3 className="font-semibold text-black">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default Project;
