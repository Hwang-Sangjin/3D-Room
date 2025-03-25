import DigitalArr from "./Digital";
import LightArr from "./Light";
import televisionArr from "./Television";

const ElectronicsGroup = () => {
  return (
    <>
      {televisionArr.map((e, index) => {
        const position = [
          -Math.floor(index % 2) * 5 - 10,
          0,
          -Math.floor(index / 2) * 2,
        ];
        const key = `television${index}`;
        return <group key={key}>{e({ position })}</group>;
      })}

      {DigitalArr.map((e, index) => {
        const position = [
          -Math.floor(index % 2) * 2 - 18,
          0,
          -Math.floor(index / 2) * 2,
        ];
        const key = `television${index}`;
        return <group key={key}>{e({ position })}</group>;
      })}

      {LightArr.map((e, index) => {
        const position = [
          -Math.floor(index % 2) * 1 - 21,
          0,
          -Math.floor(index / 2) * 2,
        ];
        const key = `light${index}`;
        return <group key={key}>{e({ position })}</group>;
      })}
    </>
  );
};

export default ElectronicsGroup;
