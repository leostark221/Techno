import React, { useEffect, useState } from "react";
import { fetchLoggedInUsers } from "../../services/api/api";

export default function StatusMonitor() {
  const [data, setData] = useState([]);
  const [selectedMachineId, setSelectedMachineId] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const machineID = localStorage.getItem("selectedMachineID");
    if (machineID) {
      setSelectedMachineId(machineID);
    }

    const apiData = async () => {
      try {
        const userId = localStorage.getItem("userID");
        if (userId) {
          const incomingData = await fetchLoggedInUsers(userId);
          setData(incomingData);
        }
      } catch (error) {}
    };

    apiData();
  }, []);

  useEffect(() => {
    if (selectedMachineId) {
      const machine = data.find((machine) => {
        return machine.machineID == selectedMachineId;
      });
      setFilteredData(machine ? machine.machineData : []);
    }
  }, [selectedMachineId, data]);

  return (
    <div className="bg-bodyColor h-screen overflow-auto flex flex-col justify-center">
      <div className="pt-10 max-w-screen-2xl ml-[90px] sm:ml-[250px] lg:ml-[300px] mr-2 h-full">
        <div className="text-black font-bold text-xl sm:text-3xl w-full flex justify-start">
          Monitor Real Time
        </div>
        <div className="flex flex-col mt-20 gap-5">
          <div className="flex gap-4 md:flex-row flex-col">
            <div className="bg-white w-full flex justify-center items-center py-10 rounded-2xl">
              <div className="bg-backgroundColor gap-5 w-40 h-40 md:h-60 md:w-60 rounded-full border-2 border-selectedNav flex flex-col items-center">
                <div className="mt-4 md:mt-10 text-sm md:text-xl">Temp</div>
                <div className="text-4xl md:text-6xl text-selectedNav">
                  {filteredData.length > 0
                    ? `${filteredData[0]?.temp}°C`
                    : "Loading..."}
                </div>
              </div>
            </div>
            <div className="bg-white w-full flex justify-center items-center py-10 rounded-2xl">
              <div className="bg-backgroundColor gap-5 w-40 h-40 md:h-60 md:w-60 rounded-full border-2 border-selectedNav flex flex-col items-center">
                <div className="mt-4 md:mt-10 text-sm md:text-xl">Voltage</div>
                <div className="text-4xl md:text-6xl text-selectedNav">
                  {filteredData.length > 0
                    ? `${filteredData[0]?.volt}V`
                    : "Loading..."}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 md:flex-row flex-col">
            <div className="bg-white w-full flex justify-center items-center py-10 rounded-2xl">
              <div className="bg-backgroundColor gap-5 w-40 h-40 md:h-60 md:w-60 rounded-full border-2 border-selectedNav flex flex-col items-center">
                <div className="mt-4 md:mt-10 text-sm md:text-xl">RPM</div>
                <div className="text-4xl md:text-6xl text-selectedNav">
                  {filteredData.length > 0
                    ? `${filteredData[0]?.rpm}`
                    : "Loading..."}
                </div>
              </div>
            </div>
            <div className="bg-white w-full flex justify-center items-center py-10 rounded-2xl">
              <div className="bg-backgroundColor gap-5 w-40 h-40 md:h-60 md:w-60 rounded-full border-2 border-selectedNav flex flex-col items-center">
                <div className="mt-4 md:mt-10 text-sm md:text-xl">Current</div>
                <div className="text-4xl md:text-6xl text-selectedNav">
                  {filteredData.length > 0
                    ? `${filteredData[0]?.curr}`
                    : "Loading..."}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-5">
          <div className="flex gap-4 md:flex-row flex-col">
            <div className="bg-white w-full flex justify-center items-center py-10 rounded-2xl">
              <div className="bg-backgroundColor gap-5 w-40 h-40 md:h-60 md:w-60 rounded-full border-2 border-selectedNav flex flex-col items-center">
                <div className="mt-4 md:mt-10 text-sm md:text-xl">
                  Viberations
                </div>
                <div className="text-4xl md:text-6xl text-selectedNav">
                  {filteredData.length > 0
                    ? `${filteredData[0]?.vib}°C`
                    : "Loading..."}
                </div>
              </div>
            </div>
            <div className="bg-white w-full flex justify-center items-center py-10 rounded-2xl">
              <div className="bg-backgroundColor gap-5 w-40 h-40 md:h-60 md:w-60 rounded-full border-2 border-selectedNav flex flex-col items-center">
                <div className="mt-4 md:mt-10 text-sm md:text-xl">ncTemp</div>
                <div className="text-4xl md:text-6xl text-selectedNav">
                  {filteredData.length > 0
                    ? `${filteredData[0]?.nctemp}V`
                    : "Loading..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
