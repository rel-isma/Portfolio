"use client"; // Mark this as a Client Component in Next.js

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Environment } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ZoomIn, X, RotateCw, Move3D } from "lucide-react";

function Model({ url }: { url: string }) {
  const group = useRef(null);
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations[0] && actions[animations[0].name]) {
      actions[animations[0].name]?.play();
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
  const [isInteractionMode, setIsInteractionMode] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle ESC to exit interaction mode
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isInteractionMode) {
        setIsInteractionMode(false);
      }
    };

    if (isInteractionMode) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isInteractionMode]);

  const enterInteractionMode = () => setIsInteractionMode(true);
  const exitInteractionMode = () => setIsInteractionMode(false);

  return (
    <div ref={canvasRef} className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center">
      {/* Initial Card - Only show when not in interaction mode */}
      {!isInteractionMode && (
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 max-w-sm sm:max-w-md mx-4 border border-gray-200 dark:border-gray-700">
          <div className="text-center space-y-4 sm:space-y-6">
            {/* Icon */}
            <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Move3D className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Interactive 3D Avatar
            </h3>
            
            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Click the button below to explore my 3D avatar. You can rotate, zoom in/out, and move around to see every detail!
            </p>
            
            {/* Button */}
            <Button
              onClick={enterInteractionMode}
              className="w-full bg-gradient-to-r from-primary to-primary/80 text-white border-0 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <Move3D className="mr-2 h-5 w-5" />
              <span className="font-semibold">Explore My Avatar</span>
            </Button>
          </div>
        </div>
      )}

      {/* Interaction Mode Modal */}
      {isInteractionMode && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={exitInteractionMode}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative bg-white dark:bg-secondary rounded-3xl shadow-2xl max-w-sm sm:max-w-md md:max-w-4xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Move3D className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Meet My 3D Avatar
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                      Drag to rotate • Scroll to zoom • Right-click to pan • Press ESC to exit
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={exitInteractionMode}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>

              {/* Avatar in modal */}
              <div className="p-4 sm:p-6">
                <Canvas
                  camera={{
                    position: isMobile ? [0, 2, 3] : [0, 2, 2],
                    fov: isMobile ? 55 : 45,
                  }}
                  style={{
                    width: "100%",
                    height: isMobile ? "300px" : "400px",
                    borderRadius: "12px",
                  }}
                  gl={{
                    preserveDrawingBuffer: true,
                    antialias: true,
                    alpha: true,
                  }}
                >
                  <ambientLight intensity={0.7} />
                  <pointLight position={[0, 2, 2]} intensity={0.5} />
                  <Environment preset="warehouse" />

                  <Suspense
                    fallback={
                      <mesh>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial color="gray" />
                      </mesh>
                    }
                  >
                    <Model url="/model.glb" />
                  </Suspense>

                  <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    minDistance={1.0}
                    maxDistance={isMobile ? 10 : 8}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI}
                    autoRotate={false}
                    enableDamping={true}
                    dampingFactor={0.02}
                    zoomSpeed={isMobile ? 0.6 : 0.8}
                    panSpeed={isMobile ? 0.6 : 0.8}
                    rotateSpeed={isMobile ? 0.4 : 0.5}
                  />
                </Canvas>
              </div>

              {/* Instructions */}
              <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-3 sm:p-4 border border-primary/20">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <RotateCw className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span className="font-medium">Drag to rotate</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span className="font-medium">Scroll to zoom</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Move3D className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span className="font-medium">Right-click to pan</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <X className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span className="font-medium">ESC to exit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
