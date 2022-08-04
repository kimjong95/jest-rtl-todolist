import React from 'react';
import { Todo } from '../../_data/todo/Todo';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { TodoItem, TodoItemProps } from '../components/TodoItem';
import dayjs from 'dayjs';
import { TodoForm } from '../../todoForm/TodoForm';
import exp from 'constants';

const secretTodo: Todo = {
  id: 'secret',
  text: 'It is Secret Todo',
  startDate: 1659279600000,
  endDate: 1660057200000,
  isSecret: true,
  registeredDate: 1659320269049,
  checkedTime: 0,
};

const normalTodo: Todo = {
  id: 'secret',
  text: 'It is Secret Todo',
  startDate: 1659279600000,
  endDate: 1660057200000,
  isSecret: false,
  registeredDate: 1659320269049,
  checkedTime: 0,
};

const checkedTodo: Todo = {
  id: 'secret',
  text: 'It is Secret Todo',
  startDate: 1659279600000,
  endDate: 1660057200000,
  isSecret: false,
  registeredDate: 1659320269049,
  checkedTime: 1659320239049,
};

export function renderTodoItem(props: TodoItemProps) {
  const { todo } = props;

  const todoCheckBox = () => screen.queryByTestId('todoCheckbox');
  const todoSecretIcon = () => screen.queryByTestId('todoSecretIcon');
  const todoOpenIcon = () => screen.queryByTestId('todoOpenIcon');
  const todoText = () => screen.getByText(todo.text);
  const todoStartDate = () =>
    screen.getByText(dayjs(todo.startDate).format('YYYY-MM-DD'));
  const todoEndDate = () =>
    screen.getByText(dayjs(todo.endDate).format('YYYY-MM-DD'));
  const todoDeleteButton = () => screen.queryByTestId('todoDeleteButton');

  const onClickElementEvent = (element: HTMLElement | null) => {
    element && fireEvent.click(element);
  };

  return {
    todoCheckBox,
    todoSecretIcon,
    todoOpenIcon,
    todoText,
    todoStartDate,
    todoEndDate,
    todoDeleteButton,
    onClickElementEvent,
  };
}

describe('<TodoItem />', () => {
  it('has right element in TodoItem form normal todo data', () => {
    const initialProps = { todo: normalTodo };
    render(<TodoItem {...initialProps} />);
    const {
      todoCheckBox,
      todoSecretIcon,
      todoOpenIcon,
      todoStartDate,
      todoEndDate,
      todoDeleteButton,
    } = renderTodoItem(initialProps);

    expect(todoCheckBox()).toBeInTheDocument();
    expect(todoCheckBox()).not.toBeChecked();
    expect(todoSecretIcon()).not.toBeInTheDocument();
    expect(todoOpenIcon()).toBeInTheDocument();
    expect(todoStartDate()).toBeInTheDocument();
    expect(todoEndDate()).toBeInTheDocument();
    expect(todoDeleteButton()).toBeInTheDocument();
  });

  it('has right element in TodoItem form secret todo data', () => {
    const initialProps = { todo: secretTodo };
    render(<TodoItem {...initialProps} />);
    const {
      todoCheckBox,
      todoSecretIcon,
      todoOpenIcon,
      todoStartDate,
      todoEndDate,
      todoDeleteButton,
    } = renderTodoItem(initialProps);

    expect(todoCheckBox()).toBeInTheDocument();
    expect(todoCheckBox()).not.toBeChecked();
    expect(todoSecretIcon()).toBeInTheDocument();
    expect(todoOpenIcon()).not.toBeInTheDocument();
    expect(todoStartDate()).toBeInTheDocument();
    expect(todoEndDate()).toBeInTheDocument();
    expect(todoDeleteButton()).toBeInTheDocument();
  });

  it('has right element in TodoItem form done todo data', () => {
    const initialProps = { todo: checkedTodo };
    render(<TodoItem {...initialProps} />);
    const {
      todoCheckBox,
      todoSecretIcon,
      todoOpenIcon,
      todoStartDate,
      todoEndDate,
      todoDeleteButton,
    } = renderTodoItem(initialProps);

    expect(todoCheckBox()).toBeInTheDocument();
    expect(todoCheckBox()).toBeChecked();
    expect(todoSecretIcon()).not.toBeInTheDocument();
    expect(todoOpenIcon()).toBeInTheDocument();
    expect(todoStartDate()).toBeInTheDocument();
    expect(todoEndDate()).toBeInTheDocument();
    expect(todoDeleteButton()).toBeInTheDocument();
  });

  it('checkbox event call onCheck function in props', () => {
    const onCheck = jest.fn();
    const initialProps = { todo: normalTodo, onCheck };
    render(<TodoItem {...initialProps} />);

    const { todoCheckBox, onClickElementEvent } = renderTodoItem(initialProps);

    onClickElementEvent(todoCheckBox());
    expect(onCheck).toHaveBeenCalled();
  });

  it('deleteButton event call onDelete function in props', () => {
    const onDelete = jest.fn();
    const initialProps = { todo: normalTodo, onDelete };
    render(<TodoItem {...initialProps} />);

    const { todoDeleteButton, onClickElementEvent } =
      renderTodoItem(initialProps);

    onClickElementEvent(todoDeleteButton());
    expect(onDelete).toHaveBeenCalled();
  });
});
