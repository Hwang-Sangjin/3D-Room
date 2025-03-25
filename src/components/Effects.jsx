import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { EffectComposer, Outline } from "@react-three/postprocessing";

const Effects = () => {
  const { size } = useThree();

  return (
    <EffectComposer
      stencilBuffer
      disableNormalPass
      autoClear={false}
      multisampling={4}
    >
      <Outline
        visibleEdgeColor="white"
        hiddenEdgeColor="white"
        blur
        width={size.width * 1.25}
        edgeStrength={10}
      />
    </EffectComposer>
  );
};

export default Effects;
