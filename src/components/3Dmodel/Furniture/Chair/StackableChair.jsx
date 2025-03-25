import { useGLTF } from "@react-three/drei";

const StackableChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/StackableChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._Stackable_Stool.geometry}
        material={materials.FURNITURE_074_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/StackableChair.glb");

export default StackableChair;
