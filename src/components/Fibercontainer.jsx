import { Loader } from "@react-three/drei";
import Experience from "./Experience";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
import { useEffect } from "react";
import url from "../constants/url";
import { useRecoilState } from "recoil";
import { ObjListState } from "../recoil/atoms/ObjListState";

const FiberContainer = () => {
  const objectListUrl = url.MART_API_URL + "objects/list.json";
  const [ObjList, setObjList] = useRecoilState(ObjListState);

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
      <Sidebar ObjList={ObjList} />
    </>
  );
};

export default FiberContainer;
