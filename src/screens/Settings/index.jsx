import React, { useState } from "react";

export default function Settings() {
  const [select, setSelected] = useState("");
  const [locked, setLocked] = useState(true);

  return (
    <div className="bg-bodyColor h-screen flex flex-col justify-center ">
      <div className="pt-10 max-w-screen-2xl mx-[300px] mr-2 h-full  ">
        <div className="text-white font-bold text-2xl">Settings</div>
        <div className=" mt-10 flex flex-col gap-10  justify-center ">
          <div className=" h-[800px] w-full  flex flex-col ">
            <div className="flex justify-center text-white font-bold text-2xl pt-2">
              Profile
            </div>
            <div className="mt-10 h-full flex justify-between">
              <div className="w-96 h-full bg-sideNavcolor rounded-2xl flex flex-col p-20 items-center justify-evenly   ">
                <div
                  className={
                    select === "profile"
                      ? ` text-orange-500  text-2xl cursor-pointer active:opacity-50`
                      : `text-white  text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("profile")}
                >
                  Manage Profile
                </div>
                {/* <div
                  className={
                    select === "machine"
                      ? ` text-orange-500  text-2xl cursor-pointer active:opacity-50`
                      : `text-white   text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("machine")}
                >
                  Manage Machines
                </div> */}
                <div
                  className={
                    select === "delete"
                      ? ` text-orange-500 text-2xl cursor-pointer active:opacity-50`
                      : `text-white  text-2xl cursor-pointer active:opacity-50`
                  }
                  onClick={() => setSelected("delete")}
                >
                  Delete Account
                </div>
              </div>
              <div className="w-[70%] bg-sideNavcolor  flex flex-col text-white p-10 rounded-2xl">
                {select === "profile" ? (
                  <div>
                    <div className="mt-10 flex gap-4 ">
                      <input
                        type="text"
                        className="w-full pl-6 bg-transparent focus:outline-none border focus-outline:none border-orange-500 h-16 rounded-2xl"
                        placeholder="John  jones"
                        disabled={locked}
                      />
                      <input
                        type="password"
                        className="w-full pl-6 bg-transparent focus:outline-none w-full bg-transparent border border-orange-500 h-16 rounded-2xl"
                        placeholder="***********"
                        disabled={locked}
                      />
                    </div>
                    <div className="mt-10 flex gap-4 ">
                      <input
                        type="text"
                        className="w-full pl-6 bg-transparent focus:outline-none border border-orange-500 h-16 rounded-2xl"
                        placeholder="Change Username"
                      />
                      <input
                        type="password"
                        className="w-full pl-6 bg-transparent focus:outline-none w-full bg-transparent border border-orange-500 h-16 rounded-2xl"
                        placeholder="Change Password"
                      />
                    </div>
                    <div className="mt-10 flex gap-4 ">
                      <input
                        type="password"
                        className="w-[49%] pl-6 bg-transparent focus:outline-none w-full bg-transparent border border-orange-500 h-16 rounded-2xl"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="w-full  flex items-center justify-center mt-80">
                      <div className="border cursor-pointer active:opacity-50 border-orange-500 w-40 h-14 flex items-center justify-center">
                        Save
                      </div>
                    </div>
                  </div>
                ) : select === "delete" ? (
                  <div className="mt-10 ">
                    <div className="text-2xl text-orange-500 cursor-pointer active:opacity-50">
                      Delete Account
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
