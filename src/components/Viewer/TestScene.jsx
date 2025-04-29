import { CubeCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const TestScene = () => {
  const sphereRef = useRef();
  return (
    <>
      <CubeCamera
        resolution={256}
        near={1}
        far={1000}
        envMap={(texture) => {
          texture.mapping = THREE.CubeReflectionMapping;
          return texture;
        }}
      >
        {(texture) => (
          <mesh ref={sphereRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              envMap={texture}
              envMapIntensity={1}
              roughness={0.1}
              metalness={1}
            />
          </mesh>
        )}
      </CubeCamera>
      {/* Colored cubes for the environment */}
      <mesh position={[-2, 0, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[2, 0, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[0, 2, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Lighting */}
      <pointLight position={[5, 5, 5]} intensity={1} distance={100} />
      <ambientLight intensity={1} />
    </>
  );
};

export default TestScene;
