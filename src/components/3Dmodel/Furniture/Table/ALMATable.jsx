import { useGLTF } from "@react-three/drei";

const ALMATable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/ALMATable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ALMA_Fluted_Dining_Table.geometry}
        material={materials.FURNITURE_070_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/ALMATable.glb");

export default ALMATable;
