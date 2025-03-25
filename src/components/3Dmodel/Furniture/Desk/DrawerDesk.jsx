import { useGLTF } from "@react-three/drei";

const DrawerDesk = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Desk/DrawerDesk.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drawer_Desk.geometry}
        material={materials.FURNITURE_099_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Desk/DrawerDesk.glb");

export default DrawerDesk;
