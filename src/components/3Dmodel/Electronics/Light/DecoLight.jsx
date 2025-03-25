import { useGLTF } from "@react-three/drei";

const DecoLight = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/DecoLight.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.011, 0]} rotation={[0, Math.PI, 0]} scale={0.014}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Brass_Color_Wall_Sconce_Art_Deco_Lamp_pCylinder2001.geometry
          }
          material={materials["Brass Color Wall Sconce Art Deco Lamp"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Brass_Color_Wall_Sconce_Art_Deco_Lamp_polySurface1001.geometry
          }
          material={materials["Brass Color Wall Sconce Art Deco Lamp"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.polySurface2_Brass_Color_Wall_Sconce_Art_Deco_Lamp001.geometry
          }
          material={materials["Brass Color Wall Sconce Art Deco Lamp"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/electronics/light/DecoLight.glb");

export default DecoLight;
