// frontend/src/components/PomodoroTimer.js
import React, { useState, useEffect } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      alert('Time is up!');
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="container mt-4 text-center">
      <h2 className="mb-3">Pomodoro Timer</h2>
      <h3>{formatTime(timeLeft)}</h3>
      <ProgressBar
        now={(timeLeft / (25 * 60)) * 100}
        label={`${Math.floor((timeLeft / (25 * 60)) * 100)}%`}
        className="mb-3"
      />
      <div>
        <Button variant="success" onClick={startTimer} disabled={isActive}>
          Start
        </Button>{' '}
        <Button variant="warning" onClick={pauseTimer} disabled={!isActive}>
          Pause
        </Button>{' '}
        <Button variant="danger" onClick={resetTimer}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default PomodoroTimer;