"use client"; // Mark this as a Client Component in Next.js

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Environment } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const group = useRef(); // Reference to the model group
  const { scene, animations } = useGLTF(url); // Load the model and animations
  const { actions } = useAnimations(animations, group); // Get animation actions

  // Play the first animation
  useEffect(() => {
    if (actions && actions[animations[0].name]) {
      actions[animations[0].name].play();
    }
  }, [actions, animations]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={1} position={[0, -0.7, 0]} />
    </group>
  );
}

export default function Avatar3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }} // Adjusted camera position
      style={{ width: "100%", height: "600px" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      {/* Environment (optional) */}
      <Environment preset="city" />

      {/* 3D Model */}
      <Suspense fallback={null}>
        <Model url="/model.glb" />
      </Suspense>

      {/* OrbitControls with zoom and rotation */}
      <OrbitControls
        // enableZoom={true} // Allow zooming
        // enablePan={false} // Disable panning
        minDistance={2} // Minimum zoom distance
        maxDistance={7} // Maximum zoom distance
        minPolarAngle={Math.PI / 4} // Limit vertical rotation
        maxPolarAngle={Math.PI / 2} // Limit vertical rotation
        autoRotate={true} // Enable auto-rotation
        autoRotateSpeed={1} // Speed of auto-rotation
      />
    </Canvas>
  );
}