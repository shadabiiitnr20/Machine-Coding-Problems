import { useCount } from './store/store';

export default function App() {
  const { count, increment } = useCount();

  return (
    <div className='m-3 p-1'>
      <p className='p-1'>{count}</p>
      <button className='bg-slate-400 p-2 rounded-md' onClick={increment}>
        Increment
      </button>
    </div>
  );
}
