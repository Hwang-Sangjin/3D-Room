import React from "react";
import { useGLTF } from "@react-three/drei";

const MasTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/MasTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Undique_mas.geometry}
        material={materials.FURNITURE_097_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/MasTable.glb");

export default MasTable;
