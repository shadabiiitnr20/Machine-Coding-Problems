const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  const handleChange = (e, type) => {
    setData((prevData) => ({
      ...prevData,
      [type]: e.target.value,
    }));
  };

  return (
    <div>
      <label>Name : </label>
      <input
        type='text'
        value={name}
        onChange={(e) => handleChange(e, 'name')}
      />
      {errors.name && <span className='error-msg'>{errors.name}</span>}
      <br />
      <br />
      <label>Age : </label>
      <input
        type='number'
        value={age}
        onChange={(e) => handleChange(e, 'age')}
      />
      {errors.age && <span className='error-msg'>{errors.age}</span>}
      <br />
      <br />
      <label>Email : </label>
      <input
        type='text'
        value={email}
        onChange={(e) => handleChange(e, 'email')}
      />
      {errors.email && <span className='error-msg'>{errors.email}</span>}
    </div>
  );
};

export default Profile;
