import { useGLTF } from "@react-three/drei";

const EcoBed = (props) => {
  const { nodes, materials } = useGLTF("/furniture/Bed/EcoBed.glb");

  return (
    <group {...props} dispose={null}>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Eco_Brand_Bed.geometry}
          material={materials.FUNITURE_044_MAT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Eco_Brand_Bed_DASK_BESE.geometry}
          material={materials.FUNITURE_044_DASK_BESE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Eco_Brand_Bed_DASK_BESE001.geometry}
          material={materials.FUNITURE_044_DASK_BESE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FUNITURE_044_DESK.geometry}
          material={materials.FUNITURE_044_DASK_BESE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FUNITURE_044_DESK001.geometry}
          material={materials.FUNITURE_044_DASK_BESE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FUNITURE_044_DESK002.geometry}
          material={materials.FUNITURE_044_DASK_BESE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FUNITURE_044_DESK003.geometry}
          material={materials.FUNITURE_044_DASK_BESE}
        />
      </group>
    </group>
  );
};
useGLTF.preload("/furniture/Desk/EcoBed.glb");

export default EcoBed;
