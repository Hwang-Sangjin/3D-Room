import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import * as THREE from "three";
import { useEffect, useState } from "react";

const PlyTest = () => {
  const [ply, setPly] = useState();

  useEffect(() => {
    const loader = new PLYLoader();
    loader.load("/18F_2d_slice.ply", (geometry) => {
      geometry.computeVertexNormals();
      const material = new THREE.PointsMaterial({
        color: 0x888888,
        size: 0.05,
      });
      const points = new THREE.Points(geometry, material);
      points.rotateX(-Math.PI / 2);
      setPly(points);
    });
  }, []);

  return <>{ply ? <primitive object={ply} /> : null}</>;
};

export default PlyTest;
