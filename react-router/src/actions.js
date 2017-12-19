export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(value) {
  return {
    type: ADD_TODO,
    value
  };
}

export function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    index
  }
}