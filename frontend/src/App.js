import logo from './logo.svg';
import './App.css';

import { TitleCard } from './components/TitleCard';
import { AboutMe } from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleCard/>
        <AboutMe/>
        <p>
          Simon's personal website.
        </p>
      </header>
    </div>
  );
}

export default App;
