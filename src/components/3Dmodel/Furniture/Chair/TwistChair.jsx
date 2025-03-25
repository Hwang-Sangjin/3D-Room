import { useGLTF } from "@react-three/drei";

const TwistChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/TwistChair.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Twist_Guest_Chair.geometry}
        material={materials.FUNITURE_021_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/TwistChair.glb");

export default TwistChair;
