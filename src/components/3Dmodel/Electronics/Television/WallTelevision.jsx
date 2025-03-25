import React from "react";
import { useGLTF } from "@react-three/drei";

export default function WallTelevision(props) {
  const { nodes, materials } = useGLTF(
    "/electronics/television/WallTelevision.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.TV_Screen_Livingroom_TV_0.geometry}
        material={materials.Livingroom_TV}
        position={[-0.281, 0.094, 0.016]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.02}
      />
    </group>
  );
}

useGLTF.preload("/electronics/television/WallTelevision.glb");
