import { useGLTF } from "@react-three/drei";

const ToyStorage = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Storage/ToyStorage.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Toy_Storage_Box.geometry}
        material={materials.FUNITURE_047_MAT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Toy_Storage_Box_DESK.geometry}
        material={materials.FUNITURE_047_MAT}
        position={[0.002, 0.372, 0.273]}
        rotation={[0, 0, -0.769]}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Storage/ToyStorage.glb");

export default ToyStorage;
