import { useState, useEffect } from 'react';
import './App.css';

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [progress]);

  return (
    <div className='outer-div'>
      <div
        className='inner-div'
        style={{ transform: `translateX(${-(100 - animatedProgress)}%)` }}
        role='progressbar'
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};

const App = () => {
  const nums = [0, 5, 20, 35, 70, 100];

  return (
    <div className='main-container'>
      <h3>Progress Bar</h3>
      {nums.map((item, index) => {
        return <ProgressBar key={index} progress={item} />;
      })}
    </div>
  );
};

export default App;
