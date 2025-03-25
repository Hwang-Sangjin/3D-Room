import { useGLTF } from "@react-three/drei";

const Vase1 = (props) => {
  const { nodes, materials } = useGLTF("/etc/etc1/vase1.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flower_leaf1_0.geometry}
        material={materials.leaf1}
        position={[0.003, 0.134, 0.008]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flower_leaf2_0.geometry}
        material={materials.leaf2}
        position={[0.003, 0.134, 0.008]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vase_grey001_0.geometry}
        material={materials["grey.001"]}
        position={[-0.002, 0.114, 0.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.083}
      />
    </group>
  );
};

useGLTF.preload("/etc/etc1/vase1.glb");

export default Vase1;
