import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentIndex, setCurrentIndex] = useState(1);

  const addTodo = () => {
    const todoText = inputValue.trim();

    if (todoText === '') {
      alert('Please enter a todo item.');
      return;
    }

    setTodos([...todos, { id: currentIndex, text: todoText }]);
    setCurrentIndex(currentIndex + 1);
    setInputValue('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Todo List</h1>
          <div id="todos" className="space-y-4 mb-8">
            {todos.map((todo) => (
              <div key={todo.id} id={`todo-${todo.id}`} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow">
                <h4 className="text-lg text-gray-700">{`${todo.id}. ${todo.text}`}</h4>
                <button 
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <input 
              id="inp" 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              className="flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter a new todo"
            />
            <button 
              onClick={addTodo}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;