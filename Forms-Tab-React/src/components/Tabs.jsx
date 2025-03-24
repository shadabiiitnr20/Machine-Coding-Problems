import { useState } from 'react';
import Profile from './Profile';
import Interests from './Interests';
import Settings from './Settings';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: 'Shadab',
    age: 27,
    email: 'shadab@gmail.com',
    interests: ['coding', 'cooking'],
    theme: 'dark',
  });

  const tabs = [
    {
      name: 'Profile',
      component: Profile,
      validate: () => {
        let error = {};
        if (data.name.length == 0) {
          error.name = 'Name is incorrect';
        }
        if (data.age <= 10) {
          error.age = 'Age should be more than 10';
        }
        if (data.email.length == 0) {
          error.email = 'email is incorrect';
        }
        setErrors(error);
        return error.name || error.age || error.email ? false : true;
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

  const ActiveComponent = tabs[activeTab].component;

  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((activeTab) => activeTab + 1);
    }
  };

  const handlePrev = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((activeTab) => activeTab - 1);
    }
  };

  const handleSubmit = () => {
    if (tabs[activeTab].validate()) {
      console.log(data);
    }
  };

  return (
    <div className='tabs-container'>
      <div className='tabs-heading-container'>
        {tabs.map((tab, index) => {
          return (
            <div
              className='tabs-heading-name'
              key={index}
              onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className='tabs-body-container'>
        <ActiveComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}
        {activeTab < tabs.length - 1 && (
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
