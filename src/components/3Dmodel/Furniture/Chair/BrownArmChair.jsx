import { useGLTF } from "@react-three/drei";

const BrownArmChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/BrownArmChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Armchair.geometry}
        material={materials.FURNITURE_085_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/BrownArmChair.glb");

export default BrownArmChair;
