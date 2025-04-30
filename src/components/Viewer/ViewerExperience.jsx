import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ViewerScene from "./ViewerScene";
import TestScene from "./TestScene";

const ViewerExperience = ({ estateID }) => {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <directionalLight position={[-3, 5, 5]} intensity={2.5} />
      <OrbitControls />
      <TestScene />
      {/* <ViewerScene estateID={estateID} /> */}
    </Canvas>
  );
};

export default ViewerExperience;
