import { useGLTF } from "@react-three/drei";

const KobeTable = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Table/KobeTable.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_Kobe_Parket_Teak.geometry}
        material={materials.FUNITURE_020_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Table/KobeTable.glb");

export default KobeTable;
