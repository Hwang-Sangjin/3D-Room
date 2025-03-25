import { useGLTF } from "@react-three/drei";

const OutdoorSofa = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Sofa/OutdoorSofa.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Portside_Outdoor_Sofa_.geometry}
        material={materials.FURNITURE_031_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Sofa/OutdoorSofa.glb");

export default OutdoorSofa;
