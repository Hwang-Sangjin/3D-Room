import { useGLTF } from "@react-three/drei";

const KingsviewSofa = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Sofa/KingsviewSofa.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kingsview_Corner_Sofa.geometry}
        material={materials.FURNITURE_084_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Sofa/KingsviewSofa.glb");

export default KingsviewSofa;
