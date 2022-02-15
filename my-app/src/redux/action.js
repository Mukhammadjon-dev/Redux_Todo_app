import * as types from "./actionTypes";
export function addTodo(title) {
  return {
    type: types.Add_Todo,
    payload: title,
  };
}
export function toggleTodo(id) {
  return {
    type: types.Toggle_Todo_Complete,
    payload: id,
  };
}
