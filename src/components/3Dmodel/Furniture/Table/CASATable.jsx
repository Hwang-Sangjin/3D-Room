import { useGLTF } from "@react-three/drei";

const CASATable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/CASATable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LUMBER_CASA_Coffee_Table.geometry}
        material={materials.FURNITURE_064_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/CASATable.glb");

export default CASATable;
