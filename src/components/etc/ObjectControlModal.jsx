import { Html } from "@react-three/drei";
import { SelectedObjState } from "../../recoil/atoms/SelectedObjState";
import { useRecoilState } from "recoil";
import { ObjModalState } from "../../recoil/atoms/ObjModalState";
import { AddedObjListState } from "../../recoil/atoms/AddedObjListState";

const ObjectControlModal = ({ name, meshPath, position, scene }) => {
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);
  const [objModal, setObjModal] = useRecoilState(ObjModalState);
  const [addedObjList, setAddedObjList] = useRecoilState(AddedObjListState);

  return (
    <Html distanceFactor={10}>
      <div className=" text-center p-2 bg-[#202035] text-white rounded-xl translate-x-10  -translate-y-40 before:absolute before:w-[1px] before:h-30 before:bg-[#202035] before:left-0.5">
        {name}
        <br />
        <button
          className="p-1"
          onClick={() => {
            setSelectedObj(name);
            setObjModal(null);
          }}
        >
          Move
        </button>
        <br />
        <button className="p-1" onClick={() => {}}>
          Rotate
        </button>
        <br />
        <button
          className="p-1"
          onClick={() => {
            setAddedObjList(
              addedObjList.filter((obj) => {
                return obj.name !== name;
              })
            );
            setObjModal(null);
          }}
        >
          Delete
        </button>
      </div>
    </Html>
  );
};

export default ObjectControlModal;
