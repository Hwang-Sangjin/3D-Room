import { useGLTF } from "@react-three/drei";

const TVStorage = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Storage/TVStorage.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TV_Stand.geometry}
        material={materials.FUNITURE_048_MAT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TV_Stand_DOOR.geometry}
        material={materials.FUNITURE_048_MAT}
        position={[0.284, 0.221, 0.251]}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Storage/TVStorage.glb");

export default TVStorage;
