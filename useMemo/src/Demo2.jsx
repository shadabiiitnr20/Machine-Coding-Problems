import { useState, useRef } from 'react';

const Demo2 = () => {
  const [y, setY] = useState(0);
  const ref = useRef(0);

  let x = 0;
  const IncrementX = () => {
    x = x + 1;
    console.log('x =', x);
  };

  const incrementState = () => {
    setY((y) => y + 1);
  };

  const incrementRef = () => {
    ref.current = ref.current + 1;
    console.log('ref ', ref.current);
  };

  return (
    <div className='m-2 p-2 w-2/5 border border-black'>
      <h4 className='underline font-semibold'>useRef</h4>
      <div>
        <button className='bg-slate-300 m-2 p-2' onClick={IncrementX}>
          Increment X
        </button>
        <span className='p-2'>{x}</span>
      </div>

      <div>
        <button className='bg-slate-300 m-2 p-2' onClick={incrementState}>
          Increment State
        </button>
        <span className='p-2'>{y}</span>
      </div>

      <div>
        <button className='bg-slate-300 m-2 p-2' onClick={incrementRef}>
          Increment Ref
        </button>
        <span className='p-2'>{ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
