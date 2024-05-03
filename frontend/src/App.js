import './App.css';

import { TitleCard } from './components/TitleCard';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience.jsx';

import { resume } from './resume.js';

function App() {
  return (
    <div className="App bg-white text-black">
      <header className="App-header">
        <TitleCard/>
        <div className="border-b border-gray-300 my-4"></div>
        <AboutMe aboutMeData={resume.aboutme} />
        <div className="border-b border-gray-300 my-4"></div>
        <Projects projectsData={resume.projects}/>
        <div className="border-b border-gray-300 my-4"></div>
        <Experience experienceData={resume.experience} />
        <div className="border-b border-gray-300 my-4"></div>
      </header>
    </div>
  );
}

export default App;
