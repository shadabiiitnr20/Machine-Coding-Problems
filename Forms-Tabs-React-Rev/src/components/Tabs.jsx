import React from 'react';
import Profile from './Profile';
import Interests from './Interests';
import Settings from './Settings';
import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: 'Shadab',
    age: 27,
    email: 'shadab@test.com',
    interests: ['cooking', 'coding'],
    theme: 'dark',
  });
  const [errors, setErrors] = useState({});

  const tabs = [
    {
      name: 'Profile',
      component: Profile,
      validate: () => {
        let err = {};
        if (!data.name) {
          err.name = 'Name cannot be empty';
        }
        if (data.age < 10) {
          err.age = 'Age cannot be less than 10';
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: 'Interests',
      component: Interests,
      validate: () => {
        return true;
      },
    },
    {
      name: 'Settings',
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const handleSubmit = () => {
    console.log(data);
  };

  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const ActiveTab = tabs[activeTab].component;

  return (
    <div>
      <div className='tabs-title-container'>
        {tabs.map((tab, index) => {
          return (
            <div
              className='tab-name'
              key={index}
              onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className='tab-content-container'>
        <ActiveTab data={data} setData={setData} errors={errors} />
      </div>
      <div className='btns-container'>
        {activeTab > 0 && activeTab <= tabs.length - 1 && (
          <button onClick={handlePrev}>Prev</button>
        )}
        {activeTab !== tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Tabs;
