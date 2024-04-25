import React, { PureComponent } from "react";
import { useNavigate } from "react-router-dom";
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
    {
      time: "12:00",
      temperature: 20,
      humidity: 30,
      voltage: 240,
    },
    {
      time: "13:00",
      temperature: 22,
      humidity: 35,
      voltage: 230,
    },
    {
      time: "14:00",
      temperature: 18,
      humidity: 40,
      voltage: 220,
    },
    {
      time: "15:00",
      temperature: 21,
      humidity: 32,
      voltage: 250,
    },
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

  const navigate = useNavigate();

  // const naviagte = useNavigate();

  return (
    <div className="bg-bodyColor h-screen flex flex-col justify-center ">
      <div className="pt-10 max-w-screen-2xl mx-[300px] mr-2 h-full  ">
        <div className="text-black font-bold text-4xl w-full flex justify-center">
          Home{" "}
        </div>
        <div className=" mt-10 flex flex-col gap-10  justify-center ">
          <div className="flex flex w-full justify-between gap-10">
            <div className="flex-col px-10  bg-content w-full h-96 pt-4 flex items-center ">
              <div className="text-2xl">Connected Machines </div>
              <div className="gap-4 flex flex-col  w-full mt-10">
                <div className="flex h-10 items-center  justify-between ">
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
            <div className="text-white bg-content w-full gap-10  h-96 flex flex-col justify-center">
              <div className="flex justify-center text-black font-bold text-2xl pt-2">
                Monitor
              </div>
              <div className="w-full flex  flex-col items-center ">
                <div
                  className="bg-backgroundColor gap-5 w-60 rounded-full border-2 border-selectedNav flex flex-col
                cursor-pointer active:opacity-50  items-center h-60"
                  onClick={() => navigate("/monitor")}
                >
                  <div className="mt-10 text-xl">Temp</div>
                  <div className="text-6xl text-selectedNav">40C</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-content h-full ">
            <div className="flex justify-center text-white font-bold text-2xl pt-2">
              Time Line
            </div>
            <div style={{ width: "100%", height: 400 }}>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                  data={data}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="time" scale="band" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />

                  <Bar
                    dataKey="voltage"
                    barSize={20}
                    fill="#413ea0"
                    yAxisId="right"
                  />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#8884d8"
                    yAxisId="left"
                  />
                  <Line
                    type="monotone"
                    dataKey="humidity"
                    stroke="#82ca9d"
                    dot={false}
                    yAxisId="left"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
