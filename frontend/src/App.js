import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import './App.css';

import { TitleCard } from './components/TitleCard';
import { GenerateAboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';

import { resume } from './resume.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleCard/>
        <GenerateAboutMe aboutMeData={resume.aboutme} />
        <Projects/>
        <p>
          Simon's personal website.
        </p>
      </header>
    </div>
  );
}

export default App;
