const TaskCard = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded shadow">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5 accent-green-500"
        />
        <span className={task.done ? "line-through text-gray-400" : ""}>
          {task.title}
        </span>
      </label>

      {task.done && (
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-400 hover:text-red-600 transition"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default TaskCard;
