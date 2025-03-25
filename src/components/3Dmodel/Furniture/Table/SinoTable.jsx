import { useGLTF } from "@react-three/drei";

const SinoTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/SinoTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sino_Table.geometry}
        material={materials.FURNITURE_091_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/SinoTable.glb");

export default SinoTable;
