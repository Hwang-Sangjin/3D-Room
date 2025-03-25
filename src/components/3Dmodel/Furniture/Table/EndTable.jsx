import { useGLTF } from "@react-three/drei";

const EndTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/EndTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zurich_Rd_End_Table.geometry}
        material={materials.FUNITURE_038_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/EndTable.glb");

export default EndTable;
