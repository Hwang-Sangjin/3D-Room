import { useGLTF } from "@react-three/drei";

const CornerSofa = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Sofa/CornerSofa.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corner_sofa_.geometry}
        material={materials.FURNITURE_098_MAT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corner_sofa__PILLOW_001.geometry}
        material={materials.FURNITURE_098_MAT}
        position={[-0.826, 0.578, -0.213]}
        rotation={[1.375, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corner_sofa__PILLOW_002.geometry}
        material={materials.FURNITURE_098_MAT}
        position={[1.017, 0.578, -0.213]}
        rotation={[1.375, 0, 0]}
        scale={0.01}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Sofa/CornerSofa.glb");

export default CornerSofa;
