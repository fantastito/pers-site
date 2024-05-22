import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Photos from './components/Photos';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App bg-white text-black mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<Resume />} exact />
          <Route path="/engineer" element={<Resume />} />
          <Route path="/photography" element={<Photos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
