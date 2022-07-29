import { render, screen } from '@testing-library/react';
import { TodoForm } from '../TodoForm';

function renderTodoForm() {
  const todoText = () => screen.getByLabelText('Todo');
  const todoStartDate = () => screen.getByLabelText('StartDate');
  const todoEndDate = () => screen.getByLabelText('EndDate');
  const todoSecret = () => screen.getByLabelText('Secret');

  const cancelButton = () => screen.getByText('Cancel');
  const registerButton = () => screen.getByText('Register');

  return {
    todoText,
    todoStartDate,
    todoEndDate,
    todoSecret,
    cancelButton,
    registerButton,
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
});
