import { connect } from "react-redux";
import { toggleTodo } from "../redux/action";
function Todo({ item, toggleTodo }) {
  return (
    <div key={item.id} className="row">
      <div className="col-md-2 my-auto">
        <input
          checked={item.completed}
          onChange={() => toggleTodo(item.id)}
          type="checkbox"
          className="checkbox"
          id={"check/" + item.id}
        />
      </div>
      <div className="col-md-10">
        <label className="label" htmlFor={"check/" + item.id}>
          {item.title}
        </label>
      </div>
    </div>
  );
}
export default connect(null, { toggleTodo })(Todo);
