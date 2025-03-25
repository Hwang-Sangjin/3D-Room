import { useGLTF } from "@react-three/drei";

const HalleyStorage = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Storage/HalleyStorage.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chest_of_drawers_Halley_Bellavita.geometry}
        material={materials.FUNITURE_033_MAT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chest_of_drawers_Halley_Bellavita_DESK.geometry}
        material={materials.FUNITURE_033_MAT}
        position={[0, 0.267, 0.263]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chest_of_drawers_Halley_Bellavita_DESK001.geometry}
        material={materials.FUNITURE_033_MAT}
        position={[0, 0.458, 0.263]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chest_of_drawers_Halley_Bellavita_DESK002.geometry}
        material={materials.FUNITURE_033_MAT}
        position={[0, 0.647, 0.263]}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Storage/HalleyStorage.glb");

export default HalleyStorage;
