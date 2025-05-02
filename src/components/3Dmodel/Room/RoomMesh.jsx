import { useGLTF } from "@react-three/drei";
import url from "../../../constants/url";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useRecoilState } from "recoil";
import { EditorOffsetState } from "../../../recoil/atoms/EditorOffsetState";
import { CookieDateState } from "../../../recoil/atoms/CookieDateState";
import { RoomMeshBoxState } from "../../../recoil/atoms/RoomMeshBoxState";

const RoomMesh = ({ estateID, meshData }) => {
  const [editorOffset, setEditorOffset] = useRecoilState(EditorOffsetState);
  const [cookieDate, setCookieDate] = useRecoilState(CookieDateState);
  const [roomMeshBox, setRoomMeshBox] = useRecoilState(RoomMeshBoxState);
  const sceneMeshRef = useRef();

  const fileName = meshData?.filename;

  const meshUrl = `${url.MART_API_URL}${estateID}/scene/${fileName}?${cookieDate}`;
  const { scene } = useGLTF(meshUrl);

  useEffect(() => {
    if (editorOffset === null) {
      const Box = new THREE.Box3().setFromObject(sceneMeshRef.current);
      const movingCenter = new THREE.Vector3();
      const BoxCenter = Box.getCenter(movingCenter);
      sceneMeshRef.current.position.set(
        -BoxCenter.x,
        -BoxCenter.y,
        -BoxCenter.z
      );

      setEditorOffset([-BoxCenter.x, -BoxCenter.y, -BoxCenter.z]);
      setRoomMeshBox(Box);
    } else {
      sceneMeshRef.current.position.set(...editorOffset);
    }
  }, []);

  return (
    <primitive
      ref={sceneMeshRef}
      object={scene}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      scale={[1, 1, 1]} // Adjust scale if necessary
    />
  );
};

export default RoomMesh;
