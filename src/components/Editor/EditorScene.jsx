import { useThree } from "@react-three/fiber";
import Room from "../3Dmodel/Room/Room";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { ViewModeState } from "../../recoil/atoms/ViewModeState";
import * as THREE from "three";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import RoomObjects from "../3Dmodel/Room/RoomObjects";
import gsap from "gsap";
import { SceneMetaDataState } from "../../recoil/atoms/SceneMetaDataState";
import RoomMesh from "../3Dmodel/Room/RoomMesh";
import RoomUnseen from "../3Dmodel/Room/RoomUnseen";
import RoomCollision from "../3Dmodel/Room/RoomCollision";

const EditorScene = ({ estateID, sceneData }) => {
  const { camera, set } = useThree();
  const [viewMode, setViewMode] = useRecoilState(ViewModeState);
  const perspectiveCameraRef = useRef();
  const orthographicCameraRef = useRef();
  const [sceneMetaData, setSceneMetaData] = useRecoilState(SceneMetaDataState);

  // Smoothly transition camera properties
  useEffect(() => {
    const perspectiveCam = perspectiveCameraRef.current;
    const orthographicCam = orthographicCameraRef.current;

    if (viewMode === "2D") {
      // Transition to orthographic camera
      gsap.to(camera.position, {
        x: 0,
        y: 10,
        z: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(camera, {
        zoom: 50,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => camera.updateProjectionMatrix(),
      });
      // Set orthographic camera as default
      set({ camera: orthographicCam });
    } else {
      // Transition to perspective camera
      gsap.to(camera.position, {
        x: 0,
        y: 5,
        z: 5,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(camera.rotation, {
        x: -Math.PI / 4, // Adjust based on lookAt(0, 0, 0)
        y: 0,
        z: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(camera, {
        fov: 75,
        zoom: 1, // Reset zoom for perspective
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => camera.updateProjectionMatrix(),
      });
      // Set perspective camera as default
      set({ camera: perspectiveCam });
    }
  }, [viewMode, camera, set]);

  return (
    <>
      {sceneMetaData && (
        <group>
          <RoomMesh estateID={estateID} meshData={sceneMetaData.meshes[0]} />
          <RoomUnseen estateID={estateID} meshData={sceneMetaData.meshes[1]} />
          <RoomCollision
            estateID={estateID}
            meshData={sceneMetaData.collisions[0]}
          />
        </group>
      )}
      <OrthographicCamera
        ref={orthographicCameraRef}
        position={[0, 10, 0]}
        zoom={50}
        makeDefault={viewMode === "2D"}
      />
      <PerspectiveCamera
        ref={perspectiveCameraRef}
        position={[0, 5, 5]}
        fov={75}
        near={0.1}
        far={100}
        makeDefault={viewMode === "3D"}
      />
      <RoomObjects />
    </>
  );
};

export default EditorScene;
