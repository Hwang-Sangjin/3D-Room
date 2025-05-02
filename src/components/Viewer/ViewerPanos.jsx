import { useRecoilState } from "recoil";
import { EditorOffsetState } from "../../recoil/atoms/EditorOffsetState";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomMeshBoxState } from "../../recoil/atoms/RoomMeshBoxState";

const ViewerPano = ({ pos }) => {
  return (
    <group position={[pos.tx, pos.ty, pos.tz]}>
      {/* Inner Border Ring */}
      <mesh>
        <ringGeometry args={[0.07, 0.075, 32]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
      {/* Main Ring */}
      <mesh>
        <ringGeometry args={[0.075, 0.14, 32]} />
        <meshBasicMaterial
          color="gray"
          side={THREE.DoubleSide}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
      {/* Outer Border Ring */}
      <mesh>
        <ringGeometry args={[0.14, 0.145, 32]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const ViewerPanos = ({ estateID, sceneData }) => {
  const [editorOffset, setEditorOffset] = useRecoilState(EditorOffsetState);
  const [roomMeshBox, setRoomMeshBox] = useRecoilState(RoomMeshBoxState);
  const sceneMeshRef = useRef();

  useEffect(() => {
    if (editorOffset) {
      console.log("editorOffset", editorOffset);
      sceneMeshRef.current.position.set(
        editorOffset[0],
        roomMeshBox.min.y + 0.025,
        editorOffset[2]
      );
    }
  }, [editorOffset]);

  return (
    <group ref={sceneMeshRef} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {sceneData.panos.map((pano, index) => (
        <ViewerPano key={`pano-${index}`} pos={pano.pose} />
      ))}
    </group>
  );
};

export default ViewerPanos;
