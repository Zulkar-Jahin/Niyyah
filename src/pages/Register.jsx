import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#06110D] flex items-center justify-center px-4">
      <div className="w-full max-w-md lg:max-w-xl bg-[#0f2d1f] rounded-2xl p-8 lg:p-8 flex flex-col gap-5">
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-400 text-sm lg:text-xl">
            Start your zikr journey today
          </p>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-xs lg:text-2xl text-gray-400">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="bg-[#06110D] text-white lg:text-xl border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-xs lg:text-2xl text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="bg-[#06110D] text-white border border-gray-700 rounded-xl px-4 py-3 lg:py-4 text-sm lg:text-xl focus:outline-none focus:border-green-600"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1">
          <label className="text-xs lg:text-2xl text-gray-400">Country</label>
          <select className="bg-[#06110D] text-white lg:text-xl border border-gray-700 rounded-xl px-4 py-3 lg:py-4 text-sm focus:outline-none focus:border-green-600">
            <option value="">Select country</option>
            <option value="BD">Bangladesh</option>
            <option value="PK">Pakistan</option>
            <option value="IN">India</option>
            <option value="EG">Egypt</option>
            <option value="TR">Turkey</option>
            <option value="KSA">Saudi Arabia</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-xs lg:text-2xl text-gray-400">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#06110D] text-white border border-gray-700 rounded-xl px-4 py-3 lg:py-4 text-sm focus:outline-none focus:border-green-600"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 text-xs lg:text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-green-700 hover:bg-green-600 text-white lg:text-2xl py-3 rounded-xl font-medium transition"
        >
          Create Account
        </button>
        {/* error message show section   */}
        {error && (
          <div className="text-red-500 text-sm lg:text-xl text-center">
            {error}
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3 text-gray-600 text-xs lg:text-xl">
          <div className="flex-1 h-px bg-gray-700"></div>
          or
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Google */}
        <button className="w-full border border-gray-700 text-white lg:text-2xl py-3 rounded-xl text-sm hover:bg-[#1a3a2a] transition">
          Continue with Google
        </button>

        {/* Login link */}
        <p className="text-center text-xs lg:text-xl text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:text-green-300">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
