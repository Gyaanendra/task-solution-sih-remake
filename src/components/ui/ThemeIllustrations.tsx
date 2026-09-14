"use client";

import React from "react";

interface IllustrationProps {
  className?: string;
  accentColor?: string;
}

// 1. Smart Automation & AI: Neural synaptic nodes, weighted tensors, decision branch
export function SmartAutomationIllustration({ className = "w-full h-16", accentColor = "#FF8A00" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="4" stroke={accentColor} strokeWidth="1.5" />
      <circle cx="20" cy="50" r="4" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <circle cx="60" cy="15" r="4" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <circle cx="60" cy="35" r="5" stroke={accentColor} strokeWidth="1.5" />
      <circle cx="60" cy="55" r="4" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <circle cx="100" cy="25" r="4.5" stroke={accentColor} strokeWidth="1.5" />
      <circle cx="100" cy="45" r="4" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      
      {/* Neural Weights */}
      <path d="M24 20L56 15" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
      <path d="M24 20L55 35" stroke={accentColor} strokeWidth="1.2" strokeDasharray="3 2" />
      <path d="M24 50L55 35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
      <path d="M24 50L56 55" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <path d="M65 35L95.5 25" stroke={accentColor} strokeWidth="1.2" />
      <path d="M65 35L96 45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
      <path d="M64 15L95.5 25" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <path d="M64 55L96 45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />

      <circle cx="60" cy="35" r="1.5" fill={accentColor} />
      <circle cx="20" cy="20" r="1.5" fill={accentColor} />
      <circle cx="100" cy="25" r="1.5" fill={accentColor} />
    </svg>
  );
}

// 2. Space Tech (ISRO): Orbit ellipse, telemetry arc, lunar navigation beacon
export function SpaceTechIllustration({ className = "w-full h-16", accentColor = "#0A84FF" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="60" cy="35" rx="46" ry="18" stroke={accentColor} strokeWidth="1.2" strokeDasharray="4 3" transform="rotate(-15 60 35)" />
      <circle cx="60" cy="35" r="12" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
      <circle cx="60" cy="35" r="4" fill={accentColor} fillOpacity="0.2" stroke={accentColor} strokeWidth="1.2" />
      
      {/* Orbiting Satellite Node */}
      <circle cx="98" cy="24" r="3" fill={accentColor} />
      <line x1="98" y1="24" x2="108" y2="21" stroke={accentColor} strokeWidth="1" />
      <line x1="108" y1="18" x2="108" y2="24" stroke={accentColor} strokeWidth="1" />
      
      {/* Telemetry Wave */}
      <path d="M22 45C30 40 45 42 52 48" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="18" cy="18" r="1" fill="currentColor" fillOpacity="0.4" />
      <circle cx="102" cy="50" r="1" fill="currentColor" fillOpacity="0.4" />
      <circle cx="35" cy="56" r="1.2" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

// 3. Fitness & Sports Analytics: Biomechanical velocity curve, pulse wave, force vectors
export function FitnessSportsIllustration({ className = "w-full h-16", accentColor = "#00F5A0" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Metric Grid Bars */}
      <line x1="20" y1="55" x2="100" y2="55" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="20" y1="55" x2="20" y2="15" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      
      {/* Performance Curve */}
      <path d="M22 50C35 48 42 22 55 24C68 26 74 44 88 32C94 26 102 18 108 16" stroke={accentColor} strokeWidth="1.5" />
      <path d="M22 50C35 48 42 22 55 24C68 26 74 44 88 32C94 26 102 18 108 16L108 55L22 55Z" fill={accentColor} fillOpacity="0.06" />

      {/* Cadence Peak Nodes */}
      <circle cx="55" cy="24" r="3" fill="none" stroke={accentColor} strokeWidth="1.5" />
      <circle cx="88" cy="32" r="2.5" fill={accentColor} />
      <line x1="55" y1="24" x2="55" y2="55" stroke={accentColor} strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
    </svg>
  );
}

// 4. Heritage & Culture: Classical architectural pavilion dome, symmetry columns, mandala arch
export function HeritageCultureIllustration({ className = "w-full h-16", accentColor = "#D97706" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Plinth */}
      <line x1="25" y1="56" x2="95" y2="56" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="30" y1="53" x2="90" y2="53" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      
      {/* Columns */}
      <line x1="38" y1="53" x2="38" y2="34" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="52" y1="53" x2="52" y2="34" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="68" y1="53" x2="68" y2="34" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="82" y1="53" x2="82" y2="34" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />

      {/* Capital Beam */}
      <line x1="34" y1="34" x2="86" y2="34" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />

      {/* Monumental Arch & Kalasha Finial */}
      <path d="M42 34C42 22 52 16 60 16C68 16 78 22 78 34" stroke={accentColor} strokeWidth="1.5" />
      <path d="M50 34C50 26 56 21 60 21C64 21 70 26 70 34" stroke={accentColor} strokeWidth="1" strokeOpacity="0.6" />
      <line x1="60" y1="16" x2="60" y2="10" stroke={accentColor} strokeWidth="1.5" />
      <circle cx="60" cy="9" r="1.5" fill={accentColor} />
    </svg>
  );
}

