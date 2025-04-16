import { useEffect, useRef, useState } from "react";
import url from "../../constants/url";
import axios from "axios";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useRecoilState } from "recoil";
import { SelectedObjState } from "../../recoil/atoms/SelectedObjState";
import { ObjLoaderState } from "../../recoil/atoms/ObjLoaderState";
import * as THREE from "three";
import ObjectControlModal from "../etc/ObjectControlModal";
import { ObjModalState } from "../../recoil/atoms/ObjModalState";
import { OnGizmoState } from "../../recoil/atoms/OnGizmoState";
import { Edges, PivotControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Object3D = ({ meshPath, name, position, rotation, scale }) => {
  const [gltf, setGltf] = useState(null);
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);
  const [objLoader, setObjLoader] = useRecoilState(ObjLoaderState);
  const [objModal, setObjModal] = useRecoilState(ObjModalState);
  const [onGizmo, setOnGizmo] = useRecoilState(OnGizmoState);
  const [htmlPosition, setHtmlPosition] = useState(new THREE.Vector3());
  const meshRef = useRef();
  const boxRef = useRef();
  const { scene, gl, camera, raycaster } = useThree(); // Access R3F context

  // Load GLTF model
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

  // Set up Box3Helper and improve precision
  useEffect(() => {
    if (gltf && meshRef.current) {
      const box = new THREE.Box3().setFromObject(meshRef.current);
      const helper = new THREE.Box3Helper(box, 0xffffff);
      helper.visible = false;
      meshRef.current.add(helper);
      boxRef.current = helper;

      // Optional: Tighten the bounding box for better precision
      meshRef.current.traverse((child) => {
        if (child.isMesh) {
          child.geometry.computeBoundingBox();
        }
      });

      return () => {
        scene.remove(helper);
      };
    }
  }, [gltf, scene]);

  // Custom pointer event handlers with improved precision

  if (!gltf) return null;

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <PivotControls
        depthTest={false}
        scale={0.5}
        onDragStart={() => setOnGizmo(true)}
        onDrag={() => {}}
        onDragEnd={() => setOnGizmo(false)}
        visible={selectedObj === name}
        disableAxes={selectedObj !== name}
        disableSliders={selectedObj !== name}
        disableRotations={selectedObj !== name}
      >
        <primitive ref={meshRef} object={gltf.scene} name={name}>
          {name === objModal ? (
            <ObjectControlModal
              scene={gltf.scene.matrix}
              name={name}
              meshPath={meshPath}
              position={htmlPosition}
            />
          ) : null}
        </primitive>
      </PivotControls>
    </group>
  );
};

export default Object3D;
