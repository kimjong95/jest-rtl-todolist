import { TableCell, TableRow } from '@mui/material';
import React, { ReactElement } from 'react';
import { Todo } from '../../_data/todo/Todo';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';
export interface TodoItemProps {
  todo: Todo;
  onCheck?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const TodoItem = ({
  todo,
  onCheck,
  onDelete,
}: TodoItemProps): ReactElement => {
  return (
    <TableRow>
      <TableCell>
        <input
          type="checkbox"
          data-testid="todoCheckbox"
          role="todoCheckbox"
          checked={todo.checkedTime > 0}
          onChange={() => onCheck && onCheck(todo.id)}
        />
      </TableCell>
      <TableCell>
        {todo.isSecret ? (
          <LockIcon data-testid="todoSecretIcon" />
        ) : (
          <LockOpenIcon data-testid="todoOpenIcon" />
        )}
      </TableCell>
      <TableCell>{todo.text}</TableCell>
      <TableCell>{dayjs(todo.startDate).format('YYYY-MM-DD')}</TableCell>
      <TableCell>{dayjs(todo.endDate).format('YYYY-MM-DD')}</TableCell>
      <TableCell>
        <button
          data-testid="todoDeleteButton"
          onClick={() => onDelete && onDelete(todo.id)}
        >
          <DeleteIcon />
        </button>
      </TableCell>
    </TableRow>
  );
};
