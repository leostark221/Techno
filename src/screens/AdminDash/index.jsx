import React, { useEffect, useState } from "react";
import {
  assignMachinesToUser,
  fetchUsers,
  signupUser,
  uploadUser,
} from "../../services/api/api";

export default function Admin() {
  const [select, setSelected] = useState("adduser");
  const [locked, setLocked] = useState(true);
  const [userData, setUsersData] = useState([]);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [m_id, setM_id] = useState("");
  const [userId, setUserId] = useState("");
  const [machineUsername, setMachineUsername] = useState("");

  const userDataShow = async () => {
    try {
      const fetchedData = await fetchUsers();
      if (fetchedData && Array.isArray(fetchedData.records)) {
        // Ensure fetchedData.records is an array
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
      console.log("Registration Success:", response.data);
      alert("User registered successfully!");
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
      console.log("Assignment Success:", response.data);
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

  useEffect(() => {
    userDataShow();
    console.log(userData);
  }, []);

  return (
    <div className="bg-bodyColor h-screen flex flex-col justify-center overflow-auto ">
      <div className="pt-10 max-w-screen-2xl mx-[300px] mr-2 h-full  ">
        <div className=" mt-10 flex flex-col gap-10  justify-center ">
          <div className=" h-[800px] w-full  flex flex-col ">
            <div className="text-black font-bold text-4xl w-full flex justify-center">
              Configure Accounts
            </div>
            <div className="mt-10 h-full flex justify-between">
              <div className="w-96 h-full bg-sideNavcolor rounded-2xl flex flex-col p-20 items-center justify-evenly shadow-[0_3px_10px_rgb(0,0,0,0.2)] mr-4   ">
                <div
                  className={
                    select === "adduser"
                      ? ` text-selectedNav  text-2xl cursor-pointer active:opacity-50`
                      : `text-black  text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("adduser")}
                >
                  Add Users
                </div>
                <div
                  className={
                    select === "assignMachines"
                      ? ` text-selectedNav text-2xl cursor-pointer active:opacity-50`
                      : `text-black  text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("assignMachines")}
                >
                  Assign Machines
                </div>
                <div
                  className={
                    select === "profile"
                      ? ` text-selectedNav  text-2xl cursor-pointer active:opacity-50`
                      : `text-black  text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("profile")}
                >
                  View Users
                </div>
                <div
                  className={
                    select === "delete"
                      ? ` text-selectedNav text-2xl cursor-pointer active:opacity-50`
                      : `text-black  text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("delete")}
                >
                  Delete Account
                </div>
              </div>
              <div
                className="w-[70%] bg-sideNavcolor  flex flex-col text-black p-10 rounded-2xl
              shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
                {select === "profile" ? (
                  <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full max-h-[100%] overflow-auto items-center  flex flex-col">
                    <div className="flex h-10 text-xs sm:text-sm md:text-base items-center border px-4 py-2 justify-between w-[80%]  mt-3">
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
                  <div className="mt-10 ">
                    <div className="text-2xl text-selectedNav cursor-pointer active:opacity-50">
                      Delete Account
                    </div>
                  </div>
                ) : select === "adduser" ? (
                  <div className="mt-10 ">
                    <div className="text-2xl text-selectedNav cursor-pointer active:opacity-50">
                      Add Users
                    </div>
                    <div className="w-full flex gap-4 pt-5">
                      <input
                        type="text"
                        className="bg-transparent  border pl-4 rounded-3xl h-10 border-selectedNav w-full focus:outline-none"
                        placeholder="Add Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <input
                        type="text"
                        className="bg-transparent h-10 pl-4   border border-selectedNav w-full focus:outline-none rounded-3xl"
                        placeholder="Enter Machine Id"
                        value={m_id}
                        onChange={(e) => setM_id(e.target.value)}
                      />
                      <input
                        type="password"
                        className="bg-transparent h-10 pl-4   border border-selectedNav w-full focus:outline-none rounded-3xl"
                        placeholder="Add password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex  w-full items-center justify-center">
                      <div
                        className="mt-40 flex items-center justify-center bg-selectedNav rounded-xl cursor-pointer active:opacity-50 text-white h-10 w-28 "
                        onClick={handleRegisterUser}
                      >
                        Submit
                      </div>
                    </div>
                  </div>
                ) : select === "assignMachines" ? (
                  <div className="mt-10 ">
                    <div className="text-2xl text-selectedNav cursor-pointer active:opacity-50">
                      Add Users
                    </div>
                    <div className="w-full flex gap-4 pt-5">
                      <input
                        type="text"
                        className="bg-transparent  border pl-4 rounded-3xl h-10 border-selectedNav w-full focus:outline-none"
                        placeholder="Add User Id"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                      />
                      <input
                        type="text"
                        className="bg-transparent h-10 pl-4   border border-selectedNav w-full focus:outline-none rounded-3xl"
                        placeholder="Enter Machine Id"
                        value={m_id}
                        onChange={(e) => setM_id(e.target.value)}
                      />
                      <input
                        type="text"
                        className="bg-transparent h-10 pl-4   border border-selectedNav w-full focus:outline-none rounded-3xl"
                        placeholder="machine Username"
                        value={machineUsername}
                        onChange={(e) => setMachineUsername(e.target.value)}
                      />
                    </div>
                    <div className="flex  w-full items-center justify-center">
                      <div
                        className="mt-40 flex items-center justify-center bg-selectedNav rounded-xl cursor-pointer active:opacity-50 text-white h-10 w-28 "
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
