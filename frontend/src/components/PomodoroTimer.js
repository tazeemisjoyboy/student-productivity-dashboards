// frontend/src/components/PomodoroTimer.js
import React, { useState, useEffect, useRef } from 'react';
import { Button, ProgressBar, Modal } from 'react-bootstrap';

const PomodoroTimer = () => {
  const initialTime = 25 * 60; // 25 minutes
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      setShowModal(true);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, timeLeft]);

  const startTimer = () => {
    if (timeLeft > 0) {
      setIsActive(true);
    }
  };

  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setTimeLeft(initialTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetTimer();
  };

  return (
    <div className="container mt-4 text-center">
      <h2 className="mb-3">Pomodoro Timer</h2>
      <h3>{formatTime(timeLeft)}</h3>
      <ProgressBar
        now={(timeLeft / initialTime) * 100}
        label={`${Math.floor((timeLeft / initialTime) * 100)}%`}
        className="mb-3"
        animated={isActive}
        variant={
          timeLeft > initialTime * 0.5
            ? "success"
            : timeLeft > initialTime * 0.2
            ? "warning"
            : "danger"
        }
      />
      <div className="mb-3">
        <Button variant="success" onClick={startTimer} disabled={isActive || timeLeft === 0}>
          Start
        </Button>{' '}
        <Button variant="warning" onClick={pauseTimer} disabled={!isActive}>
          Pause
        </Button>{' '}
        <Button variant="danger" onClick={resetTimer}>
          Reset
        </Button>
      </div>

      {/* Modal for notifying when time is up */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Time's Up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your Pomodoro session has ended. Take a short break and then get back to work!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PomodoroTimer;