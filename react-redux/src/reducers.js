import { ADD_TODO, REMOVE_TODO } from './actions';

const DEFAULT_TODOS = [
  'My First Todo'
];

function todoReducer(state = DEFAULT_TODOS, action) {
  switch(action.type) {

  case ADD_TODO:
    return [...state, action.value];

  case REMOVE_TODO:
    return state.filter((el, i) => i !== action.index);

  default:
    return state;
  }
}

export default todoReducer;