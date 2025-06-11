import { useState } from "react";
import { FaCheck, FaUndo, FaEdit, FaTrash, FaSave } from "react-icons/fa";

export default function TaskItem({
  task,
  index,
  onDelete,
  onEdit,
  onToggleComplete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleSave = () => {
    onEdit(index, editedTask);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        opacity: task.completed ? 0.5 : 1,
        color: task.completed ? "#bbbbbb" : "#f5f5f5",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSave}>
            <FaSave />
          </button>
        </>
      ) : (
        <>
          {task.text}
          <button onClick={() => onToggleComplete(index)}>
            {" "}
            {task.completed ? <FaUndo /> : <FaCheck />}
          </button>
          <button onClick={() => setIsEditing(true)}>
            <FaEdit />
          </button>
          <button onClick={() => onDelete(index)}>
            <FaTrash />
          </button>
        </>
      )}
    </li>
  );
}
