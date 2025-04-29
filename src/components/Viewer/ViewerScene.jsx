import { useEffect, useRef } from "react";
import url from "../../constants/url";
import { useGLTF } from "@react-three/drei";
import { useRecoilState } from "recoil";
import { EditorOffsetState } from "../../recoil/atoms/EditorOffsetState";
import * as THREE from "three";

const ViewerScene = ({ estateID }) => {
  const [editorOffset, setEditorOffset] = useRecoilState(EditorOffsetState);
  const sceneMeshRef = useRef();

  const meshUrl = `${url.MART_API_URL}${estateID}/scene/mesh/mesh.glb?1743387906350`;

  // Load the GLTF model using useGLTF
  const { scene } = useGLTF(meshUrl);

  useEffect(() => {
    if (editorOffset === null) {
      const Box = new THREE.Box3().setFromObject(sceneMeshRef.current);
      const movingCenter = new THREE.Vector3();
      const BoxCenter = Box.getCenter(movingCenter);
      sceneMeshRef.current.position.set(-BoxCenter.x, 0, -BoxCenter.z);

      setEditorOffset([-BoxCenter.x, 0, -BoxCenter.z]);
    } else {
      sceneMeshRef.current.position.set(...editorOffset);
    }
  }, []);

  return (
    <group>
      {/* Render the loaded GLTF scene */}
      <primitive
        ref={sceneMeshRef}
        object={scene}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]} // Adjust rotation as needed
        scale={[1, 1, 1]} // Adjust scale if necessary
      />
    </group>
  );
};

export default ViewerScene;
