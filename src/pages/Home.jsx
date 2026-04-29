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
    <div className="p-6 bg-gray-700 min-h-screen flex flex-col items-center justify-content gap-2">
      {zikrList.map((zikr) => (
        <button
          key={zikr}
          onClick={() => setSelectedbtn(zikr)}
          className={`w-[20%] mb-2 p-3 block border-black rounded-md px-4 py-2  ${
            zikr === selectedbtn ? "bg-green-700 text-white" : "bg-white"
          }`}
        >
          {zikr}
        </button>
      ))}

      <button
        onClick={() => navigate("/counter")}
        className=" w-[20%] bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
      >
        Start
      </button>
    </div>
  );
}

export default Home;
