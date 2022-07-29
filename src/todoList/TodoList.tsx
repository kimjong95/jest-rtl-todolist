import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Todo } from '../_data/todo/Todo';
import { findTodoList } from '../_data/todo/todoApi';

export const TodoList = (): ReactElement => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    findTodoList().then(res => {
      setTodoList(res);
    });
  }, []);

  console.log(todoList);

  return <div />;
};
