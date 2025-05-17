import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import Login from './pages/Login';

const App = () => {
  const [user, setUser] = useState(sessionStorage.getItem("user"));
  const storageKey = `tasks_${user}`;

  const [tasks, setTasks] = useState(() => {
    if (!user) return []; // if no user yet, return empty
    const stored = sessionStorage.getItem(`tasks_${user}`);
    return stored ? JSON.parse(stored) : [];
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (user) {
      sessionStorage.setItem(storageKey, JSON.stringify(tasks));
    }
  }, [tasks, user]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObj = {
      id: Date.now(),
      title: newTask,
      done: false,
    };
    setTasks([newTaskObj, ...tasks]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleLogout = () => {
  sessionStorage.removeItem(`tasks_${user}`);
  sessionStorage.removeItem("user");
  setUser(null);
};


  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar user={user} onLogout={handleLogout} />
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </header>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <button
            className="bg-green-500 px-4 py-2 rounded"
            onClick={addTask}
          >
            + Add Task
          </button>
        </div>

        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </main>
    </div>
  );
};

export default App;
