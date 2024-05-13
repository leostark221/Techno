import React, { useState, createContext, useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideNav from "../../components/SideNav";

const Layout = () => {
  const ModalContext = createContext();

  const location = useLocation();

  const activePath = location.pathname;

  return (
    <>
      <ModalContext.Provider value={{}}>
        {activePath === "/login" ? <></> : <SideNav />}
        <Outlet />
      </ModalContext.Provider>
    </>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export { useModal, Layout as default };
