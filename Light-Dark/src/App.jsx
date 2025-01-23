import { useEffect, useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className='my-8 flex flex-col items-center gap-8'>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <button className='btn m-2'>Button</button>
      <input
        onClick={handleClick}
        type='checkbox'
        className='toggle theme-controller'
      />
    </div>
  );
}
