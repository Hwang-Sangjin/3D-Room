import { useGLTF } from "@react-three/drei";

const FinlandiaChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/FinlandiaChair.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Finlandia_Small_Chair.geometry}
        material={materials.FURNITURE_058_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/FinlandiaChair.glb");

export default FinlandiaChair;
