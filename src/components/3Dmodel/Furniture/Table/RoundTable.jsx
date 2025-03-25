import { useGLTF } from "@react-three/drei";

const RoundTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/RoundTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Savonnerie_Round_Dining_Table.geometry}
        material={materials.FURNITURE_060_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/RoundTable.glb");

export default RoundTable;
