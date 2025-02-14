import { useState, useMemo } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const expensiveFunction = (num) => {
    console.log('expensiveFunction');
    return num * 100;
  };

  const computedValue = useMemo(() => expensiveFunction(count), [count]);

  return (
    <div>
      UseMemo Demo
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <p>{darkMode ? 'darkMode' : 'lightMode'}</p>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  );
};

export default App;
