import { useGLTF } from "@react-three/drei";

const MubellTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/MubellTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mubell_Meeza_Coffee_Table.geometry}
        material={materials.FURNITURE_068_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/MubellTable.glb");

export default MubellTable;
