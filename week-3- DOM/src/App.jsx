// src/TodoApp.js
import React, { useState } from 'react';
import './App.css'


function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addOrUpdateTodo = () => {
    if (inputValue.trim() === '') return;

    if (isEditing) {
      const updatedTodos = todos.map((todo, index) =>
        index === currentIndex ? inputValue : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
    } else {
      setTodos([...todos, inputValue]);
    }

    setInputValue('');
  };

  const editTodo = (index) => {
    setInputValue(todos[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <h1>Making TODO to do </h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addOrUpdateTodo}>{isEditing ? 'Update' : 'Add'}</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
