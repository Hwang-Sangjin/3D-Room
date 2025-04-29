import { useSearchParams } from "react-router";
import EditorViewerUI from "../UI/EditorViewerUI";
import ViewerExperience from "./ViewerExperience";

const ViewerFiberContainer = () => {
  const [searchParams] = useSearchParams();
  const estateID = searchParams.get("estateID");
  return (
    <>
      <ViewerExperience estateID={estateID} />
      <EditorViewerUI type={"Viewer"} estateID={estateID} />
    </>
  );
};

export default ViewerFiberContainer;
