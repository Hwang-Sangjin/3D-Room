import React from "react";
import { useGLTF } from "@react-three/drei";

export default function DiningTable(props) {
  const { nodes, materials } = useGLTF("/furniture/Table/DiningTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Elliot_Dining_Table_.geometry}
        material={materials.FURNITURE_073_MAT}
      />
    </group>
  );
}

useGLTF.preload("/furniture/Table/DiningTable.glb");
