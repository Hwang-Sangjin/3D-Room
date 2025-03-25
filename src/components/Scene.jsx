import { useCallback, useEffect, useRef, useState } from "react";
import IloomChair1 from "./3Dmodel/Iloom/IloomChair1";
import IloomChair2 from "./3Dmodel/Iloom/IloomChair2";
import Plane from "./Plane";
import { debounce } from "lodash";
import { Select } from "@react-three/postprocessing";
import * as THREE from "three";

const Scene = () => {
  const [hovered, hover] = useState(null);
  const [onMoving, setOnMoving] = useState(false);
  const [selectedObj, setSelectedObj] = useState(null);
  const [mouse2D, setMouse2D] = useState();
  const [savedTarget, setSavedTarget] = useState([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1, 0, 0),
  ]);
  const [pointer] = useState(() => new THREE.Vector3(0, -2, 0));
  // Debounce hover a bit to stop the ticker from being erratic
  const debouncedHover = useCallback(debounce(hover, 30), []);
  const over = (name) => (e) => (e.stopPropagation(), debouncedHover(name));

  const handleClick = useCallback(() => {
    if (selectedObj) {
      setSelectedObj(null);
      setOnMoving(false);
    } else {
      setOnMoving(true);
    }
  }, [selectedObj]);

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <>
      <Plane
        onPointerMove={(e) => {
          if (onMoving && selectedObj) {
            e.stopPropagation();
            setSavedTarget((prev) => {
              if (selectedObj === "Chair1") {
                return [e.point.clone(), prev[1]];
              } else {
                return [prev[0], e.point.clone()];
              }
            });
            // if ( !isExpanded ) pointer.copy( e.point );
            pointer.copy(e.point);
          }
        }}
      />
      {/* <ETCGroup />
                    <ElectronicsGroup />
            
                    <FurnitureGroup /> */}
      <Select
        enabled={hovered === "Chair1"}
        onPointerOver={over("Chair1")}
        onPointerOut={() => debouncedHover(null)}
        onClick={() => {
          setSelectedObj("Chair1");
        }}
      >
        <IloomChair1 position={savedTarget[0]} />
      </Select>
      <Select
        enabled={hovered === "Chair2"}
        onPointerOver={over("Chair2")}
        onPointerOut={() => debouncedHover(null)}
        onClick={() => {
          setSelectedObj("Chair2");
        }}
      >
        <IloomChair2 position={savedTarget[1]} />
      </Select>
    </>
  );
};

export default Scene;
