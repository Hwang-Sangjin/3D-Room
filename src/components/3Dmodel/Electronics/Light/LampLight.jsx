import { useGLTF } from "@react-three/drei";

const LampLight = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/LampLight.glb");
  return (
    <group {...props} scale={1.2} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lightbulb_Table_Lamp_0.geometry}
        material={materials.Table_Lamp}
      />
    </group>
  );
};

useGLTF.preload("/electronics/light/LampLight.glb");

export default LampLight;
