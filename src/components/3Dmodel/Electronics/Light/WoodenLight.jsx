import { useGLTF } from "@react-three/drei";

const WoodenLight = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/WoodenLight.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.005}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vi5hbjgga_LOD0_TIER2_000_MatID_1_0.geometry}
          material={materials.Wooden_Floor_Lamp_vi5hbjgga_Mid}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vi5hbjgga_LOD0_TIER2_001_MatID_1_0.geometry}
          material={materials.Wooden_Floor_Lamp_vi5hbjgga_Mid}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/electronics/light/WoodenLight.glb");

export default WoodenLight;
