import { useRecoilState } from "recoil";
import { ViewModeState } from "../../recoil/atoms/ViewModeState";

const ViewModeUI = () => {
  const [viewMode, setViewMode] = useRecoilState(ViewModeState);
  return (
    <div className="fixed flex flex-col top-4 right-4 h-screen ">
      <button
        className="bg-gray-500 text-white px-4 py-2 m-2 rounded-md shadow-md hover:bg-gray-600 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={() => {
          setViewMode("2D");
        }}
      >
        2D
      </button>
      <button
        className="bg-gray-500 text-white px-4 py-2 m-2 rounded-md shadow-md hover:bg-gray-600 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={() => {
          setViewMode("3D");
        }}
      >
        3D
      </button>
    </div>
  );
};

export default ViewModeUI;
