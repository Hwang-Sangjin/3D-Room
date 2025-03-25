import { useGLTF } from "@react-three/drei";

const TONChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/TONChair.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair_TON_515.geometry}
        material={materials.FUNITURE_030_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/TONChair.glb");

export default TONChair;
