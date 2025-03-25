import { useGLTF } from "@react-three/drei";

const WoodenStorage = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Storage/WoodenStorage.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wooden_wall_shelf.geometry}
        material={materials.FURNITURE_056_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Storage/WoodenStorage.glb");

export default WoodenStorage;
