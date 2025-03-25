import { useGLTF } from "@react-three/drei";

const GocciaChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/GocciaChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Goccia_Stool.geometry}
        material={materials.FURNITURE_086_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/GocciaChair.glb");

export default GocciaChair;
