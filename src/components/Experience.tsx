import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { Avatar } from './Scene';

export default function Experience() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Float
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <Avatar />
        </Float>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Suspense>
    </Canvas>
  );
}