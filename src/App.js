import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsLandingPage/ProjectsPage';
import SketchbookPage from './pages/SketchbookPage/SketchbookPage';
import CVPage from './pages/CVPage/CVPage';
import './App.css'; // You can have global styles here if needed

import Project1Component from './data/project1';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/project1" element={<Project1Component />} />
            <Route path="/sketchbook" element={<SketchbookPage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;