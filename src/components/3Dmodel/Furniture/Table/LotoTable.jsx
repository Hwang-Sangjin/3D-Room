import { useGLTF } from "@react-three/drei";

const LotoTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/LotoTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_Nardi_Loto.geometry}
        material={materials.FURNITURE_063_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/LotoTable.glb");

export default LotoTable;
