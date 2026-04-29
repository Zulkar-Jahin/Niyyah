import { useState } from "react";

function Counter({ selectedbtn }) {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="w-[50%] rounded-md bg-orange-700 text-white text-3xl border-2 border-black h-16 w-full font-bold justify-center flex items-center ">
        {selectedbtn}
      </h1>
      <div className="h-40 w-[40%] rounded-xl bg-violet-400 font-extrabold  text-6xl text-black text-bold border-black flex justify-center items-center">{count}</div>
      <div className="flex gap-2">
        <button onClick={()=>setCount(count+1)} 
        className="bg-sky-700 text-white border border-black bg-sky-700 px-3 py-2 rounded">
          +1
        </button>
        <button onClick={()=>setCount(count+10)}
         className="bg-sky-700 text-white border border-black bg-sky-700 px-3 py-2 rounded">
          +10
        </button>
        <button onClick={()=>setCount(count+50)}
         className="bg-sky-700 text-white border border-black bg-sky-700 px-3 py-2 rounded">
          +50
        </button>
        <button onClick={()=>setCount(count+100)}
         className="bg-sky-700 text-white border border-black bg-sky-700 px-3 py-2 rounded">
          +100
        </button>
      </div>
    </div>
  );
}

export default Counter;
