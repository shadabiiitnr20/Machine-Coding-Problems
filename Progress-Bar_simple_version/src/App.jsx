import { useRef } from 'react';
import './App.css';

const ProgressBar = () => {
  const innerDivRef = useRef(null);
  const progressRef = useRef(0);
  const intervalRef = useRef(null);

  const updateProgress = () => {
    if (innerDivRef.current) {
      innerDivRef.current.style.width = `${progressRef.current}%`;
    }
  };

  const handleStart = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (progressRef.current > 100) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        return;
      }
      progressRef.current++;
      updateProgress();
    }, 1 * 1000);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    progressRef.current = 0;
    updateProgress();
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    progressRef.current = 0;
    updateProgress();
  };

  return (
    <>
      <div className='outer-progress-bar'>
        <div className='inner-progress-bar' ref={innerDivRef}></div>
      </div>
      <div className='btns'>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div>
      <ProgressBar />
    </div>
  );
};

export default App;
