import { useGLTF } from "@react-three/drei";

const HostelChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/HostelChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hostel_Room_Chair.geometry}
        material={materials.FURNITURE_059_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/HostelChair.glb");

export default HostelChair;
