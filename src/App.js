import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import SketchbookPage from './components/SketchbookPage/SketchbookPage';
import CVPage from './components/CVPage/CVPage';
import './App.css'; // You can have global styles here if needed

function App() {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/*<Route path="/projects" element={<ProjectsPage />} />*/}
            <Route path="/sketchbook" element={<SketchbookPage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;