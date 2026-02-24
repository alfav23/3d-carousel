
import { Canvas } from '@react-three/fiber';
import Car from "./components/Car/Car";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";


export default function App() {
  return (
    <div id="canvas-container">
      <Canvas 
        camera={{ position: [0, 0, 10], aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000, fov: 75}} 
      >
        <ambientLight color={0xffffff} intensity={1} />
        <directionalLight color={0xc90000} position={[0, 50, 50]} intensity={1} />
        <directionalLight color={0xfff400} position={[0, 50, -50]} intensity={1} />
        <directionalLight color={0x0004ff} position={[0, 50, 0]} intensity={1} />
        <Suspense fallback={null}>
          <Car />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
        {/* <Car /> */}
      </Canvas>
    </div>
  );
}