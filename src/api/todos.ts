import { Todo } from '../types';

import { client } from '../utils';

export const USER_ID = 872;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const createTodo = ({ title, userId, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, {
    title,
    userId,
    completed,
  });
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodo = ({ id, title, userId, completed }: Todo) => {
  return client.patch<Todo>(`/todos/${id}`, {
    title,
    userId,
    completed,
  });
};
