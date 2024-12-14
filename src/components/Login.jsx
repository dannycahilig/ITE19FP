import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("user");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#FFE4E1] to-[#FFC0CB]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <a href="/" className="text-3xl font-bold text-[#4B3D8F]">
            REGALO
            <span className="block text-xs text-center">GIFT SHOP</span>
          </a>
        </div>
        <form>
          <div className="mb-2">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <select
              id="role"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            <label htmlFor="showPassword" className="text-sm">
              Show Password
            </label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full font-bold py-2 bg-[#4B3D8F] text-white rounded-lg hover:bg-[#4B3D8F] focus:outline-none"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/reg" className="text-[#4B3D8F] underline font-bold">
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
