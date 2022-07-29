import React, { useState } from 'react';
import { createEmptyTodo, Todo } from '../_data/todo/Todo';

export const TodoForm = () => {
  const [todo, setTodo] = useState<Todo>(createEmptyTodo());
  const [todoText, setTodoText] = useState<string>('');
  const [todoStartDate, setTodoStartDate] = useState<string>('');

  const changeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const changeTodoStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoStartDate(e.target.value);
  };
  return (
    <div>
      <div>
        <label htmlFor="todoText">Todo</label>
        <input id="todoText" onChange={changeTodoText} value={todoText} />
      </div>
      <div>
        <label htmlFor="todoStartDate">StartDate</label>
        <input
          id="todoStartDate"
          onChange={changeTodoStartDate}
          value={todoStartDate}
        />
      </div>
      <div>
        <label htmlFor="todoEndDate">EndDate</label>
        <input id="todoEndDate" />
      </div>
      <div>
        <label htmlFor="todoSecret">Secret</label>
        <input id="todoSecret" type="checkBox" />
      </div>
      <button>Cancel</button>
      <button>Register</button>
    </div>
  );
};
