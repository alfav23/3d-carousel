import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export default function Car() {
    const gltf = useLoader(GLTFLoader, "/E24_Materials.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    );
}