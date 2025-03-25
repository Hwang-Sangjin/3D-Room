import { useGLTF } from "@react-three/drei";

const StandMirror = (props) => {
  const { nodes, materials } = useGLTF("/etc/etc1/StandMirror.glb");

  return (
    <group {...props} dispose={null} rotation={[0, -Math.PI / 2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_Material006_0.geometry}
        material={materials["Material.006"]}
        position={[0.392, 1.274, 0.164]}
        rotation={[-1.573, -0.146, -0.014]}
        scale={0.396}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_mirror_0.geometry}
        material={materials.mirror}
        position={[0.392, 1.274, 0.164]}
        rotation={[-1.573, -0.146, -0.014]}
        scale={0.396}
      />
    </group>
  );
};

useGLTF.preload("/etc/etc1/StandMirror.glb");

export default StandMirror;
