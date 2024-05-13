import React, { PureComponent, useState } from "react";
import { useEffect } from "react";
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
  LineChart,
  Brush,
  BarChart,
  Cell,
  Scatter,
} from "recharts";
import { fetchData } from "../../services/api/api";

export default function GraphTimeLine() {
  const [data, setData] = useState([]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const apiData = async () => {
    try {
      const incomingData = await fetchData();
      setData(incomingData);
    } catch {
      console.log("THIS DATA NOT COMMING :(");
    }
  };

  useEffect(() => {
    apiData();
    console.log("THis is Data ---,.>", data);
  }, []);

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  };

  const renderCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "5px",
            border: "1px solid #ddd",
          }}
        >
          <p>{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-bodyColor h-screen flex flex-col justify-center overflow-auto  ">
      <div className="ml-[90px] sm:ml-[245px] md:ml-[300px] mr-2 h-full pt-10 md:pr-10  ">
        <div className="text-black font-bold text-xl sm:text-3xl w-full flex justify-start">
          Time Line
        </div>
        <div className=" mt-5 flex flex-col w-full  ">
          <div className=" h-full flex w-full  flex-col ">
            <div className="flex justify-center text-black font-bold text-2xl pt-2">
              Machine One
            </div>
            <div
              className="bg-white  h-[400px] flex flex-col items-center justify-center "
              style={{ width: "100%" }}
            >
              <div className="text-center text-2xl ">Temp Based Time</div>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={data}>
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="fulldate" />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    stroke="#8884d8"
                    label={{
                      value: "Temperature (°C)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#82ca9d"
                    label={{
                      value: "Voltage (V) / Current (A)",
                      angle: -90,
                      position: "insideRight",
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="nctemp"
                    stroke="#8884d8"
                    name="Non-contact Temp"
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="temp"
                    stroke="#82ca9d"
                    name="Contact Temp"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="volt"
                    stroke="#413ea0"
                    name="Voltage"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="curr"
                    stroke="#ffc658"
                    name="Current"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div
              className="bg-white h-[400px] flex items-center mt-4"
              style={{ width: "100%" }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="temperature" fill="#8884d8" />
                  <Bar dataKey="humidity" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div
              className="bg-white h-[400px] flex flex-col items-center justify-center
            mt-4"
            >
              {/* <ResponsiveContainer width="100%">
                <PieChart>
                  <Legend />
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="voltage"
                    onMouseEnter={(_, index, e) => {}}
                    activeShape={renderActiveShape}
                    labelLine={false}
                  >
                    {data?.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={renderCustomTooltip} />
                </PieChart>
              </ResponsiveContainer> */}
            </div>
          </div>
          <div className=" h-full flex w-full gap-5 flex-col mt-[4%] ">
            <div
              className="bg-white h-[400px] flex flex-col items-center justify-center "
              style={{ width: "100%" }}
            >
              <div className="text-center text-2xl ">
                Temp & voltage based Time
              </div>
              <ResponsiveContainer width="100%" height="100%">
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
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="voltage" barSize={20} fill="#413ea0" />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#ff7300"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div
              className="bg-white h-[400px] flex flex-col items-center justify-center mb-10"
              style={{ width: "100%" }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="temperature" fill="#8884d8" />
                  <Bar dataKey="humidity" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
