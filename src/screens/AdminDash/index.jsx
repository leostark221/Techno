import React, { useEffect, useState } from "react";
import {
  assignMachinesToUser,
  fetchUsers,
  uploadUser,
  deleteUser,
  deleteMachine,
} from "../../services/api/api";

export default function Admin() {
  const [select, setSelected] = useState("adduser");
  const [userData, setUsersData] = useState([]);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [m_id, setM_id] = useState("");
  const [userId, setUserId] = useState("");
  const [machineId, setMachineId] = useState("");
  const [machineUsername, setMachineUsername] = useState("");

  const userDataShow = async () => {
    try {
      const fetchedData = await fetchUsers();
      if (fetchedData && Array.isArray(fetchedData.records)) {
        setUsersData(fetchedData.records);
      } else {
        throw new Error("Data is not in expected format");
      }
    } catch (error) {
      setError("Failed to fetch user data: " + error.message);
      console.error("Error fetching user data:", error);
    }
  };

  const handleRegisterUser = async () => {
    try {
      const response = await uploadUser({ username, password });
      alert("User registered successfully!");
      userDataShow(); // Refresh the user data
    } catch (error) {
      console.error("Registration Failed:", error.response.data);
      alert("Registration failed: " + error.response.data.message);
    }
  };

  const handleAssignMachines = async () => {
    const ids = m_id.split(",").map((id) => id.trim());
    const names = machineUsername.split(",").map((name) => name.trim());

    const machines = ids.map((id, index) => ({
      id: id,
      machine_name: names[index] || "", // Fallback to empty string if no name
    }));

    try {
      const response = await assignMachinesToUser(userId, machines);
      alert("Machines assigned successfully!");
    } catch (error) {
      console.error(
        "Assignment Failed:",
        error.response?.data || "No response data"
      );
      alert(
        "Assignment failed: " +
          (error.response?.data?.message || "No error message")
      );
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await deleteUser(userId);
      alert("User deleted successfully!");
      userDataShow(); // Refresh the user data
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed: " + error.message);
    }
  };

  const handleDeleteMachine = async (machineId) => {
    try {
      const response = await deleteMachine(machineId);
      alert("Machine deleted successfully!");
      userDataShow(); // Refresh the user data
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed: " + error.message);
    }
  };

  useEffect(() => {
    userDataShow();
  }, []);

  return (
    <div className="bg-bodyColor h-screen flex flex-col justify-center overflow-auto">
      <div className="pt-10 max-w-screen-2xl ml-[84px] sm:ml-[249px] xl:mx-[260px] lg:mr-2 h-full">
        <div className="mt-10 flex flex-col  justify-center">
          <div className="h-[800px] w-full flex flex-col">
            <div className="text-black font-bold text-4xl w-full flex justify-center">
              Configure Accounts
            </div>
            <div className="mt-10 h-full flex justify-between">
              <div className="w-12 p-14 lg:w-96 h-full bg-sideNavcolor rounded-2xl flex flex-col lg:p-20 items-center justify-evenly shadow-[0_3px_10px_rgb(0,0,0,0.2)] mr-4">
                <div
                  className={
                    select === "adduser"
                      ? `text-selectedNav text-lg lg:text-2xl cursor-pointer active:opacity-50`
                      : `text-black text-lg lg:text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("adduser")}
                >
                  Add Users
                </div>
                <div
                  className={
                    select === "assignMachines"
                      ? `text-selectedNav text-lg lg:text-2xl cursor-pointer active:opacity-50`
                      : `text-black text-lg lg:text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("assignMachines")}
                >
                  Assign Machines
                </div>
                <div
                  className={
                    select === "profile"
                      ? `text-selectedNav text-lg lg:text-2xl cursor-pointer active:opacity-50`
                      : `text-black text-lg lg:text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("profile")}
                >
                  View Users
                </div>
                <div
                  className={
                    select === "delete"
                      ? `text-selectedNav text-lg lg:text-2xl cursor-pointer active:opacity-50`
                      : `text-black text-lg lg:text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("delete")}
                >
                  Delete Account
                </div>
              </div>
              <div className="w-full lg:w-[70%] bg-sideNavcolor flex flex-col text-black p-10 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                {select === "profile" ? (
                  <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full max-h-[100%] overflow-auto items-center flex flex-col">
                    <div className="flex h-10 text-xs sm:text-sm md:text-base items-center border px-4 py-2 justify-between w-[80%] mt-3">
                      <div>Machine ID</div>
                      <div>Machine Name</div>
                      <div>User Id</div>
                      <div>Username</div>
                    </div>
                    {userData.map((item, index) => (
                      <div
                        key={index}
                        className="flex h-10 text-xs sm:text-sm md:text-base items-center border px-4 py-2 justify-between w-[80%] hover:bg-selectedNav cursor-pointer hover:text-white mt-3"
                      >
                        <div>{item?.machine_id}</div>
                        <div>{item?.machine_name}</div>
                        <div>{item?.user_id}</div>
                        <div>{item?.username}</div>
                      </div>
                    ))}
                  </div>
                ) : select === "delete" ? (
                  <div className="mt-10">
                    <div className="text-2xl text-selectedNav cursor-pointer active:opacity-50">
                      Delete Account
                    </div>
                    <div className="w-full flex flex-col gap-4 pt-5">
                      <input
                        type="text"
                        className="bg-transparent border pl-4 rounded-3xl h-10 border-selectedNav w-full focus:outline-none"
                        placeholder="Enter User ID to delete"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                      />
                      <button
                        onClick={() => handleDeleteUser(userId)}
                        className="bg-red-500 text-white p-2 rounded"
                      >
                        Delete User
                      </button>
                    </div>
                    <div className="w-full flex flex-col gap-4 pt-5">
                      <div className="flex">
                        <input
                          type="text"
                          className="bg-transparent border pl-4 rounded-3xl h-10 border-selectedNav w-full focus:outline-none"
                          placeholder="Enter Machine ID to delete"
                          value={machineId}
                          onChange={(e) => setMachineId(e.target.value)}
                        />
                      </div>
                      <button
                        onClick={() => handleDeleteMachine(machineId)}
                        className="bg-red-500 text-white p-2 rounded"
                      >
                        Delete Machine
                      </button>
                    </div>
                  </div>
                ) : select === "adduser" ? (
                  <div className="mt-10">
                    <div className="text-2xl text-selectedNav cursor-pointer active:opacity-50">
                      Add Users
                    </div>
                    <div className="w-full flex lg:flex-row flex-col gap-4 pt-5">
                      <input
                        type="text"
                        className="bg-transparent border pl-4 rounded-3xl h-10 border-selectedNav w-full focus:outline-none"
                        placeholder="Add Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <input
                        type="password"
                        className="bg-transparent h-10 pl-4 border border-selectedNav w-full focus:outline-none rounded-3xl"
                        placeholder="Add password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex w-full items-center justify-center">
                      <div
                        className="mt-40 flex items-center justify-center bg-selectedNav rounded-xl cursor-pointer active:opacity-50 text-white h-10 w-28"
                        onClick={handleRegisterUser}
                      >
                        Submit
                      </div>
                    </div>
                  </div>
                ) : select === "assignMachines" ? (
                  <div className="mt-10">
                    <div className="text-2xl text-selectedNav cursor-pointer active:opacity-50">
                      Assign Machines
                    </div>
                    <div className="w-full flex lg:flex-row flex-col  gap-4 pt-5">
                      <input
                        type="text"
                        className="bg-transparent border pl-4 rounded-3xl h-10 border-selectedNav w-full focus:outline-none"
                        placeholder="Add User Id"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                      />
                      <input
                        type="text"
                        className="bg-transparent h-10 pl-4 border border-selectedNav w-full focus:outline-none rounded-3xl"
                        placeholder="Enter Machine Id"
                        value={m_id}
                        onChange={(e) => setM_id(e.target.value)}
                      />
                      <input
                        type="text"
                        className="bg-transparent h-10 pl-4 border border-selectedNav w-full focus:outline-none rounded-3xl"
                        placeholder="machine Username"
                        value={machineUsername}
                        onChange={(e) => setMachineUsername(e.target.value)}
                      />
                    </div>
                    <div className="flex w-full items-center justify-center">
                      <div
                        className="mt-40 flex items-center justify-center bg-selectedNav rounded-xl cursor-pointer active:opacity-50 text-white h-10 w-28"
                        onClick={handleAssignMachines}
                      >
                        Submit
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
