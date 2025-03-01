import { useState, useRef } from 'react';

const LENGTH = 4;

const App = () => {
  const [otp, setOtp] = useState(new Array(LENGTH).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every((item) => item !== '')) {
      console.log(newOtp.join(''));
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className='m-2 p-2'>
      <h4 className='m-2 p-2'>OTP</h4>
      {otp.map((digit, index) => {
        return (
          <input
            key={index}
            type='text'
            autoComplete='off'
            maxLength={1}
            value={digit}
            className='border border-black w-11 m-2 p-2 rounded-md outline-none text-center'
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(index, event)}
          />
        );
      })}
    </div>
  );
};

export default App;
