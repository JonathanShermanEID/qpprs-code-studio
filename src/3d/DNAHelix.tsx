/**
 * Q++RS Code Studio v3.0.0 - iOS 26 Monaco Edition
 * DNA Helix Animation - Spinning Code Display Background
 * Author: Jonathan Sherman
 * Copyright © 2025 All Rights Reserved
 */

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DNAHelixProps {
  codeLines?: string[];
  speed?: number;
}

export function DNAHelix({ speed = 0.5 }: DNAHelixProps) {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  // Create helix geometry
  const helixGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 200;
    const radius = 2;
    const height = 20;
    
    for (let i = 0; i < segments; i++) {
      const t = (i / segments) * Math.PI * 4;
      const y = (i / segments) * height - height / 2;
      
      // First strand
      const x1 = Math.cos(t) * radius;
      const z1 = Math.sin(t) * radius;
      points.push(new THREE.Vector3(x1, y, z1));
      
      // Second strand (opposite)
      const x2 = Math.cos(t + Math.PI) * radius;
      const z2 = Math.sin(t + Math.PI) * radius;
      points.push(new THREE.Vector3(x2, y, z2));
    }
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, []);
  
  // Create particle system for code visualization
  const particleGeometry = useMemo(() => {
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const t = (i / particleCount) * Math.PI * 4;
      const radius = 2 + Math.random() * 0.5;
      const y = (i / particleCount) * 20 - 10;
      
      positions[i3] = Math.cos(t) * radius;
      positions[i3 + 1] = y;
      positions[i3 + 2] = Math.sin(t) * radius;
      
      // Blue monochromatic colors
      colors[i3] = 0.0;
      colors[i3 + 1] = 0.6 + Math.random() * 0.4;
      colors[i3 + 2] = 1.0;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    return geometry;
  }, []);
  
  // Animate the helix
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001 * speed;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002 * speed;
    }
  });
  
  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {/* Main helix structure */}
      <points geometry={helixGeometry}>
        <pointsMaterial
          size={0.1}
          color="#00a8ff"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Connecting lines */}
      <lineSegments geometry={helixGeometry}>
        <lineBasicMaterial
          color="#00a8ff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      
      {/* Particle system */}
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Glow effect */}
      <mesh>
        <cylinderGeometry args={[2.5, 2.5, 20, 32, 1, true]} />
        <meshBasicMaterial
          color="#00a8ff"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// © 2025 Jonathan Sherman. All Rights Reserved.

