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
  LineChart,
  Brush,
  BarChart,
  Cell,
} from "recharts";

export default function GraphTimeLine() {
  const data = [
    { time: "01:00", temperature: 22, humidity: 42, voltage: 210 },
    { time: "02:00", temperature: 21, humidity: 52, voltage: 215 },
    { time: "03:00", temperature: 23, humidity: 63, voltage: 220 },
    { time: "04:00", temperature: 18, humidity: 23, voltage: 220 },
    { time: "05:00", temperature: 17, humidity: 63, voltage: 220 },
    { time: "06:00", temperature: 16, humidity: 12, voltage: 220 },
    { time: "07:00", temperature: 12, humidity: 63, voltage: 220 },
    { time: "08:00", temperature: 12, humidity: 5, voltage: 220 },
    { time: "09:00", temperature: 12, humidity: 4, voltage: 220 },
    { time: "10:00", temperature: 13, humidity: 63, voltage: 220 },
    { time: "11:00", temperature: 10, humidity: 63, voltage: 220 },
    { time: "12:00", temperature: 7, humidity: 2, voltage: 220 },
    { time: "01:00", temperature: 6, humidity: 56, voltage: 220 },
    { time: "02:00", temperature: 2, humidity: 23, voltage: 220 },
    { time: "03:00", temperature: -1, humidity: 23, voltage: 220 },
    // Additional data points...
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

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
    <div className="bg-bodyColor h-screen-2xl flex flex-col justify-center ">
      <div className="pt-10 max-w-screen-2xl mx-[300px] mr-2 h-full  ">
        <div className="text-black font-bold text-4xl w-full flex justify-center">
          Time Line
        </div>
        <div className=" mt-10 flex flex-col gap-10  justify-center ">
          <div className="bg-sideNavcolor h-full ">
            <div className="flex justify-center text-white font-bold text-2xl pt-2">
              Machine One
            </div>
            <div style={{ width: "100%", height: 400 }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="temperature" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div style={{ width: "100%" }}>
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
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="voltage"
                    onMouseEnter={(_, index, e) => {}}
                    activeShape={renderActiveShape}
                    labelLine={false}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={renderCustomTooltip} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
