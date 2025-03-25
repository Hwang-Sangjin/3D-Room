import TableArr from "./Table";
import ChairArr from "./Chair";
import DeskArr from "./Desk";
import SofaArr from "./Sofa";
import BedArr from "./Bed";
import StorageArr from "./Storage";

const FurnitureGroup = () => {
  return (
    <>
      {TableArr.map((e, index) => {
        const position = [
          Math.floor(index % 2) * 5 - 5,
          0,
          -Math.floor(index / 2) * 2,
        ];
        const key = `table${index}`;

        return <group key={key}>{e({ position })}</group>;
      })}

      {ChairArr.map((e, index) => {
        const position = [
          Math.floor(index % 2) * 3 + 3,
          0,
          -Math.floor(index / 2) * 2,
        ];
        const key = `chair${index}`;

        return <group key={key}> {e({ position })}</group>;
      })}

      {DeskArr.map((e, index) => {
        const position = [
          Math.floor(index % 2) * 3 + 9,
          0,
          -Math.floor(index / 2) * 2,
        ];
        const key = `desk${index}`;

        return <group key={key}> {e({ position })}</group>;
      })}

      {SofaArr.map((e, index) => {
        const position = [16, 0, -index * 3];
        const key = `sofa${index}`;

        return <group key={key}>{e({ position })}</group>;
      })}

      {BedArr.map((e, index) => {
        const position = [12, 0, -index * 2];
        const key = `bed${index}`;

        return <group key={key}>{e({ position })}</group>;
      })}

      {StorageArr.map((e, index) => {
        const position = [28, 0, -index * 3];
        const key = `storage${index}`;

        return <group key={key}> {e({ position })}</group>;
      })}
    </>
  );
};

export default FurnitureGroup;
