import { Loader } from "@react-three/drei";
import Experience from "./Experience";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
import { useEffect } from "react";
import url from "../constants/url";
import { useRecoilState } from "recoil";
import { ObjListState } from "../recoil/atoms/ObjListState";
import SpinnerLoader from "./etc/SpinnerLoader";
import { ObjLoaderState } from "../recoil/atoms/ObjLoaderState";
import ViewModeUI from "./UI/ViewModeUI";

const FiberContainer = () => {
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
      <Experience />
      <Loader />
      {objLoader ? <SpinnerLoader /> : null}
      <Sidebar objList={objList} />
      <ViewModeUI />
    </>
  );
};

export default FiberContainer;
