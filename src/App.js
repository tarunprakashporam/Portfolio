import React,{useState}from 'react';
import Leftpart from './components/Leftpart';
import Rightpart from './components/Rightpart';

function App() {
  const [selectedContent, setSelectedContent] = useState('home');

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };
  return (
    <div className="App h-screen  flex">
      <div className="w-3/12 bg-[#2A2E35]">
      <Leftpart handleContentChange={handleContentChange} />
        
      </div>
      <div className="w-9/12 bg-[#12181B]">
        <Rightpart selectedContent={selectedContent} />
   </div>
    </div>
  );
}

export default App;
  