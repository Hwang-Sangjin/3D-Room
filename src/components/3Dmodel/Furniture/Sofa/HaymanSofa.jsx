import { useGLTF } from "@react-three/drei";

const HaymanSofa = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Sofa/HaymanSofa.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hayman_Teak_Seat_Sofa.geometry}
        material={materials.FUNITURE_022_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Sofa/HaymanSofa.glb");

export default HaymanSofa;
