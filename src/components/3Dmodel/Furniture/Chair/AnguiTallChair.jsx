import { useGLTF } from "@react-three/drei";

const AnguiTallChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/AnguiTallChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Angui_barchair_LARGE.geometry}
        material={materials.FUNITURE_050_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/AnguiTallChair.glb");

export default AnguiTallChair;