// 5. MedTech / HealthTech: DNA helix strands, cardiogram rhythm, diagnostic cross
export function MedTechIllustration({ className = "w-full h-16", accentColor = "#EF4444" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* ECG Rhythm line */}
      <path d="M16 38L34 38L39 28L43 48L49 16L55 52L60 34L64 41L68 38L104 38" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="16" r="2" fill={accentColor} />
      
      {/* Background Vital Circles */}
      <circle cx="60" cy="35" r="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 3" />
      <circle cx="60" cy="35" r="16" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />

      {/* Cross Marker */}
      <line x1="96" y1="20" x2="96" y2="28" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="92" y1="24" x2="100" y2="24" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
    </svg>
  );
}

// 6. Agriculture & Rural FoodTech: Precision telemetry seedling, contour moisture ripples
export function AgricultureIllustration({ className = "w-full h-16", accentColor = "#10B981" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Soil Contour Lines */}
      <path d="M18 54C34 51 48 57 66 53C84 49 96 55 106 52" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M16 46C38 43 56 48 76 44C94 40 102 46 108 43" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />

      {/* Stem & Leaves */}
      <path d="M60 52V24" stroke={accentColor} strokeWidth="1.5" />
      <path d="M60 38C60 30 72 26 78 30C78 38 66 40 60 40" stroke={accentColor} strokeWidth="1.3" fill={accentColor} fillOpacity="0.15" />
      <path d="M60 30C60 22 48 18 42 22C42 30 54 32 60 32" stroke={accentColor} strokeWidth="1.3" fill={accentColor} fillOpacity="0.15" />
      
      {/* Sunlight telemetry ray */}
      <line x1="60" y1="20" x2="60" y2="14" stroke={accentColor} strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="60" cy="11" r="2" stroke={accentColor} strokeWidth="1" />
    </svg>
  );
}

// 7. Smart Vehicles & EV Mobility: Aerodynamic chassis contours, battery vector, radar arc
export function SmartVehiclesIllustration({ className = "w-full h-16", accentColor = "#6366F1" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Aerodynamic profile */}
      <path d="M18 45C24 45 30 40 40 38C52 30 68 28 82 32C94 36 100 42 104 45" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 38L52 30H74L82 34" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      
      {/* Wheel telemetry hubs */}
      <circle cx="36" cy="48" r="7" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <circle cx="36" cy="48" r="2" fill={accentColor} />
      <circle cx="88" cy="48" r="7" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <circle cx="88" cy="48" r="2" fill={accentColor} />

      {/* Autonomous Lidar Radar Waves */}
      <path d="M96 28C101 31 104 36 104 41" stroke={accentColor} strokeWidth="1.2" strokeDasharray="2 2" />
      <path d="M102 24C108 28 112 34 112 41" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="2 2" />
    </svg>
  );
}

// 8. Transportation & Logistics: Waypoint routing matrix, multi-modal vectors, cargo grid
export function LogisticsIllustration({ className = "w-full h-16", accentColor = "#F59E0B" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Route Coordinates */}
      <line x1="20" y1="48" x2="48" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
      <line x1="48" y1="24" x2="82" y2="42" stroke={accentColor} strokeWidth="1.4" />
      <line x1="82" y1="42" x2="104" y2="18" stroke={accentColor} strokeWidth="1.4" />
      <line x1="48" y1="24" x2="78" y2="16" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />

      {/* Waypoint Nodes */}
      <circle cx="20" cy="48" r="3" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="48" cy="24" r="4" stroke={accentColor} strokeWidth="1.3" />
      <circle cx="48" cy="24" r="1.5" fill={accentColor} />
      <circle cx="82" cy="42" r="4" stroke={accentColor} strokeWidth="1.3" />
      <circle cx="82" cy="42" r="1.5" fill={accentColor} />
      <circle cx="104" cy="18" r="4.5" fill={accentColor} fillOpacity="0.2" stroke={accentColor} strokeWidth="1.5" />
      
      {/* Isometric Shipping Box */}
      <path d="M28 22L36 17L44 22L36 27L28 22Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M28 22V30L36 35V27" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M44 22V30L36 35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
    </svg>
  );
}

