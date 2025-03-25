import { useGLTF } from "@react-three/drei";

const MaeStorage = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Storage/MaeStorage.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mae_Steel_Wardrobe.geometry}
        material={materials["FUNITURE_025_MAT.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mae_Steel_Wardrobe_L_DOOR.geometry}
        material={materials["FUNITURE_025_MAT.001"]}
        position={[0.598, 0.949, 0.249]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mae_Steel_Wardrobe_R_DOOR.geometry}
        material={materials["FUNITURE_025_MAT.001"]}
        position={[-0.598, 0.949, 0.249]}
        rotation={[0, 1.571, 0]}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Storage/MaeStorage.glb");

export default MaeStorage;
