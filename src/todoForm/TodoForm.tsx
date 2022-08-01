import dayjs from 'dayjs';
import React, { useState } from 'react';
import { createEmptyTodo, Todo } from '../_data/todo/Todo';
import { registerTodo } from '../_data/todo/todoApi';

export const TodoForm = () => {
  const [todo, setTodo] = useState<Todo>(createEmptyTodo());
  const [todoText, setTodoText] = useState<string>('');
  const [todoStartDate, setTodoStartDate] = useState<string>('');
  const [todoEndDate, setTodoEndDate] = useState<string>('');
  const [todoSecret, setTodoSecret] = useState<boolean>(false);

  const changeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const changeTodoStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoStartDate(e.target.value);
  };

  const changeTodoEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoEndDate(e.target.value);
  };

  const changeTodoSecret = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoSecret(e.target.checked);
  };

  const onCancel = () => {
    setTodoText('');
    setTodoStartDate('');
    setTodoEndDate('');
    setTodoSecret(false);
  };

  const onRegister = () => {
    registerTodo({
      id: Math.random().toString(36).substr(2, 9),
      text: todoText,
      startDate: dayjs(todoStartDate).valueOf(),
      endDate: dayjs(todoEndDate).valueOf(),
      isSecret: todoSecret,
      registeredDate: dayjs().valueOf(),
      checkedTime: 0,
    });

    setTodoText('');
    setTodoStartDate('');
    setTodoEndDate('');
    setTodoSecret(false);
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
          placeholder="YYYY-MM-DD"
          value={todoStartDate}
        />
      </div>
      <div>
        <label htmlFor="todoEndDate">EndDate</label>
        <input
          id="todoEndDate"
          onChange={changeTodoEndDate}
          placeholder="YYYY-MM-DD"
          value={todoEndDate}
        />
      </div>
      <div>
        <label htmlFor="todoSecret">Secret</label>
        <input
          id="todoSecret"
          type="checkBox"
          onChange={changeTodoSecret}
          checked={todoSecret}
        />
      </div>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onRegister}>Register</button>
    </div>
  );
};
