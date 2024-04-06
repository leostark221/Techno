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

export default function StatusMonitor() {
  const data = [
    {
      Temp: "42",
      Voltage: "40",
      RPM: "40",
      runtime: "40m",
    },
  ];

  return (
    <div className="bg-bodyColor h-screen flex flex-col justify-center ">
      <div className="pt-10 max-w-screen-2xl mx-[300px] mr-2 h-full  ">
        <div className="text-white font-bold text-2xl">Monitor Real Time</div>
        <div className=" mt-10 flex flex-col gap-10  justify-center ">
          <div className="bg-sideNavcolor h-[800px] w-full  flex flex-col ">
            <div className="flex justify-center text-white font-bold text-2xl pt-2">
              Machine One
            </div>
            <div className="items-center text-white flex justify-center h-full gap-32">
              <div className="bg-backgroundColor gap-5 w-60 rounded-full border-2 border-selectedNav flex flex-col  items-center h-60">
                <div className="mt-10 text-xl">Temp</div>
                <div className="text-6xl text-selectedNav  ">40C</div>
              </div>

              <div className="bg-backgroundColor gap-5 w-60 rounded-full border-2 border-selectedNav flex flex-col  items-center h-60">
                <div className="mt-10 text-xl">Voltage</div>
                <div className="text-6xl text-selectedNav ">100AM</div>
              </div>

              <div className="bg-backgroundColor gap-5 w-60 rounded-full border-2 border-selectedNav flex flex-col  items-center h-60">
                <div className="mt-10 text-xl">RPM</div>
                <div className="text-6xl text-selectedNav ">40</div>
              </div>

              <div className="bg-backgroundColor gap-5 w-60 rounded-full border-2 border-selectedNav flex flex-col  items-center h-60">
                <div className="mt-10 text-xl">Run Time</div>
                <div className="text-6xl text-selectedNav ">40m</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
