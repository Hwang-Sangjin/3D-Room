import { Loader } from "@react-three/drei";

import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { useEffect } from "react";
import url from "../../constants/url";
import { useRecoilState } from "recoil";
import { ObjListState } from "../../recoil/atoms/ObjListState";
import SpinnerLoader from "../etc/SpinnerLoader";
import { ObjLoaderState } from "../../recoil/atoms/ObjLoaderState";
import ViewModeUI from "../UI/ViewModeUI";
import RoomExperience from "./EditorExperience";
import { useParams, useSearchParams } from "react-router";
import EditorViewerUI from "../UI/EditorViewerUI";
import { ArcData } from "../../utils/ArcData";
import { SceneMetaDataState } from "../../recoil/atoms/SceneMetaDataState";

const EditorFiberContainer = () => {
  const [searchParams] = useSearchParams();
  const estateID = searchParams.get("estateID");
  const objectListUrl = url.MART_API_URL + "objects/list.json";
  const [objList, setObjList] = useRecoilState(ObjListState);
  const [objLoader, setObjLoader] = useRecoilState(ObjLoaderState);
  const [sceneMetaData, setSceneMetaData] = useRecoilState(SceneMetaDataState);

  const getList = () => {
    axios.get(objectListUrl).then((res) => {
      setObjList(res.data);
    });
  };

  useEffect(() => {
    getList();

    ArcData.setDomainFromJson(estateID).then(() => {
      ArcData.getSceneInfoURL(estateID).then((sceneInfoURL) => {
        fetch(sceneInfoURL)
          .then((response) => response.json())
          .then((meta) => {
            setSceneMetaData(meta);
          });
      });
    });
  }, []);

  return (
    <>
      <RoomExperience estateID={estateID} />
      <Loader />
      {objLoader ? <SpinnerLoader /> : null}
      <Sidebar objList={objList} />
      <ViewModeUI />
      <EditorViewerUI type={"editor"} estateID={estateID} />
    </>
  );
};

export default EditorFiberContainer;
