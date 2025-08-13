import { useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

const App = () => {
  const [list] = useState([...Array(100)].map((_, i) => i + 1));

  return (
    <div className='p-2 m-2'>
      <Virtuoso
        className='m-2'
        style={{ height: '400px' }}
        data={list}
        itemContent={(index) => (
          <div className='border border-black mx-6 my-4 p-1'>{list[index]}</div>
        )}
      />
    </div>
  );
};

export default App;
