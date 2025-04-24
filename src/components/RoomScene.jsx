import { useThree } from "@react-three/fiber";
import Room from "./3Dmodel/Room/Room";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ViewModeState } from "../recoil/atoms/ViewModeState";
import * as THREE from "three";
import { OrthographicCamera } from "@react-three/drei";
import RoomObjects from "./3Dmodel/Room/RoomObjects";

const RoomScene = ({ estateID, sceneData }) => {
  const { camera } = useThree();
  const [viewMode, setViewMode] = useRecoilState(ViewModeState);

  useEffect(() => {
    if (viewMode === "3D") {
      camera.position.set(0, 5, 5);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      camera.fov = 75;
      camera.near = 0.1;
      camera.far = 100;
      camera.updateProjectionMatrix();
    }
  }, [viewMode, camera]);

  return (
    <>
      <Room estateID={estateID} sceneData={sceneData} cellThickness={1} />
      {viewMode === "2D" ? (
        <OrthographicCamera makeDefault position={[0, 10, 0]} zoom={49} />
      ) : null}
      <RoomObjects />
    </>
  );
};

export default RoomScene;
