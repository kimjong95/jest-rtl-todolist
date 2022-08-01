import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { TodoListHeader } from '../components/TodoListHeader';

function renderTodoListHeader() {
  const todoHeaderCheckBox = () => screen.getByText('Check');
  const todoHeaderSecret = () => screen.getByText('Secret');
  const todoHeaderText = () => screen.getByText('Todo');
  const todoHeaderStartDate = () => screen.getByText('StartDate');
  const todoHeaderEndDate = () => screen.getByText('EndDate');
  const todoHeaderDelete = () => screen.getByText('Delete');

  return {
    todoHeaderCheckBox,
    todoHeaderSecret,
    todoHeaderText,
    todoHeaderStartDate,
    todoHeaderEndDate,
    todoHeaderDelete,
  };
}

describe('<TodoListHeader/>', () => {
  it('has Table Header element in component', () => {
    render(<TodoListHeader />);
    const {
      todoHeaderCheckBox,
      todoHeaderSecret,
      todoHeaderText,
      todoHeaderStartDate,
      todoHeaderEndDate,
      todoHeaderDelete,
    } = renderTodoListHeader();

    expect(todoHeaderCheckBox()).toBeInTheDocument();
    expect(todoHeaderSecret()).toBeInTheDocument();
    expect(todoHeaderText()).toBeInTheDocument();
    expect(todoHeaderStartDate()).toBeInTheDocument();
    expect(todoHeaderEndDate()).toBeInTheDocument();
    expect(todoHeaderDelete()).toBeInTheDocument();
  });
});
