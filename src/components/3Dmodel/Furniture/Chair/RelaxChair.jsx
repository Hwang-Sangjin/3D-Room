import { useGLTF } from "@react-three/drei";

const RelaxChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/RelaxChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Relax_Chair.geometry}
        material={materials.FURNITURE_065_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/RelaxChair.glb");

export default RelaxChair;
