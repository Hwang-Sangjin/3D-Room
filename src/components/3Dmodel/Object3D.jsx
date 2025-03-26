import { useEffect, useLayoutEffect, useRef, useState } from "react";
import url from "../../constants/url";
import axios from "axios";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useRecoilState } from "recoil";
import { SelectedObjState } from "../../recoil/atoms/SelectedObjState";
import { ObjLoaderState } from "../../recoil/atoms/ObjLoaderState";
import * as THREE from "three";
import ObjectControlModal from "../etc/ObjectControlModal";
import { ObjModalState } from "../../recoil/atoms/ObjModalState";

const Object3D = ({ meshPath, name, position }) => {
  const [gltf, setGltf] = useState(null);
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);
  const [objLoader, setObjLoader] = useRecoilState(ObjLoaderState);
  const [objModal, setObjModal] = useRecoilState(ObjModalState);
  const [htmlPosition, setHtmlPosition] = useState(new THREE.Vector3());
  const meshRef = useRef();

  useEffect(() => {
    if (meshPath) {
      setObjLoader(true);
      const getMeshUrl = url.MART_API_URL + "objects/" + meshPath;

      axios
        .get(getMeshUrl, { responseType: "arraybuffer" })
        .then((res) => {
          setObjLoader(false);
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
          setObjLoader(false);
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
      onClick={(e) => {
        //setSelectedObj(name);
        setObjModal(null);
      }}
      onContextMenu={(e) => {
        e.stopPropagation();
        setObjModal(name);
      }}
    >
      {name === objModal ? (
        <ObjectControlModal
          scene={gltf.scene.matrix}
          name={name}
          meshPath={meshPath}
          position={htmlPosition}
        />
      ) : null}
    </primitive>
  );
};

export default Object3D;
