import { useRecoilState } from "recoil";
import { ObjListState } from "../../recoil/atoms/ObjListState";
import { useEffect } from "react";
import url from "../../constants/url";

const SideItem = ({ imagePath, meshPath }) => {
  return (
    <>
      <img src={url.MART_API_URL + "objects/" + imagePath} />
    </>
  );
};

export default SideItem;
