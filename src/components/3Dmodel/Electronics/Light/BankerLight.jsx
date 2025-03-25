import { useGLTF } from "@react-three/drei";

const BankerLight = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/BankerLight.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.015} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_desk_lamp_0.geometry}
          material={materials.desk_lamp}
          position={[0.444, 14.109, 0.233]}
          scale={100}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/electronics/light/BankerLight.glb");

export default BankerLight;
