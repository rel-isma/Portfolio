"use client"; // Mark this as a Client Component in Next.js

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Environment } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const group = useRef(null); // Reference to the model group
  const { scene, animations } = useGLTF(url); // Load the model and animations
  const { actions } = useAnimations(animations, group); // Get animation actions

  // Play the first animation
  useEffect(() => {
    if (actions && actions[animations[0].name]) {
      const animation = actions[animations[0].name]
      if (animation) animation.play();
    }
  }, [actions, animations]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={1} position={[0, -0.7, 0]} />
    </group>
  );
}

export default function Avatar3D() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Check on window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <Canvas
      camera={{
        position: isMobile ? [0, 6, 7] : [0.1, 4, 1], // Adjust camera for mobile
        fov: isMobile ? 30 : 40, // Adjust field of view for mobile
      }}
      style={{ width: "100%", height: isMobile ? "400px" : "600px" }} // Adjust height for mobile
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      {/* <pointLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} /> */}
        {/* <directionalLight position={[0, 2, 0]} intensity={1} />
      <directionalLight position={[0, 5, -8]} intensity={1} />
      <directionalLight position={[0, 5, 8]} intensity={1} /> */}

      {/* Environment (optional) */}
      <Environment preset="warehouse"/>

      {/* 3D Model */}
      <Suspense fallback={null}>
        <Model url="/model.glb" />
      </Suspense>

      {/* OrbitControls with zoom and rotation */}
      <OrbitControls
        enableZoom={true} // Allow zooming
        enablePan={false} // Disable panning
        minDistance={isMobile ? 5 : 4} // Adjust zoom for mobile
        maxDistance={isMobile ? 10 : 9} // Adjust zoom for mobile
        minPolarAngle={Math.PI / 4} // Limit vertical rotation
        maxPolarAngle={Math.PI / 2} // Limit vertical rotation
        autoRotate={true} // Enable auto-rotation
        autoRotateSpeed={1} // Speed of auto-rotation
      />
    </Canvas>
  );
}