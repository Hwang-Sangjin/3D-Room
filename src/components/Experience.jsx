import { Canvas } from "@react-three/fiber";
import { Bvh, Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

import { Selection } from "@react-three/postprocessing";
import Effects from "./Effects";
import Scene from "./Scene";
import { useRecoilState } from "recoil";
import { OnGizmoState } from "../recoil/atoms/OnGizmoState.js";
import { ViewModeState } from "../recoil/atoms/ViewModeState.js";

// import ETCGroup from "./3Dmodel/ETC/ETCGroup";

const Experience = () => {
  const [onGizmo, setOnGizmo] = useRecoilState(OnGizmoState);
  const [viewMode, setViewMode] = useRecoilState(ViewModeState);

  return (
    <Canvas
      onCreated={({ raycaster }) => {
        raycaster.params.Mesh.threshold = 0.1; // if you're using points or lines, tweak accordingly
      }}
      shadows
      camera={{ position: [0, 5, 5] }}
    >
      <Suspense fallback={null}>
        <Bvh firstHitOnly>
          <Environment preset="city" />
          <Selection>
            <Effects />
            <Scene />
          </Selection>
          <OrbitControls enableRotate={!onGizmo && viewMode !== "2D"} />
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
        </Bvh>
      </Suspense>
    </Canvas>
  );
};

export default Experience;
