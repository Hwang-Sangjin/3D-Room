import { useGLTF } from "@react-three/drei";

const ArmChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/ArmChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Livre_Armchair.geometry}
        material={materials.FURNITURE_100_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/ArmChair.glb");

export default ArmChair;
