import { useGLTF } from "@react-three/drei";

const AdornSofa = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Sofa/AdornSofa.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Adorn_India_Damian_Sofa__LARGE.geometry}
        material={materials.FURNITURE_083_MAT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Adorn_India_Damian_Sofa_SMALL.geometry}
        material={materials.FURNITURE_083_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Sofa/AdornSofa.glb");

export default AdornSofa;
