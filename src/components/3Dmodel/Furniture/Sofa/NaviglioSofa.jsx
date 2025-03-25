import { useGLTF } from "@react-three/drei";

const NaviglioSofa = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Sofa/NaviglioSofa.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Naviglio_sofa.geometry}
        material={materials.FURNITURE_017_MAT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Naviglio_sofa_PILLOW.geometry}
        material={materials.FURNITURE_017_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Sofa/NaviglioSofa.glb");

export default NaviglioSofa;
