import React from "react";
import { useGLTF } from "@react-three/drei";

export default function CoffeeTable(props) {
  const { nodes, materials } = useGLTF("/furniture/Table/CoffeeTable.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.RENÉ_Freeform_Coffee_Table.geometry}
        material={materials.FURNITURE_077_MAT}
      />
    </group>
  );
}

useGLTF.preload("/furniture/Table/CoffeeTable.glb");
