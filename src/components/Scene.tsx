import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Avatar() {
  const group = useRef<THREE.Group>(null!);
  
  // Create materials with different properties
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    roughness: 0.1,
    metalness: 0.8,
    transmission: 0.5,
    thickness: 0.5,
  });

  const coreMaterial = new THREE.MeshStandardMaterial({
    color: '#6366f1',
    roughness: 0.3,
    metalness: 0.7,
    emissive: '#4f46e5',
    emissiveIntensity: 0.2,
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.position.y = Math.sin(t / 1.5) / 10;
    
    // Add subtle rotation to individual parts
    group.current.children.forEach((child, i) => {
      child.rotation.x = Math.sin(t * 0.5 + i) * 0.1;
      child.rotation.z = Math.cos(t * 0.5 + i) * 0.1;
    });
  });

  return (
    <group ref={group}>
      {/* Core structure */}
      <mesh material={coreMaterial} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      </mesh>
      
      {/* Outer layers */}
      {[...Array(3)].map((_, i) => (
        <mesh key={i} material={glassMaterial} position={[0, 0, 0]} rotation={[0, (Math.PI * 2 / 3) * i, 0]}>
          <torusGeometry args={[1.5, 0.1, 16, 100]} />
        </mesh>
      ))}
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <mesh key={`particle-${i}`} material={glassMaterial} position={[
          Math.sin(Math.PI * 2 * i / 12) * 2,
          Math.cos(Math.PI * 2 * i / 12) * 2,
          0
        ]}>
          <sphereGeometry args={[0.1, 16, 16]} />
        </mesh>
      ))}
    </group>
  );
}