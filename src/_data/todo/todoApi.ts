import { Todo } from './Todo';
import axios from 'axios';

export function findTodoList(): Promise<Todo[]> {
  return axios.get('http://localhost:4000/todos').then(res => {
    return (res && res.data) || [];
  });
}
