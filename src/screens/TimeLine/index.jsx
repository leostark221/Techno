import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
} from "recharts";
import { fetchLoggedInUsers } from "../../services/api/api";

export default function GraphTimeLine() {
  const [data, setData] = useState([]);
  const [selectedMachineId, setSelectedMachineId] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const machineID = localStorage.getItem("selectedMachineID");
    console.log("Retrieved Machine ID from Local Storage:", machineID);
    if (machineID) {
      setSelectedMachineId(machineID);
    }

    const apiData = async () => {
      try {
        const userId = localStorage.getItem("userID");
        console.log("Retrieved User ID from Local Storage:", userId);
        if (userId) {
          const incomingData = await fetchLoggedInUsers(userId);
          console.log("Fetched Data:", incomingData);
          setData(incomingData);
        }
      } catch (error) {
        console.log("THIS DATA NOT COMING :(", error);
      }
    };

    apiData();
  }, []);

  useEffect(() => {
    console.log("Selected Machine ID:", selectedMachineId);
    console.log("Data:", data);

    if (selectedMachineId) {
      const machine = data.find((machine) => {
        console.log("Comparing:", machine.machineID, "with", selectedMachineId);
        return machine.machineID == selectedMachineId;
      });
      console.log("Selected Machine:", machine);
      setFilteredData(machine ? machine.machineData : []);
    }
  }, [selectedMachineId, data]);

  console.log("Filtered Data:", filteredData);

  return (
    <div className="bg-bodyColor h-screen flex flex-col justify-center overflow-auto">
      <div className="ml-[90px] sm:ml-[245px] md:ml-[300px] mr-2 h-full pt-10 md:pr-10">
        <div className="text-black font-bold text-xl sm:text-3xl w-full flex justify-start">
          Time Line
        </div>
        <div className="mt-5 flex flex-col w-full">
          <div className="h-full flex w-full flex-col">
            <div className="flex justify-center text-black font-bold text-2xl pt-2">
              Machine {selectedMachineId}
            </div>
            <div
              className="bg-white h-[400px] flex flex-col items-center justify-center"
              style={{ width: "100%" }}
            >
              <div className="text-center text-2xl">Temp Based Time</div>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={filteredData}>
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
          </div>
          <div className="bg-white">
            <div className="flex justify-center text-black font-bold text-2xl pt-2">
              Time Line
            </div>

            {filteredData.length > 0 ? (
              <div className="h-[300px] sm:h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={filteredData}>
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
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
