import { useEffect, useRef } from "react";
import url from "../../constants/url";
import { useGLTF } from "@react-three/drei";
import { useRecoilState } from "recoil";
import { EditorOffsetState } from "../../recoil/atoms/EditorOffsetState";
import * as THREE from "three";
import { CookieDateState } from "../../recoil/atoms/CookieDateState";

const ViewerScene = ({ estateID, meshData }) => {
  const [editorOffset, setEditorOffset] = useRecoilState(EditorOffsetState);
  const [cookieDate, setCookieDate] = useRecoilState(CookieDateState);
  const sceneMeshRef = useRef();

  const fileName = meshData?.filename;

  const meshUrl = `${url.MART_API_URL}${estateID}/scene/${fileName}?${cookieDate}`;

  // Load the GLTF model using useGLTF
  const { scene } = useGLTF(meshUrl);

  useEffect(() => {
    if (editorOffset) {
      sceneMeshRef.current.position.set(...editorOffset);
    }
    // sceneMeshRef.current.children[0].material.color.set("#20FFFF");
    // console.log(sceneMeshRef.current.children[0], scene);
  }, [editorOffset]);

  return (
    <primitive
      ref={sceneMeshRef}
      object={scene}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]} // Adjust rotation as needed
      scale={[1, 1, 1]} // Adjust scale if necessary
    />
  );
};

export default ViewerScene;
