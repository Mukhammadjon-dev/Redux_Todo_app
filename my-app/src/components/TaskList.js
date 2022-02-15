import { connect } from "react-redux";
import Todo from "./todo";

function TaskList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <Todo item={item} key={item.id} />
      ))}
    </div>
  );
}
export default connect(({ todos }) => ({ todos: todos }))(TaskList);
