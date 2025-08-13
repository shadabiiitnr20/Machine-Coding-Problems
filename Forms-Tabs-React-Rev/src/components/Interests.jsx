import React from 'react';

const Interests = ({ data, setData }) => {
  const { interests } = data;

  const interestsToRender = ['cooking', 'coding', 'javascript', 'games'];

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...interests, e.target.name]
        : interests.filter((item) => item !== e.target.name),
    }));
  };

  return (
    <>
      {interestsToRender.map((item, index) => {
        return (
          <div key={index}>
            <label>
              <input
                type='checkbox'
                name={item}
                checked={interests.includes(item)}
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

export default Interests;
