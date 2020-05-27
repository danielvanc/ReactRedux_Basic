import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// This is also possibile because combineReducer expects an object
// import { combineReducers } from 'redux'
// import * as reducers from './reducers'
// const todoApp = combineReducers(reducers)

// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   SET_VISIBILITY_FILTER,
//   VisibilityFilters,
// } from '../actions';

// const { SHOW_ALL } = VisibilityFilters;

// How to do 3rd amendment but with combine reducers 👍🏼
export default combineReducers({
  todos,
  visibilityFilter,
});

// 3rd amendment can also be done like
// const reducer = combineReducers({
//   a: doSomethingWithA,
//   b: processB,
//   c: c
// })

// and also like
// function reducer(state = {}, action) {
//   return {
//     a: doSomethingWithA(state.a, action),
//     b: processB(state.b, action),
//     c: c(state.c, action)
//   }
// }

//
// 3rd amendment
//
// function todoApp(prevState = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(prevState.visibilityFilter, action),
//     todos: todos(prevState.todos, action)
//   }
// }

//
// 2nd ammendment
//
// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: todos(state.todos, action)
//       })
//     case TOGGLE_TODO:
//       return Object.assign({}, state, {
//         todos: todos(state.todos, action)
//       })
//     default:
//       return state
//   }
// }

//
// Original
//
// function todoApp(prevState = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, prevState, {
//         VisibilityFilter: action.filter
//       })
//     case ADD_TODO:
//       return Object.assign({}, prevState, {
//         todos: [
//           ...prevState.todos,
//           {
//             text: action.text,
//             completed: false
//           }
//         ]
//       })
//     case TOGGLE_TODO:
//       return Object.assign({}, prevState, {
//         todos: prevState.todos.map((todo, index) => {
//           if (index === action.index) {
//             return Object.assign({}, todo, {
//               completed: !todo.completed
//             })
//           }
//         })
//       })
//     default:
//       return prevState
//   }
// }
