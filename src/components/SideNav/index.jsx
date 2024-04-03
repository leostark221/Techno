import React, { useState } from "react";
import images from "../../services/images";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-y-0 left-0 bg-sidebar w-60 items-center  z-10 flex flex-col bg-sideNavcolor text-white">
      <div className="items-center gap-14 h-full mt-20 w-40 flex flex-col border-r-4 border-backgroundColor h-[70%]">
        <div className=" gap-3 cursor-pointer active:opacity-50 flex items-center justify-center  w-full mt-10 ">
          <div className="w-40 flex items-center-center justify-between">
            hello
            <img src={images.notSelected} alt="" className="h-5" />
          </div>
        </div>
        <div className=" gap-3 flex items-center justify-center cursor-pointer active:opacity-50  w-full">
          <div className="w-10  ">hello</div>
        </div>
        <div className=" gap-3 flex items-center justify-center  cursor-pointer active:opacity-50 w-full">
          <div className="w-10  ">hello</div>
        </div>
        <div className=" gap-3 flex items-center justify-center cursor-pointer active:opacity-50  w-full">
          <div className="w-10  ">hello</div>
        </div>
      </div>
    </div>
  );
}
