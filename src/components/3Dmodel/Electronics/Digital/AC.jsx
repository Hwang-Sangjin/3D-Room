import { useGLTF } from "@react-three/drei";

const AC = (props) => {
  const { nodes, materials } = useGLTF("/electronics/digital/AC.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.623, 0.001, 0.129]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "SAMSUNG_AR09TXHQASINUA_005_SAMSUNG_AR09TXHQASINUA_Material_#95__1"
            ].geometry
          }
          material={materials.SAMSUNG_AR09TXHQASINUA_Material_95}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "SAMSUNG_AR09TXHQASINUA_005_SAMSUNG_AR09TXHQASINUA_Material_#95__2"
            ].geometry
          }
          material={materials.SAMSUNG_AR09TXHQASINUA_001__0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "SAMSUNG_AR09TXHQASINUA_005_SAMSUNG_AR09TXHQASINUA_Material_#95__3"
            ].geometry
          }
          material={materials.SAMSUNG_AR09TXHQASINUA_Samsung}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "SAMSUNG_AR09TXHQASINUA_005_SAMSUNG_AR09TXHQASINUA_Material_#95__4"
            ].geometry
          }
          material={materials.Material_101}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "SAMSUNG_AR09TXHQASINUA_005_SAMSUNG_AR09TXHQASINUA_Material_#95__5"
            ].geometry
          }
          material={materials.Material_102}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/electronics/digital/AC.glb");

export default AC;
