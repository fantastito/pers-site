import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TitleCard } from './components/TitleCard';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx'
import Photos from './components/Photos.jsx';

import { resume } from './resume.js';

function App() {
  return (
    <Router>
      <div className="App bg-white text-black mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="App-header">
          <Navbar/>
          <TitleCard/>
          <AboutMe aboutMeData={resume.aboutme} />
          <Projects projectsData={resume.projects}/>
          <Experience experienceData={resume.experience} />
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
