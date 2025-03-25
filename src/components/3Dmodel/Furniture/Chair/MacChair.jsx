import { useGLTF } from "@react-three/drei";

const MacChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/MacChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mac_Motion_Comfort_Chair.geometry}
        material={materials.FURNITURE_089_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/MacChair.glb");

export default MacChair;
