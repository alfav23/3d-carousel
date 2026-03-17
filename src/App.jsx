import Carousel from './components/Carousel/Carousel';
import Footer from "./components/Footer/Footer";
import Header from "./components/NavBar";

export default function App() {
  return (
    <div id="page" style={{ background: "black" || "white"}}>
      <Header />
      <Carousel />
      {/* <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
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
      </div> */}
      <Footer />
    </div>
  );
}