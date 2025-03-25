import { useGLTF } from "@react-three/drei";

const MasonChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/MasonChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mason_Armchair.geometry}
        material={materials.FURNITURE_088_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/MasonChair.glb");

export default MasonChair;