// 9. Robotics & Drones: Quadcopter rotor circle vortices, articular joints, sensor cone
export function RoboticsIllustration({ className = "w-full h-16", accentColor = "#EC4899" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Rotor Circles */}
      <circle cx="34" cy="26" r="10" stroke={accentColor} strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="86" cy="26" r="10" stroke={accentColor} strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="34" cy="26" r="2.5" fill={accentColor} />
      <circle cx="86" cy="26" r="2.5" fill={accentColor} />

      {/* Drone Airframe Crossbar */}
      <line x1="34" y1="26" x2="86" y2="26" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="60" cy="26" r="6" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.5" />
      
      {/* Sensor/Gimbal Beam Below */}
      <line x1="60" y1="32" x2="60" y2="40" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <path d="M48 56L60 40L72 56" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="2 2" />
      <circle cx="60" cy="40" r="2" fill={accentColor} />
    </svg>
  );
}

// 10. Clean & Green Tech: Closed loop recycling cycle, zero-discharge droplet
export function CleanGreenIllustration({ className = "w-full h-16", accentColor = "#14B8A6" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Continuous Loop / Mobius Arc */}
      <path d="M44 42C36 40 32 32 36 24C40 16 52 16 60 22C68 28 80 28 84 20C88 12 76 12 70 16" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M76 28C84 30 88 38 84 46C80 54 68 54 60 48C52 42 40 42 36 50" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
      
      {/* Eco Droplet Contour */}
      <path d="M60 26C60 26 70 38 70 44C70 49.5 65.5 54 60 54C54.5 54 50 49.5 50 44C50 38 60 26 60 26Z" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.12" />
      <circle cx="58" cy="42" r="1.5" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}

// 11. Tourism & Eco-Travel: Contour topography lines, navigation compass rose
export function TourismIllustration({ className = "w-full h-16", accentColor = "#8B5CF6" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Topographic Rings */}
      <path d="M18 42C26 34 44 32 60 36C76 40 94 36 104 28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <path d="M22 50C34 44 52 42 66 46C80 50 96 44 102 38" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      
      {/* Compass Rose */}
      <circle cx="60" cy="32" r="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <polygon points="60,16 63,30 60,32 57,30" fill={accentColor} />
      <polygon points="60,48 63,34 60,32 57,34" fill="currentColor" fillOpacity="0.3" />
      <polygon points="44,32 58,35 60,32 58,29" fill="currentColor" fillOpacity="0.3" />
      <polygon points="76,32 62,35 60,32 62,29" fill="currentColor" fillOpacity="0.4" />
      <circle cx="60" cy="32" r="2" fill={accentColor} />
    </svg>
  );
}

