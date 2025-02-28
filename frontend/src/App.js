// frontend/src/App.js
import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const TaskManager = lazy(() => import('./components/TaskManager'));
const StudyPlanner = lazy(() => import('./components/StudyPlanner'));
const PomodoroTimer = lazy(() => import('./components/PomodoroTimer'));
const NotesSection = lazy(() => import('./components/NotesSection'));
const Auth = lazy(() => import('./components/Auth'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <BrowserRouter>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        {/* Navigation Menu */}
        <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" fixed="top" className="mb-4 shadow-sm">
          <Container>
            <Navbar.Brand as={NavLink} to="/" end>
              StudyZodiac
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" end>Dashboard</Nav.Link>
                <Nav.Link as={NavLink} to="/tasks">Tasks</Nav.Link>
                <Nav.Link as={NavLink} to="/study">Study Planner</Nav.Link>
                <Nav.Link as={NavLink} to="/pomodoro">Pomodoro Timer</Nav.Link>
                <Nav.Link as={NavLink} to="/notes">Notes</Nav.Link>
                <Nav.Link as={NavLink} to="/auth">Auth</Nav.Link>
              </Nav>
              <Button variant={darkMode ? 'outline-light' : 'outline-dark'} onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content Container with top padding */}
        <div style={{ paddingTop: '80px' }}>
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tasks" element={<ProtectedRoute><TaskManager /></ProtectedRoute>} />
                <Route path="/study" element={<ProtectedRoute><StudyPlanner /></ProtectedRoute>} />
                <Route path="/pomodoro" element={<ProtectedRoute><PomodoroTimer /></ProtectedRoute>} />
                <Route path="/notes" element={<ProtectedRoute><NotesSection /></ProtectedRoute>} />
                <Route path="/auth" element={<Auth />} />
              </Routes>
            </Suspense>
          </Container>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
