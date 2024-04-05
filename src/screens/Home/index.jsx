import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";

export default function Home() {
  const data = [
    { date: "2024-04-01", temperature: 100, voltage: 12, rpm: 1200 },
    { date: "2024-04-02", temperature: 500, voltage: 11.5, rpm: 1550 },
    { date: "2024-04-03", temperature: 26, voltage: 11.2, rpm: 1600 },
    { date: "2024-04-04", temperature: 24, voltage: 12.1, rpm: 1620 },
    { date: "2024-04-05", temperature: 600, voltage: 11.8, rpm: 1580 },
    { date: "2024-04-06", temperature: 25, voltage: 11.3, rpm: 1550 },
  ];

  const data2 = [
    { date: "2024-04-01", temperature: 100, voltage: 12, rpm: 1200 },
    { date: "2024-04-02", temperature: 500, voltage: 11.5, rpm: 1550 },
    { date: "2024-04-03", temperature: 26, voltage: 11.2, rpm: 1600 },
    { date: "2024-04-04", temperature: 24, voltage: 12.1, rpm: 1620 },
    { date: "2024-04-05", temperature: 600, voltage: 11.8, rpm: 1580 },
    { date: "2024-04-06", temperature: 25, voltage: 11.3, rpm: 1550 },
  ];

  return (
    <div className="bg-bodyColor  h-screen">
      <div className="pt-10 max-w-screen-xl mx-auto  ">
        <div className="text-white font-bold text-2xl">Home</div>
        <div className=" mt-10 flex flex-col gap-10 ">
          <div className="flex flex w-full justify-between gap-10">
            <div className="flex-col px-10 text-white bg-sideNavcolor w-full h-96 pt-4 flex items-center ">
              <div className="text-2xl">Connected Machines </div>
              <div className="gap-4 flex flex-col  w-full mt-10">
                <div className="flex h-10 items-center  justify-between bg-orange-500">
                  <div>Machine Name</div>
                  <div>Machine Status</div>
                </div>
                <div className="flex h-10 items-center  justify-between">
                  <div className="">Machine One</div>
                  <div className="">Connected </div>
                </div>
                <div className="flex h-10 items-center  justify-between">
                  <div className="">Machine two</div>
                  <div className="">Connected </div>
                </div>
                <div className="flex h-10 items-center  justify-between">
                  <div className="">Machine three</div>
                  <div className="">Connected </div>
                </div>
                <div className="flex h-10 items-center  justify-between">
                  <div className="">Machine four</div>
                  <div className="">Connected </div>
                </div>
              </div>
            </div>
            <div className="text-white bg-sideNavcolor w-full h-96 flex justify-center">
              Monitor
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie dataKey="date" data={data2} fill="#8884d8" label />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="bg-sideNavcolor h-full ">
            <div className="flex justify-center text-white font-bold text-2xl pt-2">
              Time Line
            </div>
            <div style={{ width: "100%", height: "100%" }}>
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
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="temperature"
                    fill="#ff7808"
                    stroke="#ff7808"
                  />
                  <Bar dataKey="voltage" barSize={20} fill="#82ca9d" />
                  <Line type="monotone" dataKey="rpm" stroke="#8884d8" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
