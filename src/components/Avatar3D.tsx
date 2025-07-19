"use client"; // Mark this as a Client Component in Next.js

import React, { Suspense, useEffect, useRef, useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Environment } from "@react-three/drei";

// Memoized Model component for better performance
const Model = memo(({ url }: { url: string }) => {
  const group = useRef(null); // Reference to the model group
  const { scene, animations } = useGLTF(url); // Load the model and animations
  const { actions } = useAnimations(animations, group); // Get animation actions

  // Play the first animation
  useEffect(() => {
    if (actions && actions[animations[0]?.name]) {
      const animation = actions[animations[0].name]
      if (animation) animation.play();
    }
  }, [actions, animations]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={1} position={[0, -0.7, 0]} />
    </group>
  );
});

Model.displayName = 'Model';

// Loading fallback component
const ModelLoader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

export default function Avatar3D() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Check on window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Performance settings based on device
  const performanceSettings = {
    mobile: {
      pixelRatio: 1,
      antialias: false,
      shadowMap: false,
      dpr: [1, 2] as [number, number],
    },
    desktop: {
      pixelRatio: 2,
      antialias: true,
      shadowMap: true,
      dpr: [1, 2] as [number, number],
    }
  };

  const settings = isMobile ? performanceSettings.mobile : performanceSettings.desktop;

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{
          position: isMobile ? [0, 4, 1] : [0.1, 4, 1], // Adjust camera for mobile
          fov: isMobile ? 30 : 40, // Adjust field of view for mobile
        }}
        style={{ width: "100%", height: isMobile ? "400px" : "600px" }} // Adjust height for mobile
        gl={{
          antialias: settings.antialias,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={settings.dpr}
        onCreated={() => setIsLoaded(true)}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        
        {/* Environment (optional) */}
        <Environment preset="warehouse"/>

        {/* 3D Model */}
        <Suspense fallback={<ModelLoader />}>
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
          enableDamping={true} // Smooth controls
          dampingFactor={0.05} // Damping factor
        />
      </Canvas>
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80">
          <ModelLoader />
        </div>
      )}
    </div>
  );
}