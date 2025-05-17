import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = ({ user, onLogout }) => (
  <aside className="w-64 bg-gray-900 text-white flex flex-col justify-between p-4">
    <div>
      <h2 className="text-2xl font-bold mb-6">Taskify</h2>
      <nav>
        <button className="bg-green-500 w-full text-left p-2 rounded">🏠 Home</button>
      </nav>
    </div>

    <div className="border-t border-gray-700 pt-4">
      <div className="flex items-center gap-3 mb-3">
        <FaUserCircle className="text-2xl text-white" />
        <div>
          <p className="font-medium text-white">{user}</p>
          <p className="text-gray-400 text-xs">Logged in</p>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="flex items-center gap-2 text-sm text-red-400 hover:text-red-500 transition"
      >
        <FiLogOut />
        Logout
      </button>
    </div>
  </aside>
);

export default Sidebar;
