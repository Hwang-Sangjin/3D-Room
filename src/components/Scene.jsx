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
import { OrthographicCamera } from "@react-three/drei";
import Room from "./3Dmodel/Room/Room";
import RoomCollisionObjects from "./3Dmodel/Room/RoomCollisionObjects";

const Scene = () => {
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);

  const [addedObjList, setAddedObjList] = useRecoilState(AddedObjListState);
  const [objModal, setObjModal] = useRecoilState(ObjModalState);

  const { camera } = useThree();
  const [viewMode, setViewMode] = useRecoilState(ViewModeState);

  useEffect(() => {
    if (viewMode === "3D") {
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
  };

  return (
    <>
      <Plane
        onClick={(e) => {
          setObjModal(null);
          handlePlaneClick(e.point);
        }}
        onContextMenu={() => {
          setObjModal(null);
        }}
      />
      <Room />
      <RoomCollisionObjects />

      {addedObjList.map((e, index) => {
        const key = `addedObj${index}`;
        return (
          <Select enabled={selectedObj === e.name} key={key}>
            <Object3D meshPath={e.meshPath} name={e.name} />
          </Select>
        );
      })}

      {viewMode === "2D" ? (
        <OrthographicCamera makeDefault position={[0, 10, 0]} zoom={49} />
      ) : null}
    </>
  );
};

export default Scene;
