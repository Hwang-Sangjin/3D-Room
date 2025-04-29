import { Route, Routes } from "react-router";
import "./App.css";

import FiberContainer from "./components/FiberContainer";
import Home from "./components/Home";
import ViewerFiberContainer from "./components/Viewer/ViewerFiberContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editor" element={<FiberContainer />} />
      <Route path="/viewer" element={<ViewerFiberContainer />} />
    </Routes>
  );
}
export default App;
