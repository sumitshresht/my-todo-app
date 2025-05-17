import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(sessionStorage.getItem("users") || "{}");

    if (isNewUser) {
      // Sign Up
      if (users[email]) {
        setError("User already exists.");
        return;
      }
      users[email] = password;
      sessionStorage.setItem("users", JSON.stringify(users));
      sessionStorage.setItem("user", email);
      onLogin(email);
    } else {
      // Login
      if (!users[email] || users[email] !== password) {
        setError("Invalid email or password.");
        return;
      }
      sessionStorage.setItem("user", email);
      onLogin(email);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          {isNewUser ? "Create Account" : "Login to Taskify"}
        </h2>

        {error && (
          <div className="text-red-400 text-sm text-center">{error}</div>
        )}

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-500 py-2 rounded hover:bg-green-600 transition"
        >
          {isNewUser ? "Sign Up" : "Login"}
        </button>

        <div className="text-center text-sm text-gray-400">
          {isNewUser ? "Already have an account?" : "New user?"}
          <button
            type="button"
            className="ml-2 text-green-400 hover:underline"
            onClick={() => {
              setIsNewUser(!isNewUser);
              setError('');
            }}
          >
            {isNewUser ? "Login here" : "Create account"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
