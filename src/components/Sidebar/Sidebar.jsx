import React, { useEffect, useState } from "react";
import SideItem from "./SideItem";
import url from "../../constants/url";
import { useRecoilState } from "recoil";
import * as THREE from "three";
import { AddedObjListState } from "../../recoil/atoms/AddedObjListState";
import { SelectedObjState } from "../../recoil/atoms/SelectedObjState";
import { OnGizmoState } from "../../recoil/atoms/OnGizmoState";

function Sidebar({ ObjList }) {
  const [isOpen, setIsOpen] = useState(false);

  const [addedObjList, setAddedObjList] = useRecoilState(AddedObjListState);
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);
  const [onGizmo, setOnGizmo] = useRecoilState(OnGizmoState);
  const ObjListArr = Object.keys(ObjList);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const onClickSidebarItem = ({ name, imagePath, meshPath }) => {
    const objState = {
      name: name,
      meshPath: meshPath,
      imagePath: imagePath,
      position: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Vector3(0, 0, 0),
    };
    setAddedObjList((prev) => {
      return [...prev, objState];
    });

    setSelectedObj(name);
  };

  return (
    <div className="fixed top-0 h-screen ">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 bg-gray-400 p-2 rounded-md z-50 focus:outline-none transition-transform duration-300 ease-in-out transform ${
          !isOpen ? "translate-x-0" : "translate-x-[260px]"
        }`}
      >
        {isOpen ? (
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 overflow-y-auto bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          scrollbarWidth: "none", // Firefox
          WebkitOverflowScrolling: "touch", // iOS Safari
          msOverflowStyle: "none", // IE and Edge
        }}
      >
        <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
        <nav>
          <ul className="space-y-2">
            {ObjListArr.map((e, index) => {
              const key = `sidebarObjectList${index}`;
              const imagePath = ObjList[e]["thumbnail"];
              const meshPath = ObjList[e]["mesh"];
              const name = e + "-" + addedObjList.length;
              return (
                <li
                  onClick={() => {
                    onClickSidebarItem({ name, imagePath, meshPath });
                  }}
                  key={key}
                >
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
