import React, { useState } from "react";
import SideItem from "./SideItem";
import url from "../../constants/url";

function Sidebar({ ObjList }) {
  const [isOpen, setIsOpen] = useState(false);
  const ObjListArr = Object.keys(ObjList);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 h-screen ">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 bg-gray-200 p-2 rounded-md z-50 focus:outline-none transition-transform duration-300 ease-in-out transform ${
          !isOpen ? "translate-x-0" : "translate-x-[260px]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 overflow-scroll bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
        <nav>
          <ul className="space-y-2">
            {ObjListArr.map((e, index) => {
              const key = `sidebarObjectList${index}`;
              const imagePath = ObjList[e]["thumbnail"];
              const meshPath = ObjList[e]["mesh"];

              return (
                <li key={key}>
                  <SideItem imagePath={imagePath} meshPath={meshPath} />
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
