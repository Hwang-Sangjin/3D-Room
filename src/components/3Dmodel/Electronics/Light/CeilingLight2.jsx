import { useGLTF } from "@react-three/drei";

const CeilingLight2 = (props) => {
  const { nodes, materials } = useGLTF("/electronics/light/CeilingLight2.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.378, 1.377, 0.366]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["aromas+del+campo+crawford_1"].geometry}
          material={materials["Wood_Grain_Light1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["aromas+del+campo+crawford_2"].geometry}
          material={materials._42}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["aromas+del+campo+crawford_3"].geometry}
          material={materials._41}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["aromas+del+campo+crawford_4"].geometry}
          material={materials._39}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/electronics/light/CeilingLight2.glb");

export default CeilingLight2;
