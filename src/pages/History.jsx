import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

function History() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            data: [320, 450, 180, 500, 290, 410, 347],
            backgroundColor: "rgb(19,180,164)",
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#aaa", font: { size: 24 } },
          },
          y: {
            grid: { color: "rgba(4,212,223,0.94)" },
            ticks: { color: "#aaa", font: { size: 24 } },
          },
        },
      },
    });

    // destroy : if component unmounts, destroy the chart instance to free up resources
    return () => myChart.destroy();
  }, []);

  return (
    <div className="bg-[#06110D] min-h-screen text-white p-6">
      <h1 className="text-2xl lg:text-3xl lg:font-bold text-yellow-400  font-medium mb-6 ml-8">
        History
      </h1>
      <div className="bg-[rgb(1,66,82)] w-[full] lg:w-[40%] rounded-xl p-4 m-4">
        <p className="text-xs lg:text-3xl text-gray-400 mb-4">
          Daily activity (last 7 days)
        </p>
        <div className="relative min-h-[40vh] w-[100%]">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
}

export default History;
