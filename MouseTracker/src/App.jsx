import { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const circleRef = useRef(null);

  const handleMouseMove = (event) => {
    if (circleRef.current) {
      circleRef.current.style.transform = `translate(${event.clientX - 20}px, ${
        event.clientY - 20
      }px)`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={circleRef} className='mouse-circle'></div>;
};

export default App;
