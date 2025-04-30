import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "react-router";
import {
  Bvh,
  Effects,
  Environment,
  Grid,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { getCookie, setAuthCookie } from "../utils/cookieUtils";
import url from "../constants/url";
import Room from "./3Dmodel/Room/Room";
import { useRecoilState } from "recoil";
import { Selection } from "@react-three/postprocessing";
import RoomScene from "./RoomScene";
import { ViewModeState } from "../recoil/atoms/ViewModeState";

function RoomExperience() {
  const [searchParams] = useSearchParams();
  const estateID = searchParams.get("estateID");
  const [sceneData, setSceneData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useRecoilState(ViewModeState);

  // Set fake authorization cookie (temporary)
  useEffect(() => {
    setAuthCookie("test", "0808", 1); // 1 day expiration
  }, []);

  // // Fetch scene data
  // useEffect(() => {
  //   if (!estateID) {
  //     setError("No estate ID provided");
  //     setLoading(false);
  //     return;
  //   }

  //   const fetchSceneData = async () => {
  //     setLoading(true);
  //     try {
  //       const storedAuth = getCookie("editor-auth");

  //       const response = await fetch(
  //         `${url.MART_API_URL}${estateID}/scene/object.json?${Date.now()}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch scene data");
  //       }

  //       const data = await response.json();
  //       setSceneData(data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchSceneData();
  // }, [estateID]);

  // if (loading) {
  //   return <div className="p-4 text-center text-gray-600">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  // }

  return (
    <Canvas camera={{ position: [0, 12, 0] }}>
      <Suspense fallback={null}>
        <Bvh firstHitOnly>
          <Environment preset="city" />
          <Selection>
            <Effects />
            <RoomScene estateID={estateID} />
          </Selection>
          <OrbitControls enableRotate={viewMode === "3D"} />
          <ambientLight intensity={1} />
          <directionalLight position={[-3, 5, 5]} intensity={2.5} />

          <axesHelper args={[5]} />
          {viewMode === "2D" ? (
            <Grid position={[0, 0, 0]} args={[40, 30]} />
          ) : null}
        </Bvh>
      </Suspense>
    </Canvas>
  );
}

export default RoomExperience;
