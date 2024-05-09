import './App.css';

import { TitleCard } from './components/TitleCard';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience.jsx';

import { resume } from './resume.js';

function App() {
  return (
    <div className="App bg-white text-black mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <header className="App-header">
        <TitleCard/>
        <AboutMe aboutMeData={resume.aboutme} />
        <div className="border-b border-gray-300 my-4"></div>
        <Projects projectsData={resume.projects}/>
        <div className="border-b border-gray-300 my-4"></div>
        <Experience experienceData={resume.experience} />
      </header>
    </div>
  );
}

export default App;
