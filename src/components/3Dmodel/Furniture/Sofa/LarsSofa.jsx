import { useGLTF } from "@react-three/drei";

const LarsSofa = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Sofa/LarsSofa.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lars_Sofa_.geometry}
        material={materials.FURNITURE_081_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Sofa/LarsSofa.glb");

export default LarsSofa;
