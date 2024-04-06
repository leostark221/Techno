import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Bar,
  Line,
  AreaChart,
} from "recharts";

export default function GraphTimeLine() {
  const data = [
    { date: "2024-04-01", temperature: 4, voltage: 12, rpm: 1200 },
    { date: "2024-04-02", temperature: 27, voltage: 11.5, rpm: 1250 },
    { date: "2024-04-03", temperature: 26, voltage: 11.2, rpm: 1300 },
    { date: "2024-04-04", temperature: 12, voltage: 12.1, rpm: 1350 },
    { date: "2024-04-05", temperature: 23, voltage: 11.8, rpm: 1400 },
    { date: "2024-04-06", temperature: 2, voltage: 11.3, rpm: 1450 },
  ];

  return (
    <div className="bg-bodyColor h-screen-2xl flex flex-col justify-center ">
      <div className="pt-10 max-w-screen-2xl mx-[300px] mr-2 h-full  ">
        <div className="text-white font-bold text-2xl">Time Line</div>
        <div className=" mt-10 flex flex-col gap-10  justify-center ">
          <div className="bg-sideNavcolor h-full ">
            <div className="flex justify-center text-white font-bold text-2xl pt-2">
              Machine One
            </div>
            <div style={{ width: "100%", height: 400 }}>
              <ResponsiveContainer>
                <ComposedChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid stroke="#ff7808" />
                  <XAxis dataKey="date" scale="band" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="temperature"
                    fill="#ff7808"
                    stroke="#8884d8"
                  />
                  <Bar dataKey="pv" barSize={20} fill="white" />
                  <Line type="monotone" dataKey="uv" stroke="#ff7808" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div style={{ width: "100%" }}>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  width={500}
                  height={200}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="voltage"
                    stroke="#ff7808"
                    fill="#ff7808"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  width={500}
                  height={200}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="rpm"
                    stroke="white "
                    fill="#ff7808"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
