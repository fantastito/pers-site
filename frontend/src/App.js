import './App.css';

import { TitleCard } from './components/TitleCard';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience.jsx';
import Footer from './components/Footer.jsx';

import { resume } from './resume.js';

function App() {
  return (
    <div className="App bg-white text-black mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <header className="App-header">
        <TitleCard/>
        <AboutMe aboutMeData={resume.aboutme} />
        <Projects projectsData={resume.projects}/>
        <Experience experienceData={resume.experience} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
