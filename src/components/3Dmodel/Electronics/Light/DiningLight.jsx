import { useGLTF } from "@react-three/drei";

const DiningLight = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/DiningLight.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lighting_Material001_0.geometry}
        material={materials["Material.001"]}
        position={[0.033, 2.435, -0.583]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.027, 0.02, 0.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lighting_Material014_0.geometry}
        material={materials["Material.014"]}
        position={[0.033, 2.435, -0.583]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.027, 0.02, 0.23]}
      />
    </group>
  );
};

useGLTF.preload("/electronics/light/DiningLight.glb");

export default DiningLight;
