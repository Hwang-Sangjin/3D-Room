import { Route, Routes } from "react-router";
import "./App.css";

import FiberContainer from "./components/FiberContainer";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<FiberContainer />} />
    </Routes>
  );
}
export default App;
