import './App.css';

import { TitleCard } from './components/TitleCard';
import { GenerateAboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience.jsx';

import { resume } from './resume.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleCard/>
        <GenerateAboutMe aboutMeData={resume.aboutme} />
        <Projects/>
        <Experience experienceData={resume.experience} />
      </header>
    </div>
  );
}

export default App;
