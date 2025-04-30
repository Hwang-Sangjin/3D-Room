import { useSearchParams } from "react-router";
import EditorViewerUI from "../UI/EditorViewerUI";
import ViewerExperience from "./ViewerExperience";
import { useEffect } from "react";
import { ArcData } from "../../utils/ArcData";
import { useRecoilState } from "recoil";
import { SceneMetaDataState } from "../../recoil/atoms/SceneMetaDataState";

const ViewerFiberContainer = () => {
  const [searchParams] = useSearchParams();
  const estateID = searchParams.get("estateID");
  const [sceneMetaData, setSceneMetaData] = useRecoilState(SceneMetaDataState);

  return (
    <>
      <ViewerExperience estateID={estateID} />
      <EditorViewerUI type={"Viewer"} estateID={estateID} />
    </>
  );
};

export default ViewerFiberContainer;
