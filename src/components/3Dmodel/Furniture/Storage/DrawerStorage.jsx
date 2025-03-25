import { useGLTF } from "@react-three/drei";

const DrawerStorage = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Storage/DrawerStorage.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drawer_Cabinet.geometry}
        material={materials.FUNITURE_042_MAT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drawer_Cabinet_DESK.geometry}
        material={materials.FUNITURE_042_MAT}
        position={[-0.48, 0.284, 0.032]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Storage/DrawerStorage.glb");

export default DrawerStorage;
