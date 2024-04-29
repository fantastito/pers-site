import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import './App.css';

import { TitleCard } from './components/TitleCard';
import { generateAboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';

import { resume } from './resume.js';

function App() {
  useEffect(() => {
    // Call the generateAboutMe function with resume.aboutme data
    const aboutMeElement = generateAboutMe(resume.aboutme);

    // Create a temporary container element
    const tempContainer = document.createElement('div');

    // Render the JSX elements into the temporary container
    ReactDOM.render(aboutMeElement, tempContainer);

    // Get the about-me container
    const aboutMeContainer = document.getElementById('about-me');

    // Append the temporary container to the about-me container
    aboutMeContainer.appendChild(tempContainer);
  }, []);


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
