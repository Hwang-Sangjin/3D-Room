import { useGLTF } from "@react-three/drei";

const SheesamTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/SheesamTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sheesham_Wood_Coffee_Table.geometry}
        material={materials.FUNITURE_023_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/SheesamTable.glb");

export default SheesamTable;
