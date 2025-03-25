import { useGLTF } from "@react-three/drei";

const ComputerDesk = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Desk/ComputerDesk.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Akshni_Newton_ComputerTable.geometry}
        material={materials.FUNITURE_045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Akshni_Newton_ComputerTable_01.geometry}
        material={materials.FUNITURE_045}
        position={[-0.16, 0.652, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Akshni_Newton_ComputerTable_02.geometry}
        material={materials.FUNITURE_045}
        position={[0.319, 0.692, 0.177]}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Desk/ComputerDesk.glb");

export default ComputerDesk;
