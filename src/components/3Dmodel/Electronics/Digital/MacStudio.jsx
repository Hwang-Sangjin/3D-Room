import { useGLTF } from "@react-three/drei";

const MacStudio = (props) => {
  const { nodes, materials } = useGLTF("/electronics/digital/MacStudio.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carpeta_08.geometry}
        material={materials["Material.005"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carpeta_10.geometry}
        material={materials["Material.002"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo_03.geometry}
        material={materials["Material.004"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cuerpo_03_(1)"].geometry}
        material={materials["Material.001"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cuerpo_03_(1)*_(1)"].geometry}
        material={materials["Material.003"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo_20.geometry}
        material={materials["Material.006"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo_22.geometry}
        material={materials["Material.007"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cuerpo_22_(1)"].geometry}
        material={materials["Material.007"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cuerpo_22_(2)"].geometry}
        material={materials["Material.007"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo_24.geometry}
        material={nodes.Cuerpo_24.material}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo_28.geometry}
        material={materials["Material.006"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo_28_2.geometry}
        material={materials["Material.006"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo_29.geometry}
        material={materials["Material.001"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo_32.geometry}
        material={materials["Material.001"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo_32_2.geometry}
        material={materials["Material.012"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Patrón_lineal_01.geometry}
        material={materials["Material.008"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Patrón_lineal_02.geometry}
        material={materials["Material.009"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Patrón_lineal_04.geometry}
        material={materials["Material.006"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Patrón_lineal_05.geometry}
        material={materials["Material.006"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Patrón_lineal_08.geometry}
        material={materials["Material.006"]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera.geometry}
        material={materials["Material.010"]}
        position={[0.099, 0.033, -0.06]}
        scale={0}
      />
    </group>
  );
};

useGLTF.preload("/electronics/digital/MacStudio.glb");

export default MacStudio;
