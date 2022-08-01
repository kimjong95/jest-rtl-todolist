import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

  const changeTargetCheckboxEvent = (element: HTMLElement, value: boolean) => {
    fireEvent.change(element, {
      target: {
        checked: value,
      },
    });
  };

  const clickCancel = () => {
    userEvent.click(cancelButton());
  };

  const clickRegister = async () => {
    userEvent.click(await registerButton());
  };

  return {
    todoText,
    todoStartDate,
    todoEndDate,
    todoSecret,
    cancelButton,
    registerButton,
    changeTargetElementEvent,
    changeTargetCheckboxEvent,
    clickCancel,
    clickRegister,
  };
}

describe('<TodoForm />', () => {
  it('has Form element in component', async () => {
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
    expect(await waitFor(() => registerButton())).toBeInTheDocument();
  });

  it('change input values validate', () => {
    render(<TodoForm />);

    const {
      todoText,
      todoStartDate,
      todoEndDate,
      todoSecret,
      changeTargetElementEvent,
      changeTargetCheckboxEvent,
    } = renderTodoForm();

    changeTargetElementEvent(todoText(), 'Change todo text test');
    expect(todoText()).toHaveAttribute('value', 'Change todo text test');

    changeTargetElementEvent(todoStartDate(), '2022-07-30');
    expect(todoStartDate()).toHaveAttribute('value', '2022-07-30');

    changeTargetElementEvent(todoEndDate(), '2022-08-05');
    expect(todoEndDate()).toHaveAttribute('value', '2022-08-05');

    changeTargetCheckboxEvent(todoSecret(), true);
    expect(todoSecret()).toBeChecked();

    changeTargetCheckboxEvent(todoSecret(), false);
    expect(todoSecret()).not.toBeChecked();
  });

  it('cancel button click will be called onCancel() as field empty initialize', () => {
    render(<TodoForm />);

    const {
      todoText,
      todoStartDate,
      todoEndDate,
      todoSecret,
      changeTargetElementEvent,
      changeTargetCheckboxEvent,
      clickCancel,
    } = renderTodoForm();

    changeTargetElementEvent(todoText(), 'Change todo text test');
    expect(todoText()).toHaveAttribute('value', 'Change todo text test');

    changeTargetElementEvent(todoStartDate(), '2022-07-30');
    expect(todoStartDate()).toHaveAttribute('value', '2022-07-30');

    changeTargetElementEvent(todoEndDate(), '2022-08-05');
    expect(todoEndDate()).toHaveAttribute('value', '2022-08-05');

    changeTargetCheckboxEvent(todoSecret(), true);
    expect(todoSecret()).toBeChecked();

    clickCancel();

    expect(todoText()).toHaveAttribute('value', '');
    expect(todoStartDate()).toHaveAttribute('value', '');
    expect(todoEndDate()).toHaveAttribute('value', '');
    expect(todoSecret()).not.toBeChecked();
  });

  it('cancel button click will be called onCancel() as field empty initialize', async () => {
    render(<TodoForm />);

    const {
      todoText,
      todoStartDate,
      todoEndDate,
      todoSecret,
      changeTargetElementEvent,
      changeTargetCheckboxEvent,
      clickRegister,
    } = renderTodoForm();

    changeTargetElementEvent(todoText(), 'Change todo text test');
    expect(todoText()).toHaveAttribute('value', 'Change todo text test');

    changeTargetElementEvent(todoStartDate(), '2022-07-30');
    expect(todoStartDate()).toHaveAttribute('value', '2022-07-30');

    changeTargetElementEvent(todoEndDate(), '2022-08-05');
    expect(todoEndDate()).toHaveAttribute('value', '2022-08-05');

    changeTargetCheckboxEvent(todoSecret(), true);
    expect(todoSecret()).toBeChecked();

    await clickRegister();

    expect(todoText()).toHaveAttribute('value', '');
    expect(todoStartDate()).toHaveAttribute('value', '');
    expect(todoEndDate()).toHaveAttribute('value', '');
    expect(todoSecret()).not.toBeChecked();
  });
});
