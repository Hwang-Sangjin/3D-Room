import { useGLTF } from "@react-three/drei";

const AmbuTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/AmbuTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Ambu_–_Solidwood_Dining_Table"].geometry}
        material={materials.FUNITURE_019_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/AmbuTable.glb");

export default AmbuTable;
