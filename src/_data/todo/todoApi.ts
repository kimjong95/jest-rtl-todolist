import { Todo } from './Todo';
import axios from 'axios';

const BASE_URL = 'http://localhost:4000/todos';

export function findTodoList(): Promise<Todo[]> {
  return axios.get(BASE_URL).then(res => {
    return (res && res.data) || [];
  });
}

export function registerTodo(todo: Todo): Promise<void> {
  return axios.post(BASE_URL);
}
