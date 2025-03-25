import { useGLTF } from "@react-three/drei";

const MalmBed = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Bed/MalmBed.glb");
  return (
    <group {...props} dispose={null}>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MALM.geometry}
          material={materials.FUNITUR_041_MAT}
          position={[
            0.00040403008460998535, 0.514732837677002, 0.055576711893081665,
          ]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MALM_CART.geometry}
          material={materials.FUNITUR_041_CART_MAT}
        />
      </group>
    </group>
  );
};
useGLTF.preload("/furniture/Desk/MalmBed.glb");

export default MalmBed;
