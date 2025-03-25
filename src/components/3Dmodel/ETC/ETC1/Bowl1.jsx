import { useGLTF } from "@react-three/drei";

const Bowl1 = (props) => {
  const { nodes, materials } = useGLTF("/etc/etc1/bowl1.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bowl_grey_0.geometry}
        material={materials.grey}
        position={[-0.016, 0.143, 0.001]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.165, 0.165, 0.127]}
      />
    </group>
  );
};

useGLTF.preload("/etc/etc1/bowl1.glb");

export default Bowl1;
