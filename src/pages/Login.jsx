import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#06110D] flex items-center justify-center px-4">
      <div className="w-full max-w-md lg:max-w-xl bg-[#0f2d1f] rounded-2xl p-8 lg:p-8 flex flex-col gap-5">

        <div className="text-center mb-2">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400 text-sm lg:text-xl">Log in to continue your zikr journey</p>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-xs lg:text-2xl text-gray-400">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="bg-[#06110D] text-white border border-gray-700 rounded-xl px-8 py-3 lg:py-4 text-sm  lg:text-xl focus:outline-none focus:border-green-600"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-xs lg:text-2xl text-gray-400">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-[#06110D] text-white lg:text-xl border border-gray-700 rounded-xl px-4 py-3 lg:py-4 text-sm focus:outline-none focus:border-green-600"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 text-xs lg:text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center text-xs text-gray-400">
          <label className="flex items-center gap-2 lg:text-xl">
            <input type="checkbox" className="accent-green-600 " />
            Remember me
          </label>
          <span className="cursor-pointer text-sm lg:text-xl hover:text-white transition">Forgot password?</span>
        </div>

        {/* Login Button */}
        <button className="w-full bg-green-700 hover:bg-green-600 text-white lg:text-2xl py-3 rounded-xl font-medium transition">
          Log In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 text-gray-600 text-xs lg:text-xl">
          <div className="flex-1 h-px bg-gray-700"></div>
          or
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Google */}
        <button className="w-full border border-gray-700 text-white lg:text-xl py-3 rounded-xl text-sm hover:bg-[#1a3a2a] transition">
          Continue with Google
        </button>

        {/* Register link */}
        <p className="text-center text-xs lg:text-xl text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-400 hover:text-green-300">Register</Link>
        </p>

      </div>
    </div>
  )
}

export default Login;