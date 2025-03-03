import { useEffect, useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userAddedTodo, setUserAddedTodo] = useState('');
  const [editableTodoId, setEditableTodoId] = useState(null);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/todos?limit=15');
      const data = await response.json();
      console.log(data);
      if (data.todos.length) setTodos(data.todos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddingTodo = () => {
    if (!userAddedTodo.trim()) return; // Prevent adding empty todos
    const userTodo = {
      id: Math.floor(Math.random() * 1000),
      todo: userAddedTodo,
    };
    setTodos((todos) => [...todos, userTodo]);
    setUserAddedTodo('');
  };

  const handleTodoEdit = (id, event) => {
    const enteredText = event.target.value;
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, todo: enteredText } : todo;
      })
    );
  };

  return (
    <div className='m-2 p-2'>
      <h3 className='m-2 p-2 font-semibold'>Todos....</h3>
      <input
        className='m-2 p-2 border border-black w-3/4'
        placeholder='Add todo'
        type='text'
        autoComplete='off'
        value={userAddedTodo}
        onChange={(e) => setUserAddedTodo(e.target.value)}
      />
      <button className='bg-slate-200 m-2 p-2' onClick={handleAddingTodo}>
        Add Todo
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-col'>
          {todos.map((item) => {
            const { todo, id } = item;
            return (
              <input
                type='text'
                autoComplete='off'
                key={id}
                value={todo}
                className='w-4/6 p-2 m-2 outline-none border border-black'
                readOnly={editableTodoId !== id}
                onFocus={() => setEditableTodoId(id)}
                onBlur={() => setEditableTodoId(null)}
                onChange={(e) => handleTodoEdit(id, e)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
