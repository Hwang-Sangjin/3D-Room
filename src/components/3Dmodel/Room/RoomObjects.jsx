import { Center, PivotControls, Select, useGLTF } from "@react-three/drei";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ObjListState } from "../../../recoil/atoms/ObjListState";
import url from "../../../constants/url";
import { SelectedObjState } from "../../../recoil/atoms/SelectedObjState";
import { ObjModalState } from "../../../recoil/atoms/ObjModalState";
import { OnGizmoState } from "../../../recoil/atoms/OnGizmoState";
import Object3D from "../Object3D";

const RoomObjects = () => {
  const placedObjectsUrl =
    "https://3dr-data.io.naver.com/v1/file/3DR/poc/1111111400/scene/object.json?1743387906350";

  const [placedObjects, setPlacedObjects] = useState();
  const [objList, setObjList] = useRecoilState(ObjListState);
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);

  useEffect(() => {
    axios.get(placedObjectsUrl).then((res) => {
      setPlacedObjects(res.data.objects);
    });
  }, []);

  return (
    <>
      {placedObjects
        ? placedObjects.map((e, index) => {
            const key = `placedObject` + e.name + index;
            const glbUrl = objList[e.name]["mesh"];
            const name = e.name;

            return (
              <Select
                position={[e.tx, e.ty, e.tz]}
                rotation={[e.rx, e.ry, e.rz]}
                scale={[e.sx, e.sy, e.sz]}
                enabled={selectedObj === e.name}
                key={key}
              >
                <Object3D meshPath={glbUrl} name={name} />
              </Select>
            );
          })
        : null}
    </>
  );
};

export default RoomObjects;
