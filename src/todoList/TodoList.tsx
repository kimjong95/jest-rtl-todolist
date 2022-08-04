import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Todo } from '../_data/todo/Todo';
import { findTodoList } from '../_data/todo/todoApi';

import { Table, TableHead, TableCell, TableRow } from '@mui/material';
import { TodoItem } from './components/TodoItem';

export const TodoList = (): ReactElement => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    findTodoList().then(res => {
      setTodoList(res);
    });
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>check</TableCell>
          <TableCell>secret</TableCell>
          <TableCell>todo</TableCell>
          <TableCell>startDate</TableCell>
          <TableCell>endDate</TableCell>
          <TableCell>delete</TableCell>
        </TableRow>
      </TableHead>
      {todoList &&
        todoList.length > 0 &&
        todoList.map((todo, index) => {
          return <TodoItem todo={todo} key={index} />;
        })}
    </Table>
  );
};
