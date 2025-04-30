import { useGLTF } from "@react-three/drei";
import url from "../../../constants/url";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useRecoilState } from "recoil";
import { EditorOffsetState } from "../../../recoil/atoms/EditorOffsetState";
import { CookieDateState } from "../../../recoil/atoms/CookieDateState";

const RoomCollision = ({ estateID, meshData }) => {
  const [editorOffset, setEditorOffset] = useRecoilState(EditorOffsetState);
  const [cookieDate, setCookieDate] = useRecoilState(CookieDateState);
  const sceneMeshRef = useRef();

  const fileName = meshData?.filename;
  const meshUrl = `${url.MART_API_URL}${estateID}/scene/${fileName}?${cookieDate}`;
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
      visible={false}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      ref={sceneMeshRef}
      object={scene}
    ></primitive>
  );
};

export default RoomCollision;
