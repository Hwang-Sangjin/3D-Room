import { Route, Routes } from "react-router";
import "./App.css";

import Home from "./components/Home";
import ViewerFiberContainer from "./components/Viewer/ViewerFiberContainer";
import EditorFiberContainer from "./components/Editor/EditorFiberContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editor" element={<EditorFiberContainer />} />
      <Route path="/viewer" element={<ViewerFiberContainer />} />
    </Routes>
  );
}
export default App;
