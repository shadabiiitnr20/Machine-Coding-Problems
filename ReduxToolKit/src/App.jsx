import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/countSlice';

export default function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h3 className='m-2 p-2 text-3xl'>{count}</h3>
      <button
        onClick={handleIncrement}
        className='m-1 p-1 bg-slate-300 rounded-md'
      >
        Increment
      </button>
    </div>
  );
}
