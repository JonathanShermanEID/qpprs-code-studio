/**
 * Q++RS Code Studio v3.0.0 - iOS 26 Monaco Edition
 * Main Application Component
 * Author: Jonathan Sherman
 * Copyright © 2025 All Rights Reserved
 */

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { DNAHelix } from './3d/DNAHelix';
import { ApplicationViewer } from './3d/ApplicationViewer';
import { CodeVisualizerAI } from './components/CodeVisualizerAI';
import { ChatGPTInput } from './components/ChatGPTInput';
import { DashboardIcon, AIIcon, CubeIcon, DNAIcon } from './components/HoloGlyphIcons';
import './App.css';

type View = 'code' | 'ai' | 'viewer';

function App() {
  const [currentView, setCurrentView] = useState<View>('code');
  const [showViewer, setShowViewer] = useState(true);
  
  return (
    <div className="app">
      {/* DNA Helix Background */}
      <div className="dna-background">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00a8ff" />
          <DNAHelix speed={0.3} />
        </Canvas>
      </div>
      
      {/* Main Content */}
      <div className="app-container">
        {/* Header */}
        <header className="app-header glass">
          <div className="header-left">
            <DNAIcon size={32} className="logo animate" />
            <div className="header-title">
              <h1>Q++RS Code Studio</h1>
              <p>iOS 26 Monaco Edition</p>
            </div>
          </div>
          
          <nav className="header-nav">
            <button
              className={`nav-btn ${currentView === 'code' ? 'active' : ''}`}
              onClick={() => setCurrentView('code')}
            >
              <DashboardIcon size={20} />
              <span>Code Visualizer</span>
            </button>
            
            <button
              className={`nav-btn ${currentView === 'ai' ? 'active' : ''}`}
              onClick={() => setCurrentView('ai')}
            >
              <AIIcon size={20} />
              <span>ChatGPT 5.0</span>
            </button>
            
            <button
              className={`nav-btn ${showViewer ? 'active' : ''}`}
              onClick={() => setShowViewer(!showViewer)}
            >
              <CubeIcon size={20} />
              <span>3D Viewer</span>
            </button>
          </nav>
        </header>
        
        {/* Main Layout */}
        <main className="app-main">
          <div className="main-content">
            {currentView === 'code' && <CodeVisualizerAI />}
            {currentView === 'ai' && <ChatGPTInput />}
          </div>
          
          {showViewer && (
            <aside className="viewer-panel animate-slide-in">
              <ApplicationViewer />
            </aside>
          )}
        </main>
        
        {/* Footer */}
        <footer className="app-footer glass">
          <p>© 2025 Jonathan Sherman. All Rights Reserved.</p>
          <p className="footer-version">v3.0.0 - iOS 26 Monaco Edition</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

// © 2025 Jonathan Sherman. All Rights Reserved.

