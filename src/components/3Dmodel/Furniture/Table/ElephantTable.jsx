import { useGLTF } from "@react-three/drei";

const ElephantTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/ElephantTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Elepheant_Dining_Table.geometry}
        material={materials.FURNITURE_061_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/ElephantTable.glb");

export default ElephantTable;
