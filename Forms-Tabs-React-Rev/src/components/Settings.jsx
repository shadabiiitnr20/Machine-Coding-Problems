import React from 'react';

const Settings = ({ data, setData }) => {
  const { theme } = data;
  const themesToRender = ['dark', 'light'];

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name === 'dark' ? 'dark' : 'light',
    }));
  };

  //   console.log(data.theme);

  return (
    <>
      {themesToRender.map((item, index) => {
        return (
          <div key={index}>
            <label>
              <input
                type='radio'
                name={item}
                checked={theme === item}
                onChange={(e) => handleChange(e)}
              />
              {item}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Settings;
