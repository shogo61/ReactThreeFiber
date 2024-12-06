"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

function StaticBox() {
  return (
    <Box args={[1, 1, 1]} scale={1.5}>
      <meshStandardMaterial color="teal" />
    </Box>
  );
}

export default function App() {
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [3, 3, 3] }}>
        {/* <color attach="background" args={["#222222"]} /> // 背景色 */}
        <ambientLight intensity={3} /> // 全体的な環境光
        <pointLight position={[-3, -3, -3]} intensity={20} /> // 放射状の光
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={20}
        /> // 線状の光
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
