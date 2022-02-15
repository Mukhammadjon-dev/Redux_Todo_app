import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <AddTask />
            </div>
            <div className="card-body">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
