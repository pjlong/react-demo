import { createStore } from 'redux';

import reducer from './reducers';

// const DEFAULT_TODOS = [
//   'My First Todo'
// ];

// function reducer(state = DEFAULT_TODOS, action) {
//   switch(action.type) {
//   default:
//     return state;
//   }
// }

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
