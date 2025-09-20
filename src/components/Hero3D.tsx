import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

const FloatingShape = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<Mesh>(null);
  
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.5, 0.5]}
    >
      <mesh ref={meshRef} position={position}>
        <torusKnotGeometry args={[0.5, 0.2, 100, 16]} />
        <meshStandardMaterial 
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
      
      {/* Floating shapes */}
      <FloatingShape position={[-3, 2, 0]} color="#00ffff" />
      <FloatingShape position={[3, -2, 0]} color="#ff00ff" />
      <FloatingShape position={[0, 3, -2]} color="#ffff00" />
      
      {/* Central rotating torus */}
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={0.3}
      >
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[2, 0.5, 16, 100]} />
          <meshStandardMaterial 
            color="#00ffff"
            transparent
            opacity={0.6}
            emissive="#00ffff"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      {/* Particle field */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Float key={i} speed={Math.random() * 2 + 0.5}>
          <mesh 
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20
            ]}
          >
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial 
              color={Math.random() > 0.5 ? "#00ffff" : "#ff00ff"}
              emissive={Math.random() > 0.5 ? "#00ffff" : "#ff00ff"}
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3D;