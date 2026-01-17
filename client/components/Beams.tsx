import React, { useEffect, useRef } from 'react';

interface BeamsProps {
  beamWidth?: number;
  beamHeight?: number;
  beamNumber?: number;
  lightColor?: string;
  speed?: number;
  noiseIntensity?: number;
  scale?: number;
  rotation?: number;
}

export default function Beams({
  beamWidth = 2,
  beamHeight = 15,
  beamNumber = 12,
  lightColor = '#a78bfa',
  speed = 2,
  noiseIntensity = 1.75,
  scale = 0.2,
  rotation = 0,
}: BeamsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationId: number;
    let time = 0;

    const drawBeam = (
      x: number,
      y: number,
      width: number,
      height: number,
      angle: number,
      opacity: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = lightColor.replace('1)', `${opacity})`);
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    };

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < beamNumber; i++) {
        const angle = (i / beamNumber) * Math.PI * 2 + (rotation * Math.PI) / 180;
        const x = centerX + Math.cos(angle) * 50;
        const y = centerY + Math.sin(angle) * 50;

        // Create animated wave effect
        const waveOffset = Math.sin(time * 0.01 * speed + i) * noiseIntensity;
        const animatedHeight = beamHeight + waveOffset * 5;
        const opacity = 0.3 + Math.sin(time * 0.01 * speed + i) * 0.4;

        drawBeam(
          x,
          y,
          beamWidth * scale * 10,
          animatedHeight,
          angle,
          opacity
        );
      }

      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [beamWidth, beamHeight, beamNumber, lightColor, speed, noiseIntensity, scale, rotation]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}
