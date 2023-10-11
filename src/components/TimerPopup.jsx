import React, { useState, useEffect } from 'react';
import './TimerPopup.css';

const TimerPopup = ({ onClose }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerMessage, setTimerMessage] = useState('');

  useEffect(() => {
    let interval;

    if (isRunning && (hours > 0 || minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              setIsRunning(false);
              setTimerMessage('Timer is up!');
              clearInterval(interval);
              return;
            } else {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else if (isRunning && hours === 0 && minutes === 0 && seconds === 0) {
      setIsRunning(false);
      setTimerMessage('Timer is up!');
    }

    return () => clearInterval(interval);
  }, [isRunning, hours, minutes, seconds]);

  const handleStart = () => {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      setIsRunning(true);
      setTimerMessage('');
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimerMessage('');
  };

  return (
    <div className="timer-popup">
      <div className="timer-content">
        <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
        {isRunning ? (
          <div className="timer-display">
            {String(hours).padStart(2, '0')}:
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </div>
        ) : (
          <div className="timer-input">
            <div className="timer-input-fields">
              <input
                type="number"
                placeholder="Hours"
                value={hours}
                onChange={(e) => setHours(Math.max(0, parseInt(e.target.value)))}
              />
              <span>:</span>
              <input
                type="number"
                placeholder="Minutes"
                value={minutes}
                onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value)))}
              />
              <span>:</span>
              <input
                type="number"
                placeholder="Seconds"
                value={seconds}
                onChange={(e) => setSeconds(Math.max(0, parseInt(e.target.value)))}
              />
            </div>
            <button onClick={handleStart} className="start-button">
              Start
            </button>
          </div>
        )}
        {timerMessage && <div className="timer-message">{timerMessage}</div>}
        {isRunning && (
          <button onClick={handleReset} className="reset-button">
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default TimerPopup;