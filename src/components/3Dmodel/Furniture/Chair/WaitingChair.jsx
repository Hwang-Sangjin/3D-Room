import { useGLTF } from "@react-three/drei";

const WaitingChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/WaitingChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Waiting_Room_Armchair_.geometry}
        material={materials.FURNITURE_087_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/WaitingChair.glb");

export default WaitingChair;
