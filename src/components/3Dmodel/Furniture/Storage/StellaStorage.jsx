import { useGLTF } from "@react-three/drei";

const StellaStorage = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Storage/StellaStorage.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Stella_Storage_Cabinet.geometry}
        material={materials.FURNITURE_053_MAT}
      />
      <mesh
        geometry={nodes.Stella_Storage_Cabinet_DOOR.geometry}
        material={materials.FURNITURE_053_DOOR_MAT}
      />
      <mesh
        geometry={nodes.Stella_Storage_Cabinet_DOOR001.geometry}
        material={materials.FURNITURE_053_DOOR_MAT}
      />
      <mesh
        geometry={nodes.Stella_Storage_Cabinet_DOOR002.geometry}
        material={materials.FURNITURE_053_DOOR_MAT}
      />
      <mesh
        geometry={nodes.Stella_Storage_Cabinet_DOOR003.geometry}
        material={materials.FURNITURE_053_DOOR_MAT}
      />
      <mesh
        geometry={nodes.Stella_Storage_Cabinet_DOOR004.geometry}
        material={materials.FURNITURE_053_DOOR_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Storage/StellaStorage.glb");

export default StellaStorage;
