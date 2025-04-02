import { Center, PivotControls, useGLTF } from "@react-three/drei";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ObjListState } from "../../../recoil/atoms/ObjListState";
import url from "../../../constants/url";
import { SelectedObjState } from "../../../recoil/atoms/SelectedObjState";
import { ObjModalState } from "../../../recoil/atoms/ObjModalState";
import { OnGizmoState } from "../../../recoil/atoms/OnGizmoState";

const RoomObjects = () => {
  const placedObjectsUrl =
    "https://3dr-data.io.naver.com/v1/file/3DR/poc/1111111400/scene/object.json?1743387906350";

  const [placedObjects, setPlacedObjects] = useState();
  const [objList, setObjList] = useRecoilState(ObjListState);
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);
  const [objModal, setObjModal] = useRecoilState(ObjModalState);
  const [onGizmo, setOnGizmo] = useRecoilState(OnGizmoState);

  useEffect(() => {
    axios.get(placedObjectsUrl).then((res) => {
      setPlacedObjects(res.data.objects);
    });
  }, []);

  const updateBoxHelper = () => {
    console.log("update");
  };

  return (
    <>
      {placedObjects
        ? placedObjects.map((e, index) => {
            const key = `placedObject` + e.name + index;
            const glbUrl =
              url.MART_API_URL + "objects/" + objList[e.name]["mesh"];
            const { scene } = useGLTF(glbUrl);
            const name = e.name;

            return (
              <PivotControls
                offset={[e.tx, e.ty, e.tz]}
                rotation={[e.rx, e.ry, e.rz]}
                key={key}
                visible={selectedObj === name}
                disableAxes={selectedObj !== name}
                disableSliders={selectedObj !== name}
                disableRotations={selectedObj !== name}
                scale={0.5}
                onDragStart={() => {
                  setOnGizmo(true);
                }}
                onDrag={() => {
                  updateBoxHelper();
                }}
                onDragEnd={() => {
                  setOnGizmo(false);
                }}
              >
                <primitive
                  position={[e.tx, e.ty, e.tz]}
                  rotation={[e.rx, e.ry, e.rz]}
                  scale={[e.sx, e.sy, e.sz]}
                  object={scene}
                  onClick={(e) => {
                    console.log();
                    e.stopPropagation();
                    setSelectedObj(name);
                    setObjModal(null);
                  }}
                  onContextMenu={(e) => {
                    e.stopPropagation();
                    setObjModal(name);
                  }}
                />
              </PivotControls>
            );
          })
        : null}
    </>
  );
};

export default RoomObjects;
