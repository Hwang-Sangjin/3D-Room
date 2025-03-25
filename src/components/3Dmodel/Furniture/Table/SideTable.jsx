import React from "react";
import { useGLTF } from "@react-three/drei";

export default function SideTable(props) {
  const { nodes, materials } = useGLTF("/furniture/Table/SideTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Jasper_Conran_London_Bray_Side_Table.geometry}
        material={materials.FURNITURE_096_MAT}
      />
    </group>
  );
}

useGLTF.preload("/furniture/Table/SideTable.glb");
