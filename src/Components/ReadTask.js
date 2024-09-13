import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export default function ReadTask({ tasks, handleEditTask, handleDeleteTask }) {
  return (
    <div className="container">
      {tasks.length === 0 ? (
        <h1>No Tasks</h1>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="task">
            <p>{task}</p>
            <div>
              <FaPencilAlt
                role="button"
                onClick={() => handleEditTask(index)}
              />
              <FaTrashAlt
                style={{ marginLeft: "1.2rem" }}
                role="button"
                onClick={() => handleDeleteTask(index)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
