import { Canvas } from "@react-three/fiber";
import { Bvh, Environment, OrbitControls } from "@react-three/drei";
import Plane from "./Plane";
// import ElectronicsGroup from "./3Dmodel/Electronics/ElectronicsGroup";
// import FurnitureGroup from "./3Dmodel/Furniture/FurnitureGroup";
import { Suspense } from "react";
import IloomChair1 from "./3Dmodel/Iloom/IloomChair1";
import IloomChair2 from "./3Dmodel/Iloom/IloomChair2";
import { Selection } from "@react-three/postprocessing";
import Effects from "./Effects";
import Scene from "./Scene";
// import ETCGroup from "./3Dmodel/ETC/ETCGroup";

const Experience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 2, 3] }}>
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Selection>
          <Effects />
          <Scene />
        </Selection>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight position={[-3, 5, 5]} intensity={2.5} />
        {/* <directionalLight
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        position={[-3, 5, 5]}
        castShadow
        intensity={2.5}
      /> */}
      </Suspense>
    </Canvas>
  );
};

export default Experience;
