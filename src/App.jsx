
import { Canvas } from '@react-three/fiber';
import Car from "./components/Car/Car";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div id="page" style={{ background: "black" || "white"}}>
      <NavBar />
      <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
        <Canvas id="canvas"
          camera={{ position: [0, 0, 5], near: 0.1, far: 1000, fov: 75}}
          innerHeight={window.innerHeight}
        >
          <Suspense fallback={null}>
            <Car />
            <OrbitControls />
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}