import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm } from './todoForm/TodoForm';
import { TodoList } from './todoList/TodoList';

function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
