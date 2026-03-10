import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Container ({ children }) {
    return (
        <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
            <Canvas id="canvas"
            camera={{ position: [0, 0, 5], near: 0.1, far: 1000, fov: 75}}
            innerHeight={window.innerHeight}
            >
                <Suspense fallback={null}>
                    { children }
                    <OrbitControls />
                    <Environment preset="sunset" background />
                </Suspense>
            </Canvas>
        </div>
    )
}