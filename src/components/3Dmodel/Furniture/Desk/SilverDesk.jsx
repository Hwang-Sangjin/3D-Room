import { useGLTF } from "@react-three/drei";

const SilverDesk = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Desk/SilverDesk.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Silver_Metal_Office__DESK.geometry}
        material={materials.FURNITURE_076_MAT}
        position={[-0.64, 0.248, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Silver_Metal_Office__DESK002.geometry}
        material={materials.FURNITURE_076_MAT}
        position={[-0.64, 0.583, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Silver_Metal_Office_Desk.geometry}
        material={materials.FURNITURE_076_MAT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Silver_Metal_Office_DESK001.geometry}
        material={materials.FURNITURE_076_MAT}
        position={[-0.64, 0.414, 0.25]}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Desk/SilverDesk.glb");

export default SilverDesk;
