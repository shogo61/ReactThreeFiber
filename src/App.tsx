"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { useRef, useState } from "react";

function StaticBox() {
  return (
    <Box args={[1, 1, 1]} scale={1.5}>
      <meshStandardMaterial color="#fdd000" />
    </Box>
  );
}

function Scene({ resetTrigger }: { resetTrigger: boolean }) {
  const controlsRef = useRef<any>(null); // any型を指定
  const { camera } = useThree();

  if (resetTrigger) {
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    controlsRef.current?.reset();
  }

  return (
    <>
      <OrbitControls ref={controlsRef} makeDefault />
    </>
  );
}

export default function App() {
  const [resetTrigger, setResetTrigger] = useState(false);

  const resetCamera = () => {
    setResetTrigger(true); // 直接trueを設定
    setTimeout(() => setResetTrigger(false), 0); // 非同期でfalseに戻す
  };

  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={3} />
        <pointLight position={[-3, -3, -3]} intensity={20} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={20}
        />
        <StaticBox />
        <Scene resetTrigger={resetTrigger} />{" "}
      </Canvas>
      <button
        className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={resetCamera}
      >
        カメラリセット
      </button>
    </div>
  );
}
