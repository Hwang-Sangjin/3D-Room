import { useGLTF } from "@react-three/drei";

const AnguiSmallChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/AnguiSmallChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Angui_barchair.geometry}
        material={materials.FUNITURE_050_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/AnguiSmallChair.glb");

export default AnguiSmallChair;
