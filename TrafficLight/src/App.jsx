import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const colorRef = useRef({
    green: 15,
    red: 10,
    yellow: 5,
  });

  const [activeColor, setActiveColor] = useState('green');

  const [time, setTime] = useState(colorRef.current[activeColor]);

  const timeRef = useRef(null);

  const getNextColor = (color) => {
    switch (color) {
      case 'green':
        return 'yellow';
      case 'yellow':
        return 'red';
      case 'red':
        return 'green';
      default:
        return 'green';
    }
  };

  useEffect(() => {
    clearInterval(timeRef.current);

    timeRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          const nextColor = getNextColor(activeColor);
          setActiveColor(nextColor);
          return colorRef.current[nextColor];
        }
        return prev - 1;
      });
    }, 1 * 1000);
  }, [activeColor]);

  const handleManualChange = (color) => {
    clearInterval(timeRef.current);
    setActiveColor(color);
    setTime(colorRef.current[color]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = Number(e.target.elements.addTime.value);
    setTime((prev) => {
      return prev + val;
    });
    e.target.reset();
  };

  return (
    <div className='main-container'>
      <div className='lights-container'>
        {['green', 'red', 'yellow'].map((item, index) => {
          return (
            <div
              key={index}
              className='color-div'
              style={{ backgroundColor: `${item}` }}
              onClick={() => console.log(item)}
            ></div>
          );
        })}
      </div>
      <p>Current Light: {activeColor}</p>
      <p className='time-div'>{time}</p>

      <div>
        {['green', 'red', 'yellow'].map((item, index) => {
          return (
            <React.Fragment key={index}>
              <button onClick={() => handleManualChange(item)}>{item}</button>
            </React.Fragment>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input type='number' name='addTime' min={1} placeholder='Add Time..' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
