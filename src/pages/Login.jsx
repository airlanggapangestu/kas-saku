import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Kirim login ke backend
      await axios.post("http://localhost:5000/api/auth/login", { username, password });
      onLogin(); // berhasil login, panggil parent
    } catch (err) {
      setError(err.response?.data?.message || "Login gagal");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-2xl shadow w-80">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-sm p-2 rounded mb-4">
          <strong>Demo account:</strong> username <code>rangga</code> / password <code>123456</code>
        </div>

        {error && <p className="text-red-600 mb-2">{error}</p>}

        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 border-gray-200  rounded-lg w-full mb-4" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 border-gray-200 rounded-lg w-full mb-4" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
