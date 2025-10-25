/**
 * Q++RS Code Studio v3.0.0 - iOS 26 Monaco Edition
 * 3D Application Building Viewer - Right Panel (1080p, 6K Refresh)
 * Author: Jonathan Sherman
 * Copyright © 2025 All Rights Reserved
 */

import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './ApplicationViewer.css';

interface BuildingBlock {
  id: string;
  type: 'component' | 'module' | 'service' | 'api';
  position: [number, number, number];
  color: string;
  label: string;
}

function BuildingCube({ position, color, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (meshRef.current && hovered) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh position={[0, 0, 0]} scale={hovered ? 1.2 : 1.1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function ApplicationStructure() {
  const [, setSelectedBlock] = useState<string | null>(null);
  
  const blocks: BuildingBlock[] = [
    // Frontend Layer
    { id: '1', type: 'component', position: [-2, 2, 0], color: '#00a8ff', label: 'UI Components' },
    { id: '2', type: 'component', position: [0, 2, 0], color: '#00a8ff', label: 'State Management' },
    { id: '3', type: 'component', position: [2, 2, 0], color: '#00a8ff', label: 'Routing' },
    
    // Business Logic Layer
    { id: '4', type: 'module', position: [-2, 0, 0], color: '#0088cc', label: 'Auth Module' },
    { id: '5', type: 'module', position: [0, 0, 0], color: '#0088cc', label: 'Data Module' },
    { id: '6', type: 'module', position: [2, 0, 0], color: '#0088cc', label: 'AI Module' },
    
    // Backend Layer
    { id: '7', type: 'service', position: [-2, -2, 0], color: '#005bb3', label: 'API Gateway' },
    { id: '8', type: 'service', position: [0, -2, 0], color: '#005bb3', label: 'Database' },
    { id: '9', type: 'service', position: [2, -2, 0], color: '#005bb3', label: 'Cache' },
  ];
  
  return (
    <group>
      {blocks.map((block) => (
        <BuildingCube
          key={block.id}
          position={block.position}
          color={block.color}
          label={block.label}
          onClick={() => setSelectedBlock(block.id)}
        />
      ))}
      
      {/* Connection lines */}
      {blocks.map((block, i) => {
        if (i < blocks.length - 3) {
          const nextBlock = blocks[i + 3];
          return (
            <line key={`line-${i}`}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[new Float32Array([
                    ...block.position,
                    ...nextBlock.position,
                  ]), 3]}
                />
              </bufferGeometry>
              <lineBasicMaterial
                color="#00a8ff"
                transparent
                opacity={0.3}
                blending={THREE.AdditiveBlending}
              />
            </line>
          );
        }
        return null;
      })}
    </group>
  );
}

export function ApplicationViewer() {
  return (
    <div className="application-viewer">
      <div className="viewer-header glass">
        <h3>3D Application Viewer</h3>
        <div className="viewer-stats">
          <span className="stat">
            <span className="stat-label">Resolution:</span>
            <span className="stat-value">1080p</span>
          </span>
          <span className="stat">
            <span className="stat-label">Refresh:</span>
            <span className="stat-value">6K Hz</span>
          </span>
        </div>
      </div>
      
      <div className="viewer-canvas">
        <Canvas
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00a8ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* 3D Application Structure */}
          <ApplicationStructure />
          
          {/* Grid */}
          <gridHelper args={[20, 20, '#00a8ff', '#004280']} position={[0, -3, 0]} />
          
          {/* Controls */}
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            rotateSpeed={0.5}
            enableZoom
            enablePan
            maxDistance={15}
            minDistance={5}
          />
        </Canvas>
      </div>
      
      <div className="viewer-controls glass">
        <button className="btn btn-glass">
          <span>Reset View</span>
        </button>
        <button className="btn btn-glass">
          <span>Export</span>
        </button>
        <button className="btn btn-glass">
          <span>Fullscreen</span>
        </button>
      </div>
    </div>
  );
}

// © 2025 Jonathan Sherman. All Rights Reserved.

