const TaskCard = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="flex w-4/5 items-center justify-between bg-gray-800 p-4 rounded shadow">
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
          className="text-red-400 border-2 border-gray-800 bg-gray-700 p-1 w-20 font-semibold rounded-md hover:text-red-600 transition"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default TaskCard;
