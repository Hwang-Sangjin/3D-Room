import { useGLTF } from "@react-three/drei";

const Cup1 = (props) => {
  const { nodes, materials } = useGLTF("/etc/etc1/cup1.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Metal_Support_Coffee_Cup_-_Metal_0"].geometry}
        material={materials["Coffee_Cup_-_Metal"]}
        position={[0.001, 0.008, 0]}
        rotation={[-Math.PI / 2, 0, 0.831]}
        scale={1.465}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Glass_Coffee_Cup_-_Glass_0"].geometry}
        material={materials["Coffee_Cup_-_Glass"]}
        position={[0.001, 0.049, 0]}
        rotation={[-Math.PI / 2, 0, 0.721]}
        scale={1.465}
      />
    </group>
  );
};

useGLTF.preload("/etc/etc1/cup1.glb");

export default Cup1;
