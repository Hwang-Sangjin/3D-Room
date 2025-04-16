import { useGLTF } from "@react-three/drei";

const RoomCollisionObjects = () => {
  const url =
    "https://3dr-data.io.naver.com/v1/file/3DR/poc/1111111400/scene/collision/collision.glb?1743387906350";

  const { scene } = useGLTF(url);

  return (
    <primitive
      visible={false}
      position={[-5, 1.3, -10]}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      object={scene}
    ></primitive>
  );
};

export default RoomCollisionObjects;
