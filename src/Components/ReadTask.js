import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export default function ReadTask({ tasks, handleEditTask, handleDeleteTask }) {
  return (
    <div className="container">
      {tasks.length <= 0 && <h1>No Tasks</h1>}
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <p>{task}</p>
          <FaPencilAlt size={22} onClick={() => handleEditTask(index)} />
          <FaTrashAlt size={20} onClick={() => handleDeleteTask(index)} />
        </div>
      ))}
    </div>
  );
}
