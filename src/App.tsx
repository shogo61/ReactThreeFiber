"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

function StaticBox() {
  return (
    <Box args={[1, 1, 1]} scale={1.5}>
      <meshStandardMaterial color="royalblue" />
    </Box>
  );
}

export default function App() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <StaticBox />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          makeDefault
        />
      </Canvas>
      <div className="absolute top-0 left-0 p-4 text-white bg-black bg-opacity-50 rounded">
        <p>ドラッグして回転 | ズーム: スクロール | 移動: Shift+ドラッグ</p>
        <p>キーボード操作: 矢印キーで回転、+/-でズーム</p>
      </div>
    </div>
  );
}
