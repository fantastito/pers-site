import logo from './logo.svg';
import './App.css';

import { TitleCard } from './components/TitleCard';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleCard/>
        <AboutMe/>
        <Projects/>
        <p>
          Simon's personal website.
        </p>
      </header>
    </div>
  );
}

export default App;
