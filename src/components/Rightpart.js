import React from 'react';
import Home from './Home.js'; // Import your content components
import Contact from './Contact.js';
import Profiles from './Profiles.js';
import Projects from './Projects.js';
import Resume from './Resume.js';

function Rightpart({ selectedContent }) {
  return (
    <div className="p-4 h-full ">
      {selectedContent === 'home' && <Home />}
      {selectedContent === 'contact' && <Contact />}
      {selectedContent === 'Profiles' && <Profiles />}
      {selectedContent === 'projects' && <Projects />}
      {selectedContent === 'resume' && <Resume />}
    </div>
  );
}

export default Rightpart;
