import { useGLTF } from "@react-three/drei";

const PlanChair = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Chair/PlanChair.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mid_Century_G_Plan_Stool.geometry}
        material={materials.FURNITURE_090_MAT}
      />
    </group>
  );
};

useGLTF.preload("/furniture/Chair/PlanChair.glb");

export default PlanChair;
