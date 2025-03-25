import { useGLTF } from "@react-three/drei";

const ElodieTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/ElodieTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Elodie-Console_Table"].geometry}
        material={materials.FUNITURE_024_MAT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Elodie-Console_Table_Desk"].geometry}
        material={materials.FUNITURE_024_MAT}
        position={[0, 0.511, 0.253]}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/ElodieTable.glb");

export default ElodieTable;
