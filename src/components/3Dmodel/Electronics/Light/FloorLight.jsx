import { useGLTF } from "@react-three/drei";

const FloorLight = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/FloorLight.glb");
  return (
    <group {...props} scale={0.7} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cover.geometry}
        material={materials.Fabric}
        position={[-0.028, 1.924, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Construction.geometry}
        material={materials.Metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bulb.geometry}
        material={materials.Light}
        position={[0, -0.009, 0]}
      />
    </group>
  );
};

useGLTF.preload("/electronics/light/FloorLight.glb");

export default FloorLight;
