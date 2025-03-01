# OTP Input Component

## Overview

This is a reusable 4-digit OTP input component built using React and Tailwind CSS. It allows users to enter a one-time password, automatically moving focus between input fields and supporting backspace navigation.

## Features

- Accepts only numeric input.
- Automatically moves focus to the next field upon entry.
- Moves focus to the previous field when the backspace key is pressed.
- Calls a callback function when all digits are entered.

## Steps to Implement

### 1. Import Required Hooks

Import `useState` and `useRef` from React:

```javascript
import { useState, useRef } from 'react';
```

### 2. Define the Component

Create a functional component `OTPInput` that accepts `length` (default 4) and `onComplete` as props:

```javascript
const OTPInput = ({ length = 4, onComplete }) => {
```

### 3. Initialize State and References

- Use `useState` to store OTP values.
- Use `useRef` to manage input field references:

```javascript
const [otp, setOtp] = useState(new Array(length).fill(''));
const inputRefs = useRef([]);
```

### 4. Handle Input Changes

- Validate input to allow only numbers.
- Update the OTP state.
- Move focus to the next field if applicable:

```javascript
const handleChange = (index, value) => {
  if (!/^[0-9]?$/.test(value)) return;
  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  if (value && index < length - 1) {
    inputRefs.current[index + 1]?.focus();
  }

  if (newOtp.every((digit) => digit !== '')) {
    onComplete?.(newOtp.join(''));
  }
};
```

### 5. Handle Backspace Navigation

- Move focus to the previous field when backspace is pressed:

```javascript
const handleKeyDown = (index, e) => {
  if (e.key === 'Backspace' && !otp[index] && index > 0) {
    inputRefs.current[index - 1]?.focus();
  }
};
```

### 6. Render the Input Fields

- Map over the `otp` array to render input fields.
- Assign refs for managing focus control.

```javascript
return (
  <div className='flex gap-2'>
    {otp.map((digit, index) => (
      <input
        key={index}
        type='text'
        maxLength='1'
        value={digit}
        onChange={(e) => handleChange(index, e.target.value)}
        onKeyDown={(e) => handleKeyDown(index, e)}
        ref={(el) => (inputRefs.current[index] = el)}
        className='w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
      />
    ))}
  </div>
);
```

### 7. Export the Component

```javascript
export default OTPInput;
```

## Usage

Import and use the component:

```javascript
import OTPInput from './OTPInput';

const handleOTPComplete = (otp) => {
  console.log('Entered OTP:', otp);
};

<OTPInput length={4} onComplete={handleOTPComplete} />;
```

## Conclusion

This OTP input component improves the user experience with smooth focus management and validation. It can be extended to support more customization like different input styles, automatic submission, or API integration.
