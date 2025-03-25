import { useGLTF } from "@react-three/drei";

const TeamChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/TeamChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Team_Stool.geometry}
        material={materials.FURNITURE_069_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/TeamChair.glb");

export default TeamChair;
