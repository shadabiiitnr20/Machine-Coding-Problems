import { useState } from 'react';
import CheckBoxes from './components/CheckBoxes';
import { checkboxData } from './data';
import './App.css';

const App = () => {
  const [checkedData, setCheckedData] = useState({});

  return (
    <div>
      <CheckBoxes
        data={checkboxData}
        checkedData={checkedData}
        setCheckedData={setCheckedData}
      />
    </div>
  );
};

export default App;
