import { useNavigate } from "react-router";

const EditorViewerUI = ({ type, estateID }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={() => {
          if (type === "editor") {
            navigate(`/viewer?estateID=${estateID}`);
          } else {
            navigate(`/editor?estateID=${estateID}`);
          }
        }}
      >
        {type === "editor" ? "Switch to Viewer" : "Switch to Editor"}
      </button>
      {/* Add more buttons or UI elements here if needed */}
      {/* Example: <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Another Action</button> */}
    </div>
  );
};

export default EditorViewerUI;
