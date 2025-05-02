import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ViewerScene from "./ViewerScene";
import ViewerPanos from "./ViewerPanos";
import { useRecoilState } from "recoil";
import { SceneMetaDataState } from "../../recoil/atoms/SceneMetaDataState";

const ViewerExperience = ({ estateID }) => {
  const [sceneMetaData, setSceneMetaData] = useRecoilState(SceneMetaDataState);
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <directionalLight position={[-3, 5, 5]} intensity={2.5} />
      <OrbitControls />

      {sceneMetaData && (
        <group>
          <ViewerScene estateID={estateID} meshData={sceneMetaData.meshes[0]} />
          <ViewerPanos estateID={estateID} sceneData={sceneMetaData} />
        </group>
      )}
    </Canvas>
  );
};

export default ViewerExperience;
