// console.log('Hello');

const inputBox = document.getElementById('search-box');
const suggestionBox = document.getElementById('suggestion-box');

const fetchSuggestions = async (searchQuery) => {
  if (!searchQuery) {
    return [];
  }
  if (localStorage.getItem(searchQuery)) {
    return JSON.parse(localStorage.getItem(searchQuery));
  } else {
    try {
      const data = await fetch(
        'https://www.google.com/complete/search?client=firefox&q=' + searchQuery
      );
      const response = await data.json();
      localStorage.setItem(searchQuery, JSON.stringify(response[1]));
      return response[1];
    } catch (error) {
      console.log('Something went wrong', error);
      return [];
    }
  }
};

const renderList = (suggestionList) => {
  suggestionBox.innerHTML = '';
  if (!suggestionList.length) {
    suggestionBox.style.display = 'none';
    return;
  }
  suggestionBox.style.display = 'block';
  suggestionBox.style.border = '1px solid black';
  suggestionList.forEach((suggestion) => {
    const li = document.createElement('li');
    li.textContent = suggestion;
    li.addEventListener('click', () => {
      inputBox.value = suggestion;
      suggestionBox.innerHTML = '';
      suggestionBox.style.display = 'none';
    });
    suggestionBox.appendChild(li);
  });
};

const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

const handleInput = async (event) => {
  const searchQuery = event.target.value.trim();
  const suggestionList = await fetchSuggestions(searchQuery);
  renderList(suggestionList);
};

inputBox.addEventListener('focus', () => {
  if (suggestionBox.children.length > 0) {
    suggestionBox.style.display = 'block';
  }
});

inputBox.addEventListener('blur', () => {
  setTimeout(() => {
    suggestionBox.style.display = 'none';
  }, 250);
});

inputBox.addEventListener('input', debounce(handleInput, 250));
