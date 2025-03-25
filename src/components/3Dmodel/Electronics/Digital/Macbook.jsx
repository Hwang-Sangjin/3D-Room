import { useGLTF } from "@react-three/drei";

const Macbook = (props) => {
  const { nodes, materials } = useGLTF("/electronics/digital/Macbook.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-0.234, 0.416, 1.189]}
            rotation={[Math.PI, 0, 0]}
            scale={[9.059, 7.172, 9.059]}
          >
            <group
              position={[0.001, -1.421, 1.468]}
              rotation={[1.386, 0, 0]}
              scale={[11.038, 11.143, 13.86]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material002_0.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material003_0.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material004_0.geometry}
                material={materials["Material.004"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_Material002_0.geometry}
              material={materials["Material.002"]}
              position={[-0.01, -0.047, -0.739]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1.035, 0.972, 0.968]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_Material001_0.geometry}
              material={materials["Material.001"]}
              position={[0.024, -0.032, 0.48]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.976, 0.976, 0.978]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/electronics/digital/Macbook.glb");

export default Macbook;
