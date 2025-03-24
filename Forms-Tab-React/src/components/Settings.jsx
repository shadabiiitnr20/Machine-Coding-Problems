import React from 'react';

const Settings = ({ data, setData }) => {
  const themesToRender = ['light', 'dark'];

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      theme: e.target.name,
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
                checked={data.theme === item}
                onChange={(e) => handleChange(e, item)}
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
