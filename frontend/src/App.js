import React, { useEffect } from 'react';
import './App.css';

import { TitleCard } from './components/TitleCard';
import { AboutMe, renderAboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';

function App() {
  useEffect(() => {
    // Call the renderAboutMe function when the component mounts
    renderAboutMe();
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts


  return (
    <div className="App">
      <header className="App-header">
        <TitleCard/>
        <div id="about-me"></div>
        <Projects/>
        <p>
          Simon's personal website.
        </p>
      </header>
    </div>
  );
}

export default App;
