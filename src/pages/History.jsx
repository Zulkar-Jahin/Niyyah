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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total zikr", value: "2,847" },
          { label: "Day streak", value: "12" },
          { label: "Best session", value: "500" },
          { label: "Active days", value: "24" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[rgb(1,66,82)] rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className="text-2xl font-medium">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* CHART HERE  */}
        <div className="bg-[rgb(1,66,82)] w-[full] lg:w-[50%] rounded-xl p-4 m-4">
          <p className="text-xs lg:text-3xl text-gray-400 mb-4">
            Daily activity (last 7 days)
          </p>
          <div className="relative min-h-[40vh] w-[100%]">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-[50%]">
          {/* Zikr breakdown */}
          <div className="bg-[rgb(1,66,82)] w-full rounded-xl p-4 ">
            <p className="text-xs lg:text-3xl text-gray-400 mb-4">
              Zikr breakdown
            </p>
            {[
              { name: "Subhanallah", count: 980, percent: 80 },
              { name: "Alhamdulillah", count: 740, percent: 60 },
              { name: "Allahu Akbar", count: 620, percent: 50 },
              { name: "Astaghfirullah", count: 320, percent: 30 },
              { name: "La ilaha illallah", count: 187, percent: 15 },
              {
                name: "La hawla wa la quwwata illa billah",
                count: 120,
                percent: 10,
              },
            ].map((zikr) => (
              <div key={zikr.name} className="flex items-center gap-3 mb-3">
                <span className="text-sm lg:text-xl w-36  text-white">
                  {zikr.name}
                </span>
                <div className="flex-1 h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-2 bg-green-500 rounded-full"
                    style={{ width: `${zikr.percent}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">{zikr.count}</span>
              </div>
            ))}
          </div>
          {/* activity log  */}
          <div className="bg-[rgb(1,66,82)] w-full rounded-xl p-4 ">
            <p className="text-xs lg:text-3xl text-gray-400 mb-4">
              Recent activity log
            </p>
            {[
              { name: "Subhanallah", time: "Today 9:32am", count: "+100" },
              { name: "Alhamdulillah", time: "Today 8:15am", count: "+50" },
              { name: "Allahu Akbar", time: "Yesterday 9:00pm", count: "+33" },
              {
                name: "Astaghfirullah",
                time: "Yesterday 7:45pm",
                count: "+20",
              },
              { name: "Subhanallah", time: "2 days ago", count: "+100" },
            ].map((log, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-700 last:border-none"
              >
                <span className="text-sm lg:text-xl text-white">
                  {log.name}
                </span>
                <span className="text-xs lg:text-xl text-gray-400">
                  {log.time}
                </span>
                <span className="text-xs lg:text-xl bg-[rgb(83,240,246)] text-[rgb(0,0,0)] px-2 py-1 rounded-md">
                  {log.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* milestone section here  */}
      <div className="bg-[rgb(1,82,78)] rounded-xl p-4 m-4">
        <p className="text-xs lg:text-3xl text-gray-400 mb-4">
          Milestones & achievements
        </p>
        {[
          { icon: "★", title: "First 1000 zikr", desc: "Reached on Day 4" },
          { icon: "🔥", title: "7 day streak", desc: "Completed last week" },
          { icon: "🏆", title: "500 in one session", desc: "Personal best" },
        ].map((m) => (
          <div
            key={m.title}
            className="flex items-center gap-4 py-3 border-b border-gray-700 last:border-none"
          >
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg">
              {m.icon}
            </div>
            <div>
              <p className="text-sm lg:text-xl text-white">{m.title}</p>
              <p className="text-xs lg:text-xl text-gray-400">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
