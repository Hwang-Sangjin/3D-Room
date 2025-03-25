import { useGLTF } from "@react-three/drei";
import colorVertexShader from "../../../shaders/iloomChair2/vertexShader.glsl";
import colorFragmentShader from "../../../shaders/iloomChair2/fragmentShader.glsl";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

const IloomChair2 = (props) => {
  const { nodes, materials } = useGLTF("/iloom/IloomChair2/3DObject.glb");
  const materialRef = useRef();

  const { color } = useControls({
    color: {
      value: "#ffffff", // Default green in hex
      label: "Chair Color",
    },
  });

  // useEffect(() => {
  //   console.log(
  //     materialRef.current.uniforms.uColor.value,
  //     new THREE.Color(color)
  //   );
  //   materialRef.current.uniforms.uColor.value = new THREE.Color(color);
  // }, [color]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#0"].geometry}
        material={materials.material_08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#1"].geometry}
        material={materials.material_08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#2"].geometry}
        material={materials.material_04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#3"].geometry}
        material={materials.material_05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#4"].geometry}
        material={materials.material_12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#5"].geometry}
        material={materials.material_11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#6"].geometry}
        material={materials.material_05}
      >
        <meshBasicMaterial color={color} map={materials.material_05.map} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#7"].geometry}
        material={materials.material_08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#8"].geometry}
        material={materials.material_09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#9"].geometry}
        material={materials.material_06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#10"].geometry}
        material={materials.material_01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#11"].geometry}
        material={materials.material_01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["meshobj#12"].geometry}
        material={materials.material_10}
      />
    </group>
  );
};
useGLTF.preload("/iloom/IloomChair2/3DObject.glb");

export default IloomChair2;
