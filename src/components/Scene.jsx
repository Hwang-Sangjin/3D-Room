import { useCallback, useEffect, useRef, useState } from "react";

import Plane from "./Plane";

import { Select } from "@react-three/postprocessing";
import * as THREE from "three";
import { useRecoilState } from "recoil";

import { AddedObjListState } from "../recoil/atoms/AddedObjListState";
import Object3D from "./3Dmodel/Object3D";
import { SelectedObjState } from "../recoil/atoms/SelectedObjState";
import { ObjModalState } from "../recoil/atoms/ObjModalState";
import { useFrame, useThree } from "@react-three/fiber";
import { ViewModeState } from "../recoil/atoms/ViewModeState";
import { OrthographicCamera } from "@react-three/drei";
import Room from "./3Dmodel/Room/Room";
import RoomCollisionObjects from "./3Dmodel/Room/RoomCollisionObjects";
import PlyTest from "./3Dmodel/PlyTest";
import { useParams } from "react-router";

const Scene = () => {
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);
  const id = useParams();

  const [addedObjList, setAddedObjList] = useRecoilState(AddedObjListState);

  const [objModal, setObjModal] = useRecoilState(ObjModalState);

  const { camera } = useThree();
  const [viewMode, setViewMode] = useRecoilState(ViewModeState);
  const addedObjGroupRef = useRef();
  // Get the priced item

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

  useEffect(() => {
    if (selectedObj) {
      setObjModal(null);
    }
  }, [selectedObj]);

  useEffect(() => {
    if (objModal) {
      setSelectedObj(null);
    }
  }, [objModal]);

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

  const handleObjectClick = (e) => {
    let intersection = e.intersections;
    intersection = intersection.filter(
      (obj) => obj.object.type !== "Box3Helper"
    );

    const group = intersection[0].object.parent;
    const boxHelper = group.children.filter((e) => e.type === "Box3Helper")[0];

    setSelectedObj(group.name);
  };

  const handleObjectContextClick = (e) => {
    let intersection = e.intersections;
    intersection = intersection.filter(
      (obj) => obj.object.type !== "Box3Helper"
    );

    const group = intersection[0].object.parent;
    const boxHelper = group.children.filter((e) => e.type === "Box3Helper")[0];

    setObjModal(group.name);
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
      {/* <Room />
      <RoomCollisionObjects /> */}
      <group ref={addedObjGroupRef}>
        {addedObjList.map((e, index) => {
          const key = `addedObj${index}`;
          return (
            <Select
              onClick={(e) => {
                e.stopPropagation();
                handleObjectClick(e);
                // setSelectedObj(e.name);
                // setObjModal(null);
              }}
              onContextMenu={(e) => {
                e.stopPropagation();
                handleObjectContextClick(e);
                // console.log(e);
                // setObjModal(e.name);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                //handlePointerOver(e);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                //handlePointerOut(e);
              }}
              enabled={selectedObj === e.name}
              key={key}
            >
              <Object3D
                addedObjGroupRef={addedObjGroupRef}
                meshPath={e.meshPath}
                name={e.name}
              />
            </Select>
          );
        })}
      </group>

      {viewMode === "2D" ? (
        <OrthographicCamera makeDefault position={[0, 10, 0]} zoom={49} />
      ) : null}

      {/* <PlyTest /> */}
    </>
  );
};

export default Scene;