// 12. Renewable Energy: Solar angle grid, kinetic turbine blade arc, photon ray
export function RenewableEnergyIllustration({ className = "w-full h-16", accentColor = "#F97316" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Turbine Axis & Blades */}
      <line x1="42" y1="56" x2="42" y2="28" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <path d="M42 28C42 16 48 10 52 14C48 22 44 26 42 28Z" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.15" />
      <path d="M42 28C32 24 26 28 28 34C34 32 40 30 42 28Z" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.15" />
      <path d="M42 28C48 38 52 42 56 38C54 30 46 28 42 28Z" stroke={accentColor} strokeWidth="1.2" fill={accentColor} fillOpacity="0.15" />
      <circle cx="42" cy="28" r="2" fill={accentColor} />

      {/* Solar Cells / Photovoltaic Panel */}
      <polygon points="72,36 98,30 92,52 68,56" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
      <line x1="85" y1="33" x2="80" y2="54" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="70" y1="46" x2="95" y2="41" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      
      {/* Energy Ray */}
      <path d="M96 16L90 24H96L92 32" stroke={accentColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 13. Blockchain & Cybersecurity: Interlocking cryptographic cipher blocks, zero-trust perimeter
export function BlockchainIllustration({ className = "w-full h-16", accentColor = "#3B82F6" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Block 1 */}
      <rect x="20" y="24" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
      <line x1="25" y1="30" x2="37" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="25" y1="35" x2="33" y2="35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />

      {/* Cryptographic Link Hash */}
      <path d="M42 35H54" stroke={accentColor} strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="48" cy="35" r="2" fill={accentColor} />

      {/* Block 2 (Target Shield Block) */}
      <rect x="54" y="20" width="28" height="30" rx="4" stroke={accentColor} strokeWidth="1.5" fill={accentColor} fillOpacity="0.08" />
      {/* Shield Icon Inside Block */}
      <path d="M68 26V33C68 37 63 41 68 44C73 41 78 37 78 33V26L68 26Z" stroke={accentColor} strokeWidth="1.2" />

      {/* Block 3 */}
      <path d="M82 35H94" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="2 2" />
      <rect x="94" y="26" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
    </svg>
  );
}

// 14. Smart Education & EdTech: Isometric knowledge folio prism, neural learning curve
export function EducationIllustration({ className = "w-full h-16", accentColor = "#84CC16" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Unfolding Folio / Book Wings */}
      <path d="M60 48V26C52 22 40 22 30 26V48C40 44 52 44 60 48Z" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.08" />
      <path d="M60 48V26C68 22 80 22 90 26V48C80 44 68 44 60 48Z" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.08" />

      {/* Progress Radiance Arc */}
      <path d="M42 18C48 14 72 14 78 18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />
      <circle cx="60" cy="14" r="2.5" fill={accentColor} />
      <line x1="60" y1="14" x2="60" y2="8" stroke={accentColor} strokeWidth="1" />
      
      <circle cx="48" cy="16" r="1" fill="currentColor" fillOpacity="0.4" />
      <circle cx="72" cy="16" r="1" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}

// 15. Disaster Risk & Early Warning: Seismic shockwave concentric rings, early alert beacon
export function DisasterManagementIllustration({ className = "w-full h-16", accentColor = "#DC2626" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Concentric Seismic Wave Arcs */}
      <circle cx="60" cy="46" r="8" stroke={accentColor} strokeWidth="1.4" />
      <circle cx="60" cy="46" r="20" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="4 3" />
      <circle cx="60" cy="46" r="32" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="5 4" />
      <circle cx="60" cy="46" r="44" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />

      {/* Center Epicenter Node */}
      <circle cx="60" cy="46" r="3" fill={accentColor} />
      
      {/* Alert Tower / Signal Vector */}
      <line x1="60" y1="46" x2="60" y2="16" stroke={accentColor} strokeWidth="1.5" />
      <polygon points="60,12 64,18 56,18" fill={accentColor} />
    </svg>
  );
}

// 16. Fintech, Toys & Gamification: Geometric tactile polyhedron, algorithmic coin matrix
export function FintechToysIllustration({ className = "w-full h-16", accentColor = "#A855F7" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Isometric 3D Gaming / Toy Cube */}
      <polygon points="60,18 82,30 60,42 38,30" stroke={accentColor} strokeWidth="1.4" fill={accentColor} fillOpacity="0.1" />
      <polygon points="38,30 60,42 60,60 38,48" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
      <polygon points="60,42 82,30 82,48 60,60" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.6" />

      {/* Algorithmic Currency Node / Gaming Controller Matrix */}
      <circle cx="28" cy="22" r="4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="92" cy="22" r="4" stroke={accentColor} strokeWidth="1.2" />
      <circle cx="92" cy="22" r="1.5" fill={accentColor} />
      <line x1="82" y1="30" x2="88" y2="25" stroke={accentColor} strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

// Master lookup dictionary
export const THEME_ILLUSTRATIONS: Record<string, React.ComponentType<IllustrationProps>> = {
  "smart-automation": SmartAutomationIllustration,
  "space-tech": SpaceTechIllustration,
  "fitness-sports": FitnessSportsIllustration,
  "heritage-culture": HeritageCultureIllustration,
  "medtech-healthtech": MedTechIllustration,
  "agriculture-foodtech": AgricultureIllustration,
  "smart-vehicles": SmartVehiclesIllustration,
  "transportation-logistics": LogisticsIllustration,
  "robotics-drones": RoboticsIllustration,
  "clean-green-tech": CleanGreenIllustration,
  "tourism-hospitality": TourismIllustration,
  "renewable-energy": RenewableEnergyIllustration,
  "blockchain-cybersecurity": BlockchainIllustration,
  "smart-education": EducationIllustration,
  "disaster-management": DisasterManagementIllustration,
  "fintech-toys-misc": FintechToysIllustration,
};

export default function ThemeIllustration({
  themeId,
  className,
  accentColor,
}: {
  themeId: string;
  className?: string;
  accentColor?: string;
}) {
  const Component = THEME_ILLUSTRATIONS[themeId] || SmartAutomationIllustration;
  return <Component className={className} accentColor={accentColor} />;
}
