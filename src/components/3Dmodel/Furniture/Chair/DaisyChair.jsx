import { useGLTF } from "@react-three/drei";

const DaisyChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/DaisyChair.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair_Daisy_Plywood.geometry}
        material={materials.FURNITURE_057_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/DaisyChair.glb");

export default DaisyChair;
