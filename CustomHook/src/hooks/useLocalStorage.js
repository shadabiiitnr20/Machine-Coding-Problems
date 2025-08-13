import { useEffect, useState } from 'react';

export const useLocalStorage = (API, key) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    if (localStorage.getItem(key)) {
      let data = JSON.parse(localStorage.getItem(key));
      setData(data);
    } else {
      const res = await fetch(API);
      const data = await res.json();
      if (data.todos.length) {
        setData(data.todos);
        localStorage.setItem(key, JSON.stringify(data.todos));
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [API, key]);

  return data;
};
