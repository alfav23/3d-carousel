import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

export default function Car({ url = "/E24_Materials.gltf" }) {
    const gltf = useLoader(GLTFLoader, url);
     useFrame(({ clock }) => {
        const turn = clock.getElapsedTime()/2;
        gltf.current.rotation.y = turn;
    });
    return (
        <>
            <primitive ref={gltf} object={gltf.scene} scale={1} />
        </>
    );
}