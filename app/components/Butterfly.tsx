'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export const Butterfly = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  const smoothInterpolate = useCallback((current: number, target: number) => {
    const speed = 0.2; // Adjust this for smoother or faster movement
    return current + (target - current) * speed;
  }, []);

  const animate = useCallback(() => {
    // Update position with smooth interpolation
    setPosition(prev => ({
      x: smoothInterpolate(prev.x, targetPosRef.current.x),
      y: smoothInterpolate(prev.y, targetPosRef.current.y)
    }));

    // Calculate rotation
    const dx = targetPosRef.current.x - position.x;
    const dy = targetPosRef.current.y - position.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    setRotation(angle);

    // Check if we're close to the target
    const distance = Math.sqrt(
      Math.pow(targetPosRef.current.x - position.x, 2) + 
      Math.pow(targetPosRef.current.y - position.y, 2)
    );
    
    setIsMoving(distance > 1);

    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [position, smoothInterpolate]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
    };

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [animate]);

  return (
    <div 
      className="fixed z-[9999] pointer-events-none cursor-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        transition: 'transform 0.1s linear', // Reduced transition time
        width: '80px',
        height: '60px'
      }}
    >
      <svg
        width="80"
        height="60"
        viewBox="0 0 80 60"
        className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
      >
        {/* Left Wing */}
        <g style={{ 
          transformOrigin: '40px 30px', 
          animation: isMoving 
            ? 'wingBeat 0.1s ease-in-out infinite alternate' 
            : 'wingBeat 0.3s ease-in-out infinite alternate'
        }}>
          <path
            d="M38 30C38 30 20 15 15 8C10 1 5 0 3 2C1 4 5 12 10 18C15 24 25 32 38 30Z"
            fill="url(#butterflyGradient)"
            className="opacity-80"
          />
          <path
            d="M38 30C38 30 25 40 18 45C11 50 5 52 3 50C1 48 8 42 12 38C16 34 25 32 38 30Z"
            fill="url(#butterflyGradient)"
            className="opacity-80"
          />
        </g>

        {/* Right Wing */}
        <g style={{ 
          transformOrigin: '40px 30px', 
          animation: isMoving 
            ? 'wingBeat 0.1s ease-in-out infinite alternate' 
            : 'wingBeat 0.3s ease-in-out infinite alternate'
        }}>
          <path
            d="M42 30C42 30 60 15 65 8C70 1 75 0 77 2C79 4 75 12 70 18C65 24 55 32 42 30Z"
            fill="url(#butterflyGradient)"
            className="opacity-80"
          />
          <path
            d="M42 30C42 30 55 40 62 45C69 50 75 52 77 50C79 48 72 42 68 38C64 34 55 32 42 30Z"
            fill="url(#butterflyGradient)"
            className="opacity-80"
          />
        </g>

        {/* Body */}
        <path
          d="M39 28C39 28 40 25 40 22C40 19 40 15 40 15C40 15 40 19 41 22C41 25 41 28 41 28C41 28 41 35 41 38C41 41 40 45 40 45C40 45 39 41 39 38C39 35 39 28 39 28Z"
          fill="#B8C9A6"
        />

        {/* Wing Patterns */}
        <circle cx="25" cy="20" r="3" fill="#E8F0DD" className="opacity-40" />
        <circle cx="55" cy="20" r="3" fill="#E8F0DD" className="opacity-40" />
        <circle cx="30" cy="40" r="2" fill="#E8F0DD" className="opacity-40" />
        <circle cx="50" cy="40" r="2" fill="#E8F0DD" className="opacity-40" />

        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="butterflyGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#E8F0DD" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#D4E0C8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#B8C9A6" stopOpacity="0.5" />
          </radialGradient>
        </defs>
      </svg>

      <style jsx>{`
        @keyframes wingBeat {
          0% {
            transform: scaleX(0.8);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};