import { useGLTF } from "@react-three/drei";

const HicoDesk = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Desk/HicoDesk.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hico_Work_Table.geometry}
        material={materials.FUNITURE_043_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Desk/HicoDesk.glb");

export default HicoDesk;
