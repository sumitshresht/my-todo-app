import TaskCard from './TaskCard';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  const incompleteTasks = tasks.filter(task => !task.done);
  const completeTasks = tasks.filter(task => task.done);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-2">Today’s Tasks</h2>
        <div className="space-y-2">
          {incompleteTasks.map(task => (
            <TaskCard key={task.id} task={task} toggleTask={toggleTask} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Completed</h2>
        <div className="space-y-2">
          {completeTasks.map(task => (
            <TaskCard key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TaskList;
