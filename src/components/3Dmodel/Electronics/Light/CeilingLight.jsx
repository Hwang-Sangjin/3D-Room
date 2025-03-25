import { useGLTF } from "@react-three/drei";

const CeilingLight = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/CeilingLight.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line001.geometry}
        material={materials["Material 1"]}
        position={[0.069, 1.698, 0.014]}
        rotation={[Math.PI / 2, 0, 1.548]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line002.geometry}
        material={materials["Material 1"]}
        position={[0.003, 1.733, -0.037]}
        rotation={[Math.PI / 2, 0, -1.065]}
        scale={[0.002, 0.002, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line003.geometry}
        material={materials["Material 1"]}
        position={[-0.136, 1.697, 0.023]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.Wires}
        position={[-0.102, 1.768, 0.023]}
        rotation={[0, 1.065, 0]}
        scale={[0.005, 0.007, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.Wires}
        position={[0.07, 1.768, 0.048]}
        rotation={[0, 1.065, 0]}
        scale={[0.005, 0.007, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.Wires}
        position={[0.015, 1.768, -0.059]}
        rotation={[0, 1.065, 0]}
        scale={[0.005, 0.007, 0.005]}
      />
    </group>
  );
};

useGLTF.preload("/electronics/light/CeilingLight.glb");

export default CeilingLight;
