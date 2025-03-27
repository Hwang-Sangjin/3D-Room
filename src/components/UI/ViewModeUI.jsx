import { useRecoilState } from "recoil";
import { ViewModeState } from "../../recoil/atoms/ViewModeState";

const ViewModeUI = () => {
  const [viewMode, setViewMode] = useRecoilState(ViewModeState);
  return (
    <div className="fixed flex flex-col top-4 right-4 h-screen ">
      <button
        className={`m-2 bg-gray-400 p-2 rounded-md z-50 focus:outline-none transition-transform duration-300 ease-in-out transform"
        }`}
        onClick={() => {
          setViewMode("2D");
        }}
      >
        2D
      </button>
      <button
        className={`m-2 bg-gray-400 p-2 rounded-md z-50 focus:outline-none transition-transform duration-300 ease-in-out transform"
        }`}
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
