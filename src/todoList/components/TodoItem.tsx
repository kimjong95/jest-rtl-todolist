import React, { ReactElement } from 'react';
import { Todo } from '../../_data/todo/Todo';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItemProps = ({}: TodoItemProps): ReactElement => {
  return <div />;
};
