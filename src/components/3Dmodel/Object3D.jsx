import { useEffect, useRef, useState } from "react";
import url from "../../constants/url";
import axios from "axios";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useRecoilState } from "recoil";
import { SelectedObjState } from "../../recoil/atoms/SelectedObjState";

const Object3D = ({ meshPath, name, position }) => {
  const [gltf, setGltf] = useState(null);
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);
  const meshRef = useRef();

  useEffect(() => {
    if (meshPath) {
      const getMeshUrl = url.MART_API_URL + "objects/" + meshPath;

      axios
        .get(getMeshUrl, { responseType: "arraybuffer" })
        .then((res) => {
          const blob = new Blob([res.data]);
          const fileReader = new FileReader();

          fileReader.onload = (event) => {
            const loader = new GLTFLoader();
            loader.parse(event.target.result, "", (gltf) => {
              setGltf(gltf);
            });
          };

          fileReader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Error loading GLB:", error);
        });
    }
  }, [meshPath]);

  if (!gltf) return null;

  return (
    <primitive
      ref={meshRef}
      object={gltf.scene}
      position={position}
      name={name}
      onClick={() => {
        setSelectedObj(name);
      }}
    />
  );
};

export default Object3D;
