import { useGLTF } from "@react-three/drei";

const Monitor = (props) => {
  const { nodes, materials } = useGLTF("/electronics/digital/Monitor.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI / 2, -0.024, -Math.PI / 2]}
        scale={1.8}
      />
    </group>
  );
};

useGLTF.preload("/electronics/digital/Monitor.glb");

export default Monitor;
