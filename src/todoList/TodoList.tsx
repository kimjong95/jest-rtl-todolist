import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Todo } from '../_data/todo/Todo';
import { findTodoList } from '../_data/todo/todoApi';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, TableHead, TableCell, TableRow } from '@mui/material';

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
      <TableRow>
        <TableCell>
          <input type="checkbox" />
        </TableCell>
        <TableCell>
          <LockIcon />
          <LockOpenIcon />
        </TableCell>
        <TableCell>todotodotodotodotodotodotodotodtoo</TableCell>
        <TableCell>203010</TableCell>
        <TableCell>492371</TableCell>
        <TableCell>
          <button>
            <DeleteIcon />
          </button>
        </TableCell>
      </TableRow>
    </Table>
  );
};
