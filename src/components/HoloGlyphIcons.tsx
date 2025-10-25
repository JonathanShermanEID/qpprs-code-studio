/**
 * Q++RS Code Studio v3.0.0 - iOS 26 Monaco Edition
 * HoloGlyph Icon System - Apple iOS 26 + Microsoft Blend
 * Author: Jonathan Sherman
 * Copyright © 2025 All Rights Reserved
 */

import './HoloGlyphIcons.css';

interface IconProps {
  size?: number;
  className?: string;
}

// Dashboard Icon - Apple SF Symbols + Microsoft Fluent blend
export function DashboardIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="7" height="7" rx="2" className="holo-shape" />
      <rect x="14" y="3" width="7" height="7" rx="2" className="holo-shape" />
      <rect x="3" y="14" width="7" height="7" rx="2" className="holo-shape" />
      <rect x="14" y="14" width="7" height="7" rx="2" className="holo-shape" />
    </svg>
  );
}

// Code Icon - Developer tools
export function CodeIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 6L2 12L8 18" className="holo-path" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 6L22 12L16 18" className="holo-path" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 4L11 20" className="holo-path" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// AI Icon - Neural network
export function AIIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="3" className="holo-shape" />
      <circle cx="6" cy="6" r="2" className="holo-shape" />
      <circle cx="18" cy="6" r="2" className="holo-shape" />
      <circle cx="6" cy="18" r="2" className="holo-shape" />
      <circle cx="18" cy="18" r="2" className="holo-shape" />
      <path d="M9.5 10.5L7 7" className="holo-path" strokeWidth="1.5" />
      <path d="M14.5 10.5L17 7" className="holo-path" strokeWidth="1.5" />
      <path d="M9.5 13.5L7 17" className="holo-path" strokeWidth="1.5" />
      <path d="M14.5 13.5L17 17" className="holo-path" strokeWidth="1.5" />
    </svg>
  );
}

// Cube Icon - 3D Viewer
export function CubeIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" className="holo-shape" />
      <path d="M2 17L12 22L22 17" className="holo-path" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" className="holo-path" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12V22" className="holo-path" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Terminal Icon - Developer console
export function TerminalIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" className="holo-shape" />
      <path d="M6 9L9 12L6 15" className="holo-path" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15H18" className="holo-path" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Settings Icon - Gear
export function SettingsIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="3" className="holo-shape" />
      <path d="M12 1V4M12 20V23M4.22 4.22L6.34 6.34M17.66 17.66L19.78 19.78M1 12H4M20 12H23M4.22 19.78L6.34 17.66M17.66 6.34L19.78 4.22" className="holo-path" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Play Icon - Run code
export function PlayIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5V19L19 12L8 5Z" className="holo-shape" />
    </svg>
  );
}

// Sparkles Icon - AI Generate
export function SparklesIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L13 8L12 14L11 8L12 2Z" className="holo-shape" />
      <path d="M2 12L8 13L14 12L8 11L2 12Z" className="holo-shape" />
      <path d="M18 6L19 9L18 12L17 9L18 6Z" className="holo-shape" />
      <path d="M18 18L19 21L18 24L17 21L18 18Z" className="holo-shape" />
      <path d="M6 18L7 21L6 24L5 21L6 18Z" className="holo-shape" />
    </svg>
  );
}

// DNA Icon - Helix
export function DNAIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4C8 4 12 8 16 8C20 8 20 4 20 4" className="holo-path" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 12C8 12 12 16 16 16C20 16 20 12 20 12" className="holo-path" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 20C8 20 12 16 16 16C20 16 20 20 20 20" className="holo-path" strokeWidth="2" strokeLinecap="round" />
      <circle cx="4" cy="4" r="1.5" className="holo-shape" />
      <circle cx="20" cy="4" r="1.5" className="holo-shape" />
      <circle cx="4" cy="20" r="1.5" className="holo-shape" />
      <circle cx="20" cy="20" r="1.5" className="holo-shape" />
    </svg>
  );
}

// Dropdown Icon - Chevron
export function ChevronDownIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9L12 15L18 9" className="holo-path" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Send Icon - ChatGPT
export function SendIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`holo-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 2L11 13" className="holo-path" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" className="holo-shape" />
    </svg>
  );
}

// © 2025 Jonathan Sherman. All Rights Reserved.

