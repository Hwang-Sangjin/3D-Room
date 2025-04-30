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
import { getCookie, setAuthCookie } from "../../utils/cookieUtils";
import url from "../../constants/url";
import Room from "../3Dmodel/Room/Room";
import { useRecoilState } from "recoil";
import { Selection } from "@react-three/postprocessing";
import RoomScene from "./EditorScene";
import { ViewModeState } from "../../recoil/atoms/ViewModeState";
import { CookieDateState } from "../../recoil/atoms/CookieDateState";

function EditorExperience() {
  const [searchParams] = useSearchParams();
  const estateID = searchParams.get("estateID");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sceneData, setSceneData] = useState(null);
  const [viewMode, setViewMode] = useRecoilState(ViewModeState);
  const [cookieDate, setCookieDate] = useRecoilState(CookieDateState);

  // Set fake authorization cookie (temporary)
  useEffect(() => {
    setAuthCookie("test", "1234", 1); // 1 day expiration
  }, []);

  // Fetch scene data
  useEffect(() => {
    if (!estateID) {
      return;
    }

    const fetchSceneData = async () => {
      try {
        const storedAuth = getCookie("editor-auth");

        const tempDate = new Date();
        const response = await fetch(
          `${url.MART_API_URL}${estateID}/scene/object.json?${tempDate}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch scene data");
        }

        const data = await response.json();
        setCookieDate(tempDate);
        setSceneData(data.objects);
      } catch (err) {
        console.error("Error fetching scene data:", err);
      }
    };

    fetchSceneData();
  }, [estateID]);

  return (
    <Canvas camera={{ position: [0, 12, 0] }}>
      <Suspense fallback={null}>
        <Bvh firstHitOnly>
          <Environment preset="city" />
          <Selection>
            <Effects />
            <RoomScene estateID={estateID} sceneData={sceneData} />
          </Selection>
          <OrbitControls enableRotate={viewMode === "3D"} />
          <ambientLight color="#ffffff" intensity={1} />
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

export default EditorExperience;
