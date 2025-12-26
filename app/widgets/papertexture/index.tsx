import React, { useEffect, useRef } from "react";

interface CanvasGridProps {
  squareSize?: number;
  lineColor?: string;
  bgColor?: string;
}

const CanvasGrid: React.FC<CanvasGridProps> = ({
  squareSize = 50,
  lineColor = "rgba(255,255,255,0.1)",
  bgColor = "#111",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // fill background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw grid
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += squareSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += squareSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }, [squareSize, lineColor, bgColor]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default CanvasGrid;
