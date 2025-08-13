import { useState, useRef, useEffect } from 'react';
import './App.css';

const OTP_DIGITS = 4;

const App = () => {
  const [digit, setDigit] = useState(new Array(OTP_DIGITS).fill(''));
  const inputRef = useRef([]);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;

    const enteredValue = value.trim();
    const newOtp = [...digit];
    newOtp[index] = enteredValue.slice(-1);
    setDigit(newOtp);

    if (value && index < digit.length - 1) {
      inputRef.current[index + 1].focus();
    }

    if (newOtp.every((item) => item !== '')) {
      console.log(newOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    if (index > 0 && e.key === 'Backspace' && !e.target.value) {
      inputRef.current[index - 1].focus();
    }
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  return (
    <div className='otp-container'>
      <h3>OTP</h3>
      {digit.map((item, index) => {
        return (
          <input
            key={index}
            value={digit[index]}
            type='text'
            className='otp-box'
            ref={(inputEle) => (inputRef.current[index] = inputEle)}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default App;
