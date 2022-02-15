import * as types from "../actionTypes";
export default function todoReducer(
  state = {
    todos: [
      { id: 1, title: "task1", completed: false },
      { id: 2, title: "task2", completed: true },
    ],
  },
  action
) {
  switch (action.type) {
    case types.Add_Todo:
      let todos = [...state.todos];
      todos.push({
        id: todos.length + 1,
        title: action.payload,
        completed: false,
      });
      state = {
        ...state,
        todos: todos,
      };
      break;
    case types.Toggle_Todo_Complete:
      const arr = state.todos.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, completed: !item.completed };
        }
        return item;
      });
      state = {
        todos: arr,
      };
      break;
  }
  return state;
}
