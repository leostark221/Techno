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
  RadialBarChart,
  RadialBar,
} from "recharts";

export default function Home() {
  const data = [
    { date: "2024-04-01", temperature: 4, voltage: 12, rpm: 1200 },
    { date: "2024-04-02", temperature: 27, voltage: 11.5, rpm: 1250 },
    { date: "2024-04-03", temperature: 26, voltage: 11.2, rpm: 1300 },
    { date: "2024-04-04", temperature: 12, voltage: 12.1, rpm: 1350 },
    { date: "2024-04-05", temperature: 23, voltage: 11.8, rpm: 1400 },
    { date: "2024-04-06", temperature: 2, voltage: 11.3, rpm: 1450 },
  ];
  const data2 = [
    { name: "Temp", value: 500 },
    { name: "Voltage", value: 300 },
    { name: "RPM", value: 200 },
  ];
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  return (
    <div className="bg-bodyColor h-screen flex flex-col justify-center ">
      <div className="pt-10 max-w-screen-2xl mx-[300px] mr-2 h-full  ">
        <div className="text-white font-bold text-2xl">Home</div>
        <div className=" mt-10 flex flex-col gap-10  justify-center ">
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
            <div className="text-white bg-sideNavcolor w-full gap-10 cursor-pointer active:opacity-50 h-96 flex flex-col justify-center">
              <div className="flex justify-center text-white font-bold text-2xl pt-2">
                Monitor
              </div>
              <div className="w-full flex  flex-col items-center ">
                <div className="bg-backgroundColor gap-5 w-60 rounded-full border-2 border-selectedNav flex flex-col  items-center h-60">
                  <div className="mt-10 text-xl">Temp</div>
                  <div className="text-6xl text-selectedNav  ">40C</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-sideNavcolor h-full ">
            <div className="flex justify-center text-white font-bold text-2xl pt-2">
              Time Line
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
                    stroke="white"
                  />
                  <Bar dataKey="temperature" barSize={20} fill="white" />
                  <Line type="monotone" dataKey="voltage" stroke="#ff7808" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
