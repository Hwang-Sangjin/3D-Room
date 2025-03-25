const Plane = (props) => {
  return (
    <mesh
      {...props}
      receiveShadow
      position={[0, 0, -10]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[100, 30, 8, 8]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default Plane;
