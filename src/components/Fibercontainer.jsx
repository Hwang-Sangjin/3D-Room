import { Loader } from "@react-three/drei";

import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
import { useEffect } from "react";
import url from "../constants/url";
import { useRecoilState } from "recoil";
import { ObjListState } from "../recoil/atoms/ObjListState";
import SpinnerLoader from "./etc/SpinnerLoader";
import { ObjLoaderState } from "../recoil/atoms/ObjLoaderState";
import ViewModeUI from "./UI/ViewModeUI";
import RoomExperience from "./RoomExperience";
import { useParams, useSearchParams } from "react-router";
import EditorViewerUI from "./UI/EditorViewerUI";

const FiberContainer = () => {
  const [searchParams] = useSearchParams();
  const estateID = searchParams.get("estateID");
  const objectListUrl = url.MART_API_URL + "objects/list.json";
  const [objList, setObjList] = useRecoilState(ObjListState);
  const [objLoader, setObjLoader] = useRecoilState(ObjLoaderState);

  const getList = () => {
    axios.get(objectListUrl).then((res) => {
      setObjList(res.data);
    });
  };

  useEffect(() => {
    getList();
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

export default FiberContainer;
