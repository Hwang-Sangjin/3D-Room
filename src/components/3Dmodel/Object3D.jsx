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

const Object3D = ({ position, addedObjGroupRef, meshPath, name }) => {
  const [gltf, setGltf] = useState(null);
  const [selectedObj, setSelectedObj] = useRecoilState(SelectedObjState);
  const [objLoader, setObjLoader] = useRecoilState(ObjLoaderState);
  const [objModal, setObjModal] = useRecoilState(ObjModalState);
  const [onGizmo, setOnGizmo] = useRecoilState(OnGizmoState);
  const [htmlPosition, setHtmlPosition] = useState(new THREE.Vector3());
  const meshRef = useRef();
  const groupRef = useRef();
  const boxRef = useRef();
  const { scene, gl, camera, raycaster } = useThree(); // Access R3F context

  const snapThreshold = 0.2; // Adjust this as needed

  const handleDrag = () => {
    const movingObject = groupRef.current;
    if (!movingObject) return;

    // Get the moving object's bounding box
    const movingBox = new THREE.Box3().setFromObject(movingObject);
    const movingCenter = new THREE.Vector3();
    movingBox.getCenter(movingCenter);
    const movingSize = new THREE.Vector3();
    movingBox.getSize(movingSize);

    addedObjGroupRef.current.children.forEach((otherObject) => {
      if (otherObject.children[0] === movingObject) return;

      // Get the other object's bounding box
      const otherBox = new THREE.Box3().setFromObject(otherObject.children[0]);
      const otherCenter = new THREE.Vector3();
      otherBox.getCenter(otherCenter);
      const otherSize = new THREE.Vector3();
      otherBox.getSize(otherSize);

      // **Snap to the closest edge of the other object**
      if (Math.abs(movingBox.min.x - otherBox.max.x) < snapThreshold) {
        movingObject.position.x = otherBox.max.x + movingSize.x / 2;
      }
      if (Math.abs(movingBox.max.x - otherBox.min.x) < snapThreshold) {
        movingObject.position.x = otherBox.min.x - movingSize.x / 2;
      }
      if (Math.abs(movingBox.min.x - otherBox.min.x) < snapThreshold) {
        movingObject.position.x = otherBox.min.x + movingSize.x / 2;
      }
      if (Math.abs(movingBox.max.x - otherBox.max.x) < snapThreshold) {
        movingObject.position.x = otherBox.max.x - movingSize.x / 2;
      }

      if (Math.abs(movingBox.min.y - otherBox.max.y) < snapThreshold) {
        movingObject.position.y = otherBox.max.y + movingSize.y / 2;
      }
      if (Math.abs(movingBox.max.y - otherBox.min.y) < snapThreshold) {
        movingObject.position.y = otherBox.min.y - movingSize.y / 2;
      }
      if (Math.abs(movingBox.min.y - otherBox.min.y) < snapThreshold) {
        movingObject.position.y = otherBox.min.y + movingSize.y / 2;
      }
      if (Math.abs(movingBox.max.y - otherBox.max.y) < snapThreshold) {
        movingObject.position.y = otherBox.max.y - movingSize.y / 2;
      }

      if (Math.abs(movingBox.min.z - otherBox.max.z) < snapThreshold) {
        movingObject.position.z = otherBox.max.z + movingSize.z / 2;
      }
      if (Math.abs(movingBox.max.z - otherBox.min.z) < snapThreshold) {
        movingObject.position.z = otherBox.min.z - movingSize.z / 2;
      }
      if (Math.abs(movingBox.min.z - otherBox.min.z) < snapThreshold) {
        movingObject.position.z = otherBox.min.z + movingSize.z / 2;
      }
      if (Math.abs(movingBox.max.z - otherBox.max.z) < snapThreshold) {
        movingObject.position.z = otherBox.max.z - movingSize.z / 2;
      }
    });
  };
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
    <group position={position} ref={groupRef}>
      <PivotControls
        depthTest={false}
        scale={0.5}
        onDragStart={() => setOnGizmo(true)}
        onDrag={() => {
          handleDrag();
        }}
        onDragEnd={() => {
          setOnGizmo(false);
        }}
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
