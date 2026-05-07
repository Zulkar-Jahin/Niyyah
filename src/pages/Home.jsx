import { useNavigate } from "react-router-dom";

const zikrList = [
  "Subhanallah",
  "Alhamdulillah",
  "Allahu Akbar",
  "La ilaha illallah",
  "Astaghfirullah",
  "La hawla wa la quwwata illa billah",
];

function Home({ selectedbtn, setSelectedbtn }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row bg-[#06110D] min-h-screen justify-center gap-4 pt-16">
      {/* quick counter  */}
      <div className="w-full lg:w-1/4 flex flex-col max-h-fit gap-4 text-sm text-black bg-[#0f2d1f] rounded-lg mb-4 p-4">
        <p className="text-xl font-bold text-purple-400 mb-3 ">Quick Counter</p>
        {zikrList.map((zikr) => (
          <button
            key={zikr}
            onClick={() => setSelectedbtn(zikr)}
            className={`w-full text-2xl mb-2 p-3 block border-black rounded-md px-4 py-2  ${
              zikr === selectedbtn
                ? "bg-green-700 text-white"
                : "bg-white text-black"
            }`}
          >
            {zikr}
          </button>
        ))}

        <button
          onClick={() => navigate("/counter")}
          className=" w-full bg-green-600 text-white text-3xl px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Start
        </button>
      </div>
    

      {/* stats  */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4 text-sm">
        <div className="flex gap-4 flex-col sm:flex-row justify-center
        items-center md:w-full">
          {/* today count  */}
          <div className="flex items-center bg-[rgb(3,52,75)] gap-4 w-[50%] rounded-md">
            <p className="flex-1 text-3xl text-yellow-500 font-normal p-4 gap-4"> 
              Today's count
            </p>
            <p className="flex-1 text-2xl text-yellow-500 font-bold p-2 gap-2">
              347
            </p>
          </div>

          {/* streak*/}
          <div className="flex bg-[rgb(3,52,75)] gap-4 w-1/2 rounded-md">
            <p className="flex-1 text-3xl text-orange-500 font-normal p-4 gap-4">
              🔥Streak
            </p>
            <p className="flex-1 text-2xl text-orange-500 font-bold p-6 gap-4">
              12
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full text-xl">
          {/* daily target  */}
          <div className="flex bg-[rgb(3,52,75)] rounded-lg gap-4 p-4 text-red-500">
            <p className="flex-1 text-xl font-normal  mb-3 p-4 gap-4">
              Daily Target
            </p>
            <div className="flex justify-between text-xl mb-1 gap-4">
              <span>0/500</span>
              <span>0%</span>
            </div>
            {/* graphical progress bar  */}
            <div className="h-2 bg-gray-700 rounded-full">
              <div className="h-2 bg-green-600 rounded-full w-0"></div>
            </div>
          </div>
        </div>

        {/* Standing  */}
        <div className="bg-[rgb(3,52,75)] rounded-lg p-4">
          <p className="text-2xl font-bold text-orange-300 mb-2">Daily motivation</p>
          <p className="text-3xl text-gray-300 border-l-2 border-green-600 pl-3">
            "Whoever says SubhanAllah 100 times, a thousand good deeds are
            recorded."
            <span className="block text-2xl text-orange-500 mt-1">
              — Sahih Muslim
            </span>
          </p>
        </div>

        {/* Analyse Button */}
        <button className="w-full bg-[rgb(2,105,31)] text-3xl text-white py-2 rounded-lg border border-gray-700 hover:bg-green-600 transition">
          Analyse →
        </button>
      </div>

      {/* standing  */}
      <div className="w-full lg:w-[20%] flex flex-col gap-4 text-sm text-white">
        {/* Global Standing */}
        <div className="bg-[#0f2d1f] rounded-lg p-4">
          <p className="text-2xl font-bold text-purple-400 mb-3">Global standing</p>
          {[
            { rank: 1, name: "Ahmed (Egypt)", count: 12400 },
            { rank: 2, name: "Fatima (BD)", count: 11800 },
            { rank: 3, name: "Yusuf (PK)", count: 10200 },
          ].map((user) => (
            <div
              key={user.rank}
              className="flex justify-between text-xl py-2 border-b border-gray-700"
            >
              <span className="text-gray-500 ">#{user.rank}</span>
              <span>{user.name}</span>
              <span className="text-yellow-400">{user.count}</span>
            </div>
          ))}
          <div className="flex justify-between text-xl text-[rgb(12,227,255)] py-2 bg-green-900 rounded px-2 mt-2">
            <span>#47</span>
            <span>You</span>
            <span>0</span>
          </div>
        </div>

        {/* Country Standing */}
        <div className="bg-[#0f2d1f] rounded-lg p-4">
          <p className="text-2xl font-bold text-purple-400 mb-3">Country standing 🇧🇩</p>
          {[
            { rank: 1, name: "Fatima", count: 11800 },
            { rank: 2, name: "Rafiq", count: 8300 },
            { rank: 3, name: "Nadia", count: 7100 },
          ].map((user) => (
            <div
              key={user.rank}
              className="flex justify-between text-xl py-2 border-b border-gray-700"
            >
              <span className="text-gray-500">#{user.rank}</span>
              <span>{user.name}</span>
              <span className="text-green-400">{user.count}</span>
            </div>
          ))}
          <div className="flex justify-between text-xl text-[rgb(12,227,255)] py-2 bg-green-900 rounded px-2 mt-2">
            <span>#12</span>
            <span>You</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
