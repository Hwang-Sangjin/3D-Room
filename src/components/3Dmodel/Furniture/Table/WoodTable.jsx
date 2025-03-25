import { useGLTF } from "@react-three/drei";

const WoodTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/WoodTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Seito_Wood_Table.geometry}
        material={materials.FURNITURE_072_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/WoodTable.glb");

export default WoodTable;
