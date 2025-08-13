import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const data = useLocalStorage('https://dummyjson.com/todos', 'todos');

  return (
    <div>
      <h3>Data</h3>
      {data.map((item) => {
        return <li key={item.id}>{item.todo}</li>;
      })}
    </div>
  );
};

export default App;
