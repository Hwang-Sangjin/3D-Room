import { useGLTF } from "@react-three/drei";

const StandLight = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/StandLight.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_Old_Wood_procedural_2_0.geometry}
        material={materials.Old_Wood_procedural_2}
        position={[0.003, 0.964, -0.001]}
        rotation={[-2.61, -0.462, -1.315]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002__0.geometry}
        material={materials["Cube.008__0"]}
        position={[-0.032, 1.258, 0.106]}
        rotation={[-0.496, -0.31, 1.407]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005_Leather_Fabric_01_0.geometry}
        material={materials.Leather_Fabric_01}
        position={[-0.001, 1.304, 0.008]}
        rotation={[-Math.PI / 2, 0, -0.829]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006_Metal_scratched_0.geometry}
        material={materials.Metal_scratched}
        position={[-0.001, 1.304, 0.008]}
        rotation={[-Math.PI / 2, 0, -0.829]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018_Metal_scratched001_0.geometry}
        material={materials["Metal_scratched.001"]}
        position={[-0.009, 1.262, 0.034]}
        rotation={[-Math.PI / 2, 0, -0.306]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023_Metal_scratched002_0.geometry}
        material={materials["Metal_scratched.002"]}
        position={[-0.002, 1.032, 0.008]}
        rotation={[-1.572, 0, 1.279]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath012_Metal08_PBR_0.geometry}
        material={materials.Metal08_PBR}
        position={[0, 1.032, 0.007]}
        rotation={[-2.945, -0.472, -1.481]}
      />
    </group>
  );
};

useGLTF.preload("/electronics/light/StandLight.glb");

export default StandLight;
