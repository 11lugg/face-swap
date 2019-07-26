import React from "react";
import "./App.css";
import ScaryFace from "./components/ScaryFace";

function App() {
  return (
    <div>
      <ScaryFace rotate={1800} />
      <ScaryFace rotate={12} />
      <ScaryFace rotate={70} />
      <ScaryFace rotate={3000000} />
      <ScaryFace rotate={250} />
      <ScaryFace rotate={70} />
    </div>
  );
}

export default App;
