import { useCallback, useEffect, useRef, useState } from "react";

import Plane from "./Plane";

import { Select } from "@react-three/postprocessing";
import * as THREE from "three";
import { useRecoilState } from "recoil";

import { AddedObjListState } from "../recoil/atoms/AddedObjListState";
import Object3D from "./3Dmodel/Object3D";
import { SelectedObjState } from "../recoil/atoms/SelectedObjState";
import { ObjModalState } from "../recoil/atoms/ObjModalState";
import { useThree } from "@react-three/fiber";
import { ViewModeState } from "../recoil/atoms/ViewModeState";

const Scene = () => {
  const [hovered, hover] = useState(null);
  const [onMoving, setOnMoving] = useState(false);
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);
  const [mouse2D, setMouse2D] = useState();
  const [savedTarget, setSavedTarget] = useState(new THREE.Vector3(0, 0, 0));

  const [addedObjList, setAddedObjList] = useRecoilState(AddedObjListState);
  const [objModal, setObjModal] = useRecoilState(ObjModalState);

  const { camera } = useThree();
  const [viewMode, setViewMode] = useRecoilState(ViewModeState);

  useEffect(() => {
    if (viewMode === "2D") {
      camera.position.set(0, 7, 0);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      camera.near = 0.1;
      camera.far = 20;
      camera.zoom = 1;
      camera.updateProjectionMatrix();
    } else if (viewMode === "3D") {
      camera.position.set(0, 3, 3);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      camera.fov = 75;
      camera.near = 0.1;
      camera.far = 100;
      camera.updateProjectionMatrix();
    }
  }, [viewMode, camera]);

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
          setObjModal(null);
          handlePlaneClick(e.point);
        }}
        onContextMenu={() => {
          setObjModal(null);
        }}
      />

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
    </>
  );
};

export default Scene;
