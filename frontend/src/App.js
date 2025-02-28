// frontend/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskManager from './components/TaskManager';
import StudyPlanner from './components/StudyPlanner';
import PomodoroTimer from './components/PomodoroTimer';
import NotesSection from './components/NotesSection';
import Auth from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation Menu */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Student Productivity Dashboard</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasks">Tasks</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/study">Study Planner</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pomodoro">Pomodoro Timer</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/notes">Notes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/auth">Auth</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<ProtectedRoute><TaskManager /></ProtectedRoute>} />
          <Route path="/study" element={<ProtectedRoute><StudyPlanner /></ProtectedRoute>} />
          <Route path="/pomodoro" element={<ProtectedRoute><PomodoroTimer /></ProtectedRoute>} />
          <Route path="/notes" element={<ProtectedRoute><NotesSection /></ProtectedRoute>} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;