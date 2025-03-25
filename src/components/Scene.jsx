import { useCallback, useEffect, useRef, useState } from "react";
import IloomChair1 from "./3Dmodel/Iloom/IloomChair1";
import IloomChair2 from "./3Dmodel/Iloom/IloomChair2";
import Plane from "./Plane";
import { debounce } from "lodash";
import { Select } from "@react-three/postprocessing";
import * as THREE from "three";
import { useRecoilState } from "recoil";
import url from "../constants/url";
import axios from "axios";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { AddedObjListState } from "../recoil/atoms/AddedObjListState";
import Object3D from "./3Dmodel/Object3D";
import { SelectedObjState } from "../recoil/atoms/SelectedObjState";

const Scene = () => {
  const [hovered, hover] = useState(null);
  const [onMoving, setOnMoving] = useState(false);
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);
  const [mouse2D, setMouse2D] = useState();
  const [savedTarget, setSavedTarget] = useState(new THREE.Vector3(0, 0, 0));

  const [addedObjList, setAddedObjList] = useRecoilState(AddedObjListState);

  // const handleClick = useCallback(() => {
  //   if (selectedObj) {
  //     setSelectedObj(null);
  //     setOnMoving(false);
  //   } else {
  //     setOnMoving(true);
  //   }
  // }, [selectedObj]);

  // useEffect(() => {
  //   window.addEventListener("click", handleClick);

  //   return () => {
  //     window.removeEventListener("click", handleClick);
  //   };
  // }, [handleClick]);

  const handlePlaneClick = (point) => {
    if (selectedObj !== null) {
      setAddedObjList(
        addedObjList.map((obj) =>
          obj.name === selectedObj ? { ...obj, position: point } : obj
        )
      );
      setSelectedObj(null);
    }
    setSavedTarget(point);
  };

  return (
    <>
      <Plane
        onPointerMove={(e) => {
          e.stopPropagation();
          setSavedTarget(e.point.clone());
        }}
        onClick={(e) => {
          handlePlaneClick(e.point);
        }}
      />

      {/* <ETCGroup />
                    <ElectronicsGroup />
            
                    <FurnitureGroup /> */}

      {/* {selectedSidebarMesh ? (
        <Select
          enabled={hovered === selectedSidebarObj.name}
          onPointerOver={over(selectedSidebarObj.name)}
          onPointerOut={() => debouncedHover(null)}
          onClick={() => {
            setSelectedObj(selectedSidebarObj.name);
          }}
        >
          <primitive
            position={savedTarget}
            object={selectedSidebarMesh.scene}
          />
        </Select>
      ) : null} */}

      {addedObjList.map((e, index) => {
        const key = `addedObj${index}`;
        return (
          <Select enabled={selectedObj === e.name} key={key}>
            <Object3D
              position={selectedObj === e.name ? savedTarget : e.position}
              meshPath={e.meshPath}
              name={e.name}
            />
          </Select>
        );
        // return <primitive position={e.position} />;
      })}

      {/* <Select
        enabled={hovered === "Chair1"}
        onPointerOver={over("Chair1")}
        onPointerOut={() => debouncedHover(null)}
        onClick={() => {
          setSelectedObj("Chair1");
        }}
      >
        <IloomChair1 position={savedTarget[0]} />
      </Select>
      <Select
        enabled={hovered === "Chair2"}
        onPointerOver={over("Chair2")}
        onPointerOut={() => debouncedHover(null)}
        onClick={() => {
          setSelectedObj("Chair2");
        }}
      >
        <IloomChair2 position={savedTarget[1]} />
      </Select> */}
    </>
  );
};

export default Scene;
