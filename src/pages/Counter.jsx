import { useState } from "react";

function Counter({ selectedbtn }) {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-[#06110D] min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="w-max p-3 rounded-md bg-[#10B981] text-white text-3xl border-2 border-black h-16 w-full font-bold justify-center flex items-center ">
        {selectedbtn}
      </h1>
      <div className="h-40 w-[40%] rounded-xl bg-[#FACC15] font-extrabold  text-6xl text-black text-bold border-black flex justify-center items-center">
        {count}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-[#8B5CF6] text-white border border-black px-3 py-2 rounded"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count + 10)}
          className="bg-[#8B5CF6] text-white border border-black px-3 py-2 rounded"
        >
          +10
        </button>
        <button
          onClick={() => setCount(count + 50)}
          className="bg-[#8B5CF6] text-white border border-black px-3 py-2 rounded"
        >
          +50
        </button>
        <button
          onClick={() => setCount(count + 100)}
          className="bg-[#8B5CF6] text-white border border-black px-3 py-2 rounded"
        >
          +100
        </button>
      </div>

      <button onClick={() => setCount(0)} className="text-white px-8 py-4 rounded bg-[#c20300] border border-black">
        Reset
      </button>
    </div>
  );
}

export default Counter;
