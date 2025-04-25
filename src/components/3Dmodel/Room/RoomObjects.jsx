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
import { useSearchParams } from "react-router";

const RoomObjects = () => {
  const [searchParams] = useSearchParams();
  const estateID = searchParams.get("estateID");
  const [loading, setLoading] = useState(true);

  const [placedObjects, setPlacedObjects] = useState();
  const [objList, setObjList] = useRecoilState(ObjListState);
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);

  useEffect(() => {
    if (!estateID) {
      setError("No estate ID provided");
      setLoading(false);
      return;
    }

    axios
      .get(`${url.MART_API_URL}${estateID}/scene/object.json?${Date.now()}`)
      .then((res) => {
        setPlacedObjects(res.data.objects);
      });
  }, []);

  return (
    <>
      {/* {placedObjects
        ? placedObjects.map((e, index) => {
            const name = e.name.split("---")[0];
            const key = `placedObject` + name + index;
            const glbUrl = objList[name]["mesh"];

            return (
              <Object3D
                position={[e.tx, e.ty, e.tz]}
                rotation={[e.rx, e.ry, e.rz]}
                scale={[e.sx, e.sy, e.sz]}
                enabled={selectedObj === e.name}
                key={key}
                meshPath={glbUrl}
                name={name}
              />
            );
          })
        : null} */}
    </>
  );
};

export default RoomObjects;
