export interface Todo {
  id: string;
  text: string;
  startDate: number;
  endDate: number;
  isSecret: boolean;
  registeredDate: number;
  checkedTime: number;
}

export function createEmptyTodo(): Todo {
  return {
    id: '',
    text: '',
    startDate: 0,
    endDate: 0,
    isSecret: false,
    registeredDate: 0,
    checkedTime: 0,
  };
}
