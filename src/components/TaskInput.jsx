import { useState } from "react";

export default function TaskInput({onAddTask}) {
  const [task, setTask] = useState("");

  const handleAdd=()=>{
    onAddTask(task);
    setTask('')
    
    
  }

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}
