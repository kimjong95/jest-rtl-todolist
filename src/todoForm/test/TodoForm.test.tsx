import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoForm } from '../TodoForm';

function renderTodoForm() {
  const todoText = () => screen.getByLabelText('Todo');
  const todoStartDate = () => screen.getByLabelText('StartDate');
  const todoEndDate = () => screen.getByLabelText('EndDate');
  const todoSecret = () => screen.getByLabelText('Secret');

  const cancelButton = () => screen.getByText('Cancel');
  const registerButton = () => screen.getByText('Register');

  const changeTargetElementEvent = (element: HTMLElement, text: string) => {
    fireEvent.change(element, {
      target: {
        value: text,
      },
    });
  };

  return {
    todoText,
    todoStartDate,
    todoEndDate,
    todoSecret,
    cancelButton,
    registerButton,
    changeTargetElementEvent,
  };
}

describe('<TodoForm />', () => {
  it('has Form element in page', () => {
    render(<TodoForm />);
    const {
      todoText,
      todoStartDate,
      todoEndDate,
      todoSecret,
      cancelButton,
      registerButton,
    } = renderTodoForm();

    expect(todoText()).toBeInTheDocument();
    expect(todoStartDate()).toBeInTheDocument();
    expect(todoEndDate()).toBeInTheDocument();
    expect(todoSecret()).toBeInTheDocument();
    expect(cancelButton()).toBeInTheDocument();
    expect(registerButton()).toBeInTheDocument();
  });

  it('change input values validate', () => {
    render(<TodoForm />);

    const {
      todoText,
      todoStartDate,
      todoEndDate,
      todoSecret,
      changeTargetElementEvent,
    } = renderTodoForm();

    changeTargetElementEvent(todoText(), 'Change todo text test');
    expect(todoText()).toHaveAttribute('value', 'Change todo text test');

    changeTargetElementEvent(todoStartDate(), '2022-07-30');
    expect(todoStartDate()).toHaveAttribute('value', '2022-07-30');
  });
});
