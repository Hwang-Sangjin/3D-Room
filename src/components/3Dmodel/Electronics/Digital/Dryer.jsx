import { useGLTF } from "@react-three/drei";

const Dryer = (props) => {
  const { nodes, materials } = useGLTF("/electronics/digital/Dryer.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder4_mi_metallic_paint_x1_0.geometry}
        material={materials["mi_metallic_paint_x1.001"]}
        scale={0.75}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
};

useGLTF.preload("/electronics/digital/Dryer.glb");

export default Dryer;
