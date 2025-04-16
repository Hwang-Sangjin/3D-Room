import { useGLTF } from "@react-three/drei";
import axios from "axios";
import { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import RoomObjects from "./RoomObjects";

const Room = () => {
  const url =
    "https://3dr-data.io.naver.com/v1/file/3DR/poc/1111111400/scene/mesh/mesh.glb?1743387906350";

  const { scene } = useGLTF(url);

  return (
    <group>
      <primitive
        position={[-5, 1.3, -10]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        object={scene}
      ></primitive>
      <group
        position={[-5, 1.3, -10]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <RoomObjects />
      </group>
    </group>
  );
};

export default Room;
