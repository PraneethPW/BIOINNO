import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const FloatingSphere: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[1.4, 64, 64]} />
      <meshStandardMaterial
        color="#22c55e"
        metalness={0.4}
        roughness={0.1}
        emissive="#16a34a"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
};

const ThreeHeroCanvas: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      className="h-full w-full"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 4, 4]} intensity={0.8} />
      <FloatingSphere />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
      />
    </Canvas>
  );
};

export default ThreeHeroCanvas;
