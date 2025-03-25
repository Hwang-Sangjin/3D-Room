import ETC1Arr from "./ETC1";

const ETCGroup = () => {
  return (
    <>
      {ETC1Arr.map((e, index) => {
        const position = [
          -Math.floor(index % 2) * 1 - 23,
          0,
          -Math.floor(index / 2) * 2,
        ];
        const key = `etc1${index}`;

        return <group key={key}>{e({ position })}</group>;
      })}
    </>
  );
};

export default ETCGroup;
