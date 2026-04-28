import { useState } from "react";
import { useNavigate } from "react-router-dom";

const zikrList = [
  "Subhanallah",
  "Alhamdulillah",
  "Allahu Akbar",
  "La ilaha illallah",
  "Astaghfirullah",
  "La hawla wa la quwwata illa billah",
];

function Home() {
  const [selectedbtn, setSelectedbtn] = useState("");
  const navigate = useNavigate();

  return (
    <div className="p-6">
      {zikrList.map((zikr) => (
        <button
          onClick={() => setSelectedbtn(zikr)}
          className={`w-[20%] mb-2 p-3 block border rounded-md px-4 py-2  ${
            zikr === selectedbtn ? "bg-green-700 text-white" : "bg-white"
          } `}
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
