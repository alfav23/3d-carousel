import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import * as React from 'react';

function Scene({ children, active }) {
    const groupRef = useRef();
    const count = React.Children.count(children);
    const angle = (Math.PI * 2) / count;
    const targetRotation = useRef(0);

    useFrame((state, delta) => {
        if (groupRef.current) {
            targetRotation.current = -active * angle;
            groupRef.current.rotation.y += (targetRotation.current - groupRef.current.rotation.y) * delta * 2; // smooth lerp
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <group ref={groupRef}>
                {React.Children.map(children, (child, i) => (
                    <group key={i} position={[Math.cos(i * angle) * 6, 0, Math.sin(i * angle) * 6]}>
                        {child}
                    </group>
                ))}
            </group>
            {/* <OrbitControls /> */}
            {/* <Environment preset="city" background /> */}
            <Environment
                files='rooftop_night_2k.hdr'
                background
            />
        </>
    );
}

export default function Container ({ children, active = 0 }) {
    return (
        <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
            <Canvas id="canvas"
            camera={{ position: [-10, 2, 8], near: 0.1, far: 1000, fov: 75}}
            >
                <Suspense fallback={null}>
                <Scene active={active}>{children}</Scene>
                </Suspense>
            </Canvas>
        </div>
    )
}