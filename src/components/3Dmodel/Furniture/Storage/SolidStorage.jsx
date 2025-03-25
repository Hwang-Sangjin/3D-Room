import { useGLTF } from "@react-three/drei";

const SolidStorage = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Storage/SolidStorage.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Solidwood_Storage_Unit.geometry}
        material={materials.FURNITURE_054_MAT}
      />
      <mesh
        geometry={nodes.Solidwood_Storage_Unit_DOOR.geometry}
        material={materials.FURNITURE_054_MAT}
      />
      <mesh
        geometry={nodes.Solidwood_Storage_Unit_DOOR002.geometry}
        material={materials.FURNITURE_054_MAT}
      />
      <mesh
        geometry={nodes.Solidwood_Storage_Unit_DOOR_001.geometry}
        material={materials.FURNITURE_054_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Storage/SolidStorage.glb");

export default SolidStorage;
