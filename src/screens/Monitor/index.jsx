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
    <div className="bg-bodyColor h-screen overflow-auto flex flex-col justify-center ">
      <div className="pt-10 max-w-screen-2xl ml-[90px] sm:ml-[250px] lg:ml-[300px] mr-2 h-full  ">
        <div className="text-black font-bold text-xl sm:text-3xl w-full flex justify-start">
          Monitor Real Time
        </div>
        <div className="flex flex-col mt-20 gap-5">
          <div className="flex gap-4 md:flex-row flex-col">
            <div className="bg-white w-full flex  justify-center items-center py-10 rounded-2xl ">
              <div className="bg-backgroundColor gap-5  w-40 h-40  md:h-60  md:w-60 rounded-full border-2 border-selectedNav flex flex-col  items-center ">
                <div className="mt-4 md:mt-10 text-sm md:text-xl">Temp</div>
                <div className="text-4xl md:text-6xl text-selectedNav  ">
                  40C
                </div>
              </div>
            </div>
            <div className="bg-white w-full flex justify-center items-center py-10 rounded-2xl">
              <div className="bg-backgroundColor gap-5  w-40 h-40  md:h-60  md:w-60 rounded-full border-2 border-selectedNav flex flex-col  items-center ">
                <div className="mt-4 md:mt-10 text-sm md:text-xl">Voltage</div>
                <div className="text-4xl md:text-6xl text-selectedNav ">
                  100AM
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-4 md:flex-row flex-col">
            <div className="bg-white w-full flex justify-center items-center py-10 rounded-2xl">
              <div className="bg-backgroundColor gap-5  w-40 h-40  md:h-60  md:w-60 rounded-full border-2 border-selectedNav flex flex-col  items-center ">
                <div className="mt-4 md:mt-10 text-sm md:text-xl">RPM</div>
                <div className="text-4xl md:text-6xl text-selectedNav ">40</div>
              </div>
            </div>
            <div className="bg-white w-full flex justify-center items-center py-10 rounded-2xl">
              <div className="bg-backgroundColor gap-5  w-40 h-40  md:h-60  md:w-60 rounded-full border-2 border-selectedNav flex flex-col  items-center ">
                <div className="mt-4 md:mt-10 text-sm md:text-xl">Run Time</div>
                <div className="text-4xl md:text-6xl text-selectedNav ">
                  40m
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
