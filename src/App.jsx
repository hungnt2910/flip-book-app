import React from 'react';
import Book from './components/Book';
import { FlowMapSection } from './Section/map-section';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-start">
  
      <div className="w-full h-screen flex justify-center items-center bg-[#afbcbcec]">
        <Book />
      </div>

      
      <div className="w-full h-screen flex justify-center items-center bg-[#394d4deb]">
        <FlowMapSection />
      </div>
    </div>
  );
}

export default App;
