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
    <div className="fixed inset-y-0 left-0 bg-sidebar  w-20 sm:w-60 items-center h-screen z-10 flex flex-col bg-sideNavcolor ">
      <div className="items-center  gap-6 h-full mt-4 sm:w-40 flex flex-col ">
        <img src={images.logo} alt="" />
        <div className=" gap-3 cursor-pointer active:opacity-50 flex items-center justify-center  w-full mt-10 ">
          <div
            className={
              activePath == "/"
                ? `sm:sm:w-40 p-2  border-2  rounded-lg flex items-center-center gap-2  bg-selectedNav text-white font-bold`
                : `sm:sm:w-40 p-2 flex items-center-center gap-2   text-baseText font-bold`
            }
            onClick={() => navigate("")}
          >
            <img
              src={activePath == "/" ? images.home : images.notSelectedhome}
              alt=""
              className="h-5 w-5"
            />
            <div className="hidden sm:flex">Home</div>
          </div>
        </div>
        <div className=" gap-3 cursor-pointer active:opacity-50 flex items-center justify-center  w-full mt-10 ">
          <div
            className={
              activePath == "/TimeLine"
                ? `sm:w-40 p-2 border-2 rounded-lg flex items-center-center gap-2  bg-selectedNav text-white font-bold`
                : `sm:w-40 p-2 flex items-center-center gap-2   text-baseText font-bold`
            }
            onClick={() => navigate("/TimeLine")}
          >
            <img
              src={
                activePath == "/TimeLine"
                  ? images.timeLine
                  : images.notSElectedtimeLine
              }
              alt=""
              className="h-5 w-5"
            />
            <div className="sm:flex hidden">Time Line</div>
          </div>
        </div>
        <div className=" gap-3 cursor-pointer active:opacity-50 flex items-center justify-center  w-full mt-10 ">
          <div
            className={
              activePath == "/monitor"
                ? `sm:w-40 p-2 border-2 rounded-lg flex items-center-center gap-2  bg-selectedNav text-white font-bold`
                : `sm:w-40 p-2 flex items-center-center gap-2   text-baseText font-bold`
            }
            onClick={() => navigate("/monitor")}
          >
            <img
              src={
                activePath == "/monitor"
                  ? images.monitor
                  : images.notSelectedmonitor
              }
              alt=""
              className="h-5 w-5"
            />
            <div className="sm:flex hidden">Monitor</div>
          </div>
        </div>
        <div className="gap-3 cursor-pointer active:opacity-50 flex items-center justify-center  w-full mt-10">
          <div
            className={
              activePath == "/setting"
                ? `sm:w-40 p-2 border-2 rounded-lg flex items-center-center gap-2  bg-selectedNav text-white font-bold`
                : `sm:w-40 p-2 flex items-center-center gap-2   text-baseText font-bold`
            }
            onClick={() => navigate("/setting")}
          >
            <img
              src={
                activePath == "/setting"
                  ? images.settings
                  : images.notSelectedsettings
              }
              alt=""
              className="h-5 w-5"
            />
            <div className="sm:flex hidden">Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
