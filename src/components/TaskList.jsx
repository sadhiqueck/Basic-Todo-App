import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onDelete,
  onEdit,
  onToggleComplete,
}) {
  return (        
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}
