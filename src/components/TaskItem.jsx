const TaskItem = ({ task, toggleTask }) => (
  <div className="flex items-center justify-between bg-gray-800 p-4 rounded mb-2">
    <span className={task.done ? "line-through text-gray-500" : ""}>
      {task.title}
    </span>
    <button
      className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
      onClick={() => toggleTask(task.id)}
    >
      {task.done ? '↩️ Mark Undone' : '✅ Mark Done'}
    </button>
  </div>
);

export default TaskItem;
