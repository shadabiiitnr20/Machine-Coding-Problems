const toggleTab = (tabNumber) => {
  document.querySelectorAll('.tab').forEach((tab, i) => {
    tab.classList.toggle('activeTab', i === tabNumber);
  });
};

const submitForm = () => {
  //   console.log('hello');
  const formData = new FormData(document.querySelector('.form-container'));
  console.log(formData);
  let values = {};

  formData.forEach((value, key) => {
    values[key] = value;
  });

  console.log(values);
};
