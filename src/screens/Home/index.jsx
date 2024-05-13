import React, { PureComponent, useEffect, useState } from "react";
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
import { fetchData } from "../../services/api/api";

export default function Home() {
  const [data, setData] = useState([{}]);
  const navigate = useNavigate();

  const apiData = async () => {
    try {
      const incomingData = await fetchData();
      setData(incomingData);
    } catch {
      console.log("NO INCOMING DATA");
    }
  };

  const [machineStatus, setMachineStatus] = useState([
    {
      name: "Machine One",
      stat: {
        connected: "connected",
        notConnected: "disconnected",
      },
    },
    {
      name: "Machine Two",
      stat: {
        connected: "connected",
        notConnected: "disconnected",
      },
    },
    {
      name: "Machine Three",
      stat: {
        connected: "connected",
        notConnected: "disconnected",
      },
    },
    {
      name: "Machine Four",
      stat: {
        connected: "connected",
        notConnected: "disconnected",
      },
    },
    {
      name: "Machine Five",
      stat: {
        connected: "connected",
        notConnected: "disconnected",
      },
    },
    {
      name: "Machine Six",
      stat: {
        connected: "connected",
        notConnected: "disconnected",
      },
    },
    {
      name: "Machine Seven",
      stat: {
        connected: "connected",
        notConnected: "disconnected",
      },
    },
    {
      name: "Machine Eight",
      stat: {
        connected: "connected",
        notConnected: "disconnected",
      },
    },
  ]);

  useEffect(() => {
    apiData();
    console.log("DATA CONNECTED!! ---->", data);
  }, []);

  return (
    <div className="bg-backgroundColor min-h-screen overflow-auto  max-w-screen flex flex-col justify-center sm:pr-10   ">
      <div className=" ml-[90px] sm:ml-[270px] md:ml-[300px] mr-2 h-full ">
        <div className="text-black font-bold text-xl sm:text-3xlstart w-full flex justify- pt-10">
          Home
        </div>
        <div className="mt-10 flex flex-col gap-10  justify-center">
          <div className="flex xl:flex-row flex-col w-full justify-between gap-10">
            <div className="flex-col bg-content w-full  flex items-center ">
              <div className="text-md sm:text-lg md:text-2xl border-b w-full text-center py-2">
                Connected Machines
              </div>
              <div className="flex flex-col w-full ">
                <div
                  className="flex h-10 items-center px-1 sm:px-10 bg-selectedNav mx-2 sm:mx-4 text-white font-bold text-xs sm:text-sm  md:text-base xl:text-xl rounded-lg
                  justify-between "
                >
                  <div>Machine Name</div>
                  <div>Machine Status</div>
                </div>
                <div className="w-full px-2 sm:px-10 overflow-scroll max-h-[274px]">
                  {machineStatus.map((item, index) => (
                    <div
                      key={index}
                      className="flex h-10 text-xs sm:text-sm md:text-base items-center border px-4 py-2 justify-between hover:bg-selectedNav cursor-pointer hover:text-white mt-3"
                    >
                      <div className="">{item?.name}</div>
                      <div className="">
                        {item.stat.connected ? "Connected" : "Disconnected"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className=" bg-content w-full gap-10  h-96 flex flex-col justify-center">
              <div className="flex  justify-center text-black font-bold text-2xl pt-2">
                Monitor
              </div>
              <div className="w-full flex  flex-col items-center ">
                <div
                  className="bg-backgroundColor gap-2 sm:gap-5  w-40 h-40 sm:w-60 sm:h-60 rounded-full border-2 border-selectedNav flex flex-col
                cursor-pointer active:opacity-50  items-center "
                  onClick={() => navigate("/monitor")}
                >
                  <div className="mt-10 sm:text-xl">Temp</div>
                  <div className="text-4xl sm:text-6xl text-selectedNav">
                    {data.length > 0
                      ? `${data[data.length - 1]?.temp}°C`
                      : "Loading..."}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white ">
            <div className="flex justify-center text-black font-bold text-2xl pt-2 ">
              Time Line
            </div>

            {data.length > 0 ? (
              <div className="h-[300px] sm:h-[500px] ">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={data}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="fulltime" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      stroke="#82ca9d"
                    />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="volt"
                      barSize={20}
                      fill="#413ea0"
                      yAxisId="right"
                    />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="#8884d8"
                      yAxisId="left"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            ) : (
              // <div>Hello</div>
              <div>loading </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
