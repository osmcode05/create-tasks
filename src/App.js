import { useState, useRef, useEffect } from "react";
import AddTask from "./Components/AddTask";
import ReadTask from "./Components/ReadTask";

export default function App() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState(
    localStorage.UserData ? JSON.parse(localStorage.UserData) : []
  );
  const [inputValue, setInputValue] = useState("");
  const [mode, setMode] = useState("Add");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.UserData = JSON.stringify(tasks);
  }, [tasks]);

  const handleAddTask = () => {
    if (!inputValue.trim()) return alert("Empty Value");
    setTasks(
      mode === "Add"
        ? [...tasks, inputValue]
        : tasks.map((task, index) => (index === editIndex ? inputValue : task))
    );
    setMode("Add");
    setInputValue("");
    setEditIndex(null);
    inputRef.current.focus();
  };

  const handleEditTask = (index) => {
    setInputValue(tasks[index]);
    setMode("Edit");
    setEditIndex(index);
    inputRef.current.focus();
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <section>
      <AddTask
        setInputValue={setInputValue}
        inputValue={inputValue}
        inputRef={inputRef}
        handleAddTask={handleAddTask}
        mode={mode}
      />

      <ReadTask
        tasks={tasks}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
    </section>
  );
}
