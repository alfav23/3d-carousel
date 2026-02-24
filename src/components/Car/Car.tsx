import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";

export default function Car() {
    const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    )
}