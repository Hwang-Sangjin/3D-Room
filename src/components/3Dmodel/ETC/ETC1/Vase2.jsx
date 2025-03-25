import { useGLTF } from "@react-three/drei";

const Vase2 = (props) => {
  const { nodes, materials } = useGLTF("/etc/etc1/vase2.glb");

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0.272, -0.017]}
        rotation={[-1.547, 0.42, -3.139]}
        scale={[1.576, 1.263, 2.462]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Jug_of_flowers_A001_Material007_0.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Jug_of_flowers_A001_Material007_0001.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material003_0.geometry}
        material={materials["Material.004"]}
        position={[-0.001, 0.072, -0.004]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.431, 1.431, 1.212]}
      />
    </group>
  );
};

useGLTF.preload("/etc/etc1/vase2.glb");

export default Vase2;
