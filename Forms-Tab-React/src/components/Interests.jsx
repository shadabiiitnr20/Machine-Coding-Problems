import React from 'react';

const Interests = ({ data, setData }) => {
  const { interests } = data;
  const interestsToRender = ['cooking', 'coding', 'javascript', 'games'];

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      interests: e.target.checked
        ? [...interests, e.target.name]
        : interests.filter((item) => item !== e.target.name),
    }));
  };

  //   console.log(interests);

  return interestsToRender.map((item, index) => {
    return (
      <div key={index}>
        <label>
          <input
            name={item}
            type='checkbox'
            onChange={(e) => handleChange(e)}
            checked={interests.includes(item)}
          />
          {item}
        </label>
      </div>
    );
  });
};

export default Interests;
