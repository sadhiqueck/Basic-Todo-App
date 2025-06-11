import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { text: taskText }]);
  };

  const deleteTask = (index) => {
    const updatedTask = tasks.filter((task, i) => i !== index);
    setTasks(updatedTask);
  };

  const editTask = (index, newText) => {
    const updatedTask = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTask);
  };

  const toggleComplete = (index) => {
    const updatedTask = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTask);
  };

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}
