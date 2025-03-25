import { useGLTF } from "@react-three/drei";

const LoungeChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/LoungeChair.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lounge_Chair.geometry}
        material={materials.FUNITURE_046_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/LoungeChair.glb");

export default LoungeChair;
