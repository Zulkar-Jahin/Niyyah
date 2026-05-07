import { useState } from "react";

function Counter({ selectedbtn }) {
  const [count, setCount] = useState(0);
  const [selectedButton, setSelectedNum] = useState(null);

  const target = 500;
  const radius = 118;
  const progress = Math.min((count / target) * 100, 100);
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-[#06110D] min-h-screen text-white p-4 lg:p-6 flex flex-col lg:flex-row gap-6 items-center justify-center">
      {/* Left - Stats */}
      <div className="flex flex-col gap-4 w-full lg:w-1/5 order-last lg:order-none mx-2 lg:mx-0">
        <div className="bg-[#0f2d1f] rounded-xl p-4">
          <p className="text-xs lg:text-2xl text-gray-400 mb-2">Daily target</p>
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span className="lg:text-2xl lg:font-bold font-medium
            text-sm">
              {count} / {target}
            </span>
            <span  className="lg:text-2xl lg:font-bold font-medium
            text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-[#0f2d1f] rounded-xl p-4">
          <p className="text-xs lg:text-2xl lg:font-bold text-gray-400 mb-1">Today's total</p>
          <p className="text-2xl font-medium">{count}</p>
        </div>
        <div className="bg-[#0f2d1f] rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1 lg:text-2xl lg:font-bold">Best session</p>
          <p className="text-xs font-medium lg:text-2xl lg:font-bold">500</p>
        </div>
      </div>

      {/* Center - Counter */}
      <div className="flex flex-col items-center gap-6 flex-1 order-first lg:order-none  px-4 lg:px-0 px-6 lg:px-0">
        <p className="text-2xl font-medium">{selectedbtn || "Select a zikr"}</p>

        {/* Circular counter */}
        <div className="relative w-52 h-52">
          <svg
            className="absolute -top-44 -left-5 -rotate-90"
            width="408"
            height="408"
            viewBox="0 0 408 408"
          >
            <circle
              cx="124"
              cy="124"
              r="118"
              fill="none"
              stroke="#1a3a2a"
              strokeWidth="15"
            />
            <circle
              cx="124"
              cy="124"
              r = "118"
              fill="none"
              stroke="#1D9E75"
              strokeWidth="15"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-6xl lg:text-8xl font-medium">
            {count}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3 w-full max-w-xs mx-auto mt-8 lg:mt-20">
          {[1, 10, 50, 100].map((num) => (
            <button
              key={num}
              onClick={() => {
                setCount(count + num);
                setSelectedNum(num);
              }}
              className={`py-3 rounded-xl text-base  font-medium lg:text-2xl border transition ${
                num === selectedButton
                  ? "bg-[#0F6E56] text-[#E1F5EE] border-[#085041]"
                  : "bg-[#0f2d1f] text-white border-gray-700 hover:bg-[#1a3a2a]"
              }`}
            >
              +{num}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCount(0)}
          className="w-full max-w-sm py-2 rounded-xl border border-gray-700 bg-[#0f2d1f] text-gray-400 lg:text-xl lg:font-bold hover:text-white transition text-sm"
        >
          Reset count
        </button>
      </div>

      {/* Right - Motivation */}
      <div className="w-full lg:w-1/5 order-last lg:order-none ">
        <div className="bg-[#0f2d1f] rounded-xl p-4">
          <p className="text-xs lg:text-xl text-gray-400 mb-3">Motivation</p>
          <p className="text-sm lg:text-2xl text-gray-300 border-l-2 border-green-600 pl-3 leading-relaxed">
            "Whoever says SubhanAllah 100 times, a thousand good deeds are
            recorded."
            <span className="block text-xs lg:text-xl text-gray-500 mt-2">
              — Sahih Muslim
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
