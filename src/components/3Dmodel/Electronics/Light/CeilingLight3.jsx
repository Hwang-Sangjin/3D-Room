import { useGLTF } from "@react-three/drei";

const CeilingLight3 = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/CeilingLight3.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_Leather_Fabric_01002_0.geometry}
        material={materials["Leather_Fabric_01.002"]}
        position={[-0.002, 2.644, -0.001]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.316, 0.316, 0.161]}
      />
    </group>
  );
};

useGLTF.preload("/electronics/light/CeilingLight3.glb");

export default CeilingLight3;
