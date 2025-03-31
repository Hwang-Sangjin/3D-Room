import { useGLTF } from "@react-three/drei";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ObjListState } from "../../../recoil/atoms/ObjListState";
import url from "../../../constants/url";

const RoomObjects = () => {
  const placedObjectsUrl =
    "https://3dr-data.io.naver.com/v1/file/3DR/poc/1111111400/scene/object.json?1743387906350";

  const [placedObjects, setPlacedObjects] = useState();
  const [objList, setObjList] = useRecoilState(ObjListState);

  useEffect(() => {
    axios.get(placedObjectsUrl).then((res) => {
      setPlacedObjects(res.data.objects);
    });
  }, []);

  useEffect(() => {
    console.log(placedObjects);
  }, [placedObjects]);

  return (
    <>
      {placedObjects
        ? placedObjects.map((e, index) => {
            const key = `placedObject` + e.name + index;
            const glbUrl =
              url.MART_API_URL + "objects/" + objList[e.name]["mesh"];
            const { scene } = useGLTF(glbUrl);
            console.log(scene);

            return (
              <primitive
                position={[e.tx, e.ty, e.tz]}
                rotation={[e.rx, e.ry, e.rz]}
                scale={[e.sx, e.sy, e.sz]}
                key={key}
                object={scene}
              />
            );
          })
        : null}
    </>
  );
};

export default RoomObjects;
