import { useState } from 'react';

const Demo1 = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  function factorial(n) {
    console.log('rendering..');
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const num_fact = factorial(num);

  return (
    <div
      className={`m-2 p-2 w-2/5 border border-black ${
        dark ? 'bg-slate-500' : 'bg-yellow-200'
      }`}
    >
      <h4 className='underline font-semibold'>useMemo</h4>
      <button
        onClick={() => setDark((dark) => !dark)}
        className='m-2 p-2 bg-red-400'
      >
        Toggle Theme
      </button>
      <br />
      <input
        className='w-36 border border-black outline-none p-2 m-2'
        type='number'
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <p className='m-2 p-2'>Factorial of: {num_fact}</p>
    </div>
  );
};

export default Demo1;
