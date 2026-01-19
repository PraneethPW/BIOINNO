// components/DNAScene.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function DNAHelix() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.18;
    }
  });

  const radius = 1.25;
  const height = 6;
  const turns = 28;

  // Color palettes
  const strandA = ["#10b981", "#2dd4bf", "#34d399"]; // emerald → teal
  const strandB = ["#6366f1", "#3b82f6", "#0ea5e9"]; // indigo → blue

  const nodes = [];

  for (let i = 0; i < turns; i++) {
    const y = (i / turns) * height - height / 2;
    const angle = i * 0.55;

    const colorIndex = i % strandA.length;

    nodes.push(
      <mesh
        key={`a-${i}`}
        position={[
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius,
        ]}
      >
        <sphereGeometry args={[0.065, 18, 18]} />
        <meshStandardMaterial
          color={strandA[colorIndex]}
          emissive={strandA[colorIndex]}
          emissiveIntensity={0.55}
        />
      </mesh>
    );

    nodes.push(
      <mesh
        key={`b-${i}`}
        position={[
          Math.cos(angle + Math.PI) * radius,
          y,
          Math.sin(angle + Math.PI) * radius,
        ]}
      >
        <sphereGeometry args={[0.065, 18, 18]} />
        <meshStandardMaterial
          color={strandB[colorIndex]}
          emissive={strandB[colorIndex]}
          emissiveIntensity={0.5}
        />
      </mesh>
    );
  }

  return <group ref={group}>{nodes}</group>;
}

export default function DNAScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.45} />

      <pointLight
        position={[4, 4, 4]}
        intensity={1.3}
        color="#34d399"
      />
      <pointLight
        position={[-4, -4, -4]}
        intensity={1}
        color="#60a5fa"
      />

      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.45}>
        <DNAHelix />
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
