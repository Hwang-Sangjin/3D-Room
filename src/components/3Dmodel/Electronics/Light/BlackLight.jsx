import { useGLTF } from "@react-three/drei";

const BlackLight = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/BlackLight.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.174, 0.125]} scale={1.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_Lamp_1.geometry}
          material={materials["Bulb Glass"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_Lamp_2.geometry}
          material={materials.Copper_Blurry}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_Lamp_3.geometry}
          material={materials.Aluminum_Anodized_DarkGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_Lamp_4.geometry}
          material={materials.Plastic_Simple_GrainM_Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_Lamp_5.geometry}
          material={materials.Filament}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_Lamp_6.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/electronics/light/BlackLight.glb");

export default BlackLight;
