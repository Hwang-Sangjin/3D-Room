import { useGLTF } from "@react-three/drei";

const ReceptionSofa = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Sofa/ReceptionSofa.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Reception_Sofa.geometry}
        material={materials.FUNITURE_018_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Sofa/ReceptionSofa.glb");

export default ReceptionSofa;
