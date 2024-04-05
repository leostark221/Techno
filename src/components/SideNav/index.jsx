import React, { useState } from "react";
import images from "../../services/images";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Home");

  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className="fixed inset-y-0 left-0 bg-sidebar w-60 items-center  z-10 flex flex-col bg-sideNavcolor ">
      <div className="items-center gap-14 h-full mt-20 w-40 flex flex-col border-r-4 border-backgroundColor h-[70%]">
        <div className=" gap-3 cursor-pointer active:opacity-50 flex items-center justify-center  w-full mt-10 ">
          <div
            className={
              activePath == "/"
                ? `w-40 p-2  border-2  rounded-lg flex items-center-center gap-2  bg-selectedNav text-white font-bold`
                : `w-40 p-2 flex items-center-center gap-2   text-white font-bold`
            }
            onClick={() => navigate("")}
          >
            <img
              src={activePath == "/" ? images.home : images.notSelectedhome}
              alt=""
              className="h-5 w-5"
            />
            Home
          </div>
        </div>
        <div className=" gap-3 cursor-pointer active:opacity-50 flex items-center justify-center  w-full mt-10 ">
          <div
            className={
              activePath == "/TimeLine"
                ? `w-40 p-2 border-2 rounded-lg flex items-center-center gap-2  bg-selectedNav text-white font-bold`
                : `w-40 p-2 flex items-center-center gap-2   text-white font-bold`
            }
            onClick={() => navigate("/TimeLine")}
          >
            <img
              src={
                selected == "TimeLine"
                  ? images.timeLine
                  : images.notSElectedtimeLine
              }
              alt=""
              className="h-5 w-5"
            />
            Time Line
          </div>
        </div>
        <div className=" gap-3 cursor-pointer active:opacity-50 flex items-center justify-center  w-full mt-10 ">
          <div
            className={
              activePath == "/monitor"
                ? `w-40 p-2 border-2 rounded-lg flex items-center-center gap-2  bg-selectedNav text-white font-bold`
                : `w-40 p-2 flex items-center-center gap-2   text-white font-bold`
            }
            onClick={() => navigate("/monitor")}
          >
            <img
              src={
                selected == "monitor"
                  ? images.monitor
                  : images.notSelectedmonitor
              }
              alt=""
              className="h-5 w-5"
            />
            Monitor
          </div>
        </div>
        <div className="gap-3 cursor-pointer active:opacity-50 flex items-center justify-center  w-full mt-10">
          <div
            className={
              activePath == "/setting"
                ? `w-40 p-2 border-2 rounded-lg flex items-center-center gap-2  bg-selectedNav text-white font-bold`
                : `w-40 p-2 flex items-center-center gap-2   text-white font-bold`
            }
            onClick={() => navigate("/setting")}
          >
            <img
              src={
                selected == "Settings"
                  ? images.settings
                  : images.notSelectedsettings
              }
              alt=""
              className="h-5 w-5"
            />
            Settings
          </div>
        </div>
      </div>
    </div>
  );
}
