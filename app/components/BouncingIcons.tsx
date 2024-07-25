import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { svgToolIcons } from "./svgs";

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  svgPath: string;
  gravity: number;
  friction: number;
}

const BouncingBallCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const previousScrollY = useRef(0);
  const ballsInitialized = useRef(false);
  const ballsRef = useRef<Ball[]>([]);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const debounceDelay = 100;

  // Bounce Controls
  const force = -5;
  const radius = 40;
  const gravity = 0.0;
  const friction = 0.99;

 const svgPaths = svgToolIcons

  const parseSVG = (svg: string): Path2D => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, "image/svg+xml");
    const pathElement = doc.querySelector("path");
    const pathString = pathElement?.getAttribute("d") || "";
    return new Path2D(pathString);
  };

  const initializeBalls = (canvas: HTMLCanvasElement) => {
    const balls: Ball[] = [];
    const spacing = canvas.width / (svgPaths.length + 1);

    for (let i = 0; i < svgPaths.length; i++) {
      const ball: Ball = {
        x: spacing * (i + 1),
        y: canvas.height - radius,
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 4 - 2,
        radius,
        svgPath: svgPaths[i % svgPaths.length],
        gravity,
        friction,
      };

      balls.push(ball);
    }

    ballsRef.current = balls;
    ballsInitialized.current = true;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const resizeCanvas = () => {
      if (!canvas || !context) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      if (!ballsInitialized.current) {
        initializeBalls(canvas);
      }
    };

    const detectCollisions = (ball: Ball, otherBall: Ball) => {
      const dx = otherBall.x - ball.x;
      const dy = otherBall.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < ball.radius + otherBall.radius) {
        const angle = Math.atan2(dy, dx);
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        const pos0 = { x: 0, y: 0 };
        const pos1 = { x: dx * cos + dy * sin, y: dy * cos - dx * sin };

        const vel0 = {
          x: ball.vx * cos + ball.vy * sin,
          y: ball.vy * cos - ball.vx * sin,
        };
        const vel1 = {
          x: otherBall.vx * cos + otherBall.vy * sin,
          y: otherBall.vy * cos - otherBall.vx * sin,
        };

        const vxTotal = vel0.x - vel1.x;
        vel0.x =
          ((ball.radius - otherBall.radius) * vel0.x +
            2 * otherBall.radius * vel1.x) /
          (ball.radius + otherBall.radius);
        vel1.x = vxTotal + vel0.x;

        const absV = Math.abs(vel0.x) + Math.abs(vel1.x);
        const overlap = (ball.radius + otherBall.radius - distance + 1) / absV;

        pos0.x += vel0.x * overlap;
        pos1.x += vel1.x * overlap;

        const pos0F = {
          x: pos0.x * cos - pos0.y * sin,
          y: pos0.y * cos + pos0.x * sin,
        };
        const pos1F = {
          x: pos1.x * cos - pos1.y * sin,
          y: pos1.y * cos + pos1.x * sin,
        };

        otherBall.x = ball.x + pos1F.x;
        otherBall.y = ball.y + pos1F.y;
        ball.x = ball.x + pos0F.x;
        ball.y = ball.y + pos0F.y;

        const vel0F = {
          x: vel0.x * cos - vel0.y * sin,
          y: vel0.y * cos + vel0.x * sin,
        };
        const vel1F = {
          x: vel1.x * cos - vel1.y * sin,
          y: vel1.y * cos + vel1.x * sin,
        };

        ball.vx = vel0F.x;
        ball.vy = vel0F.y;
        otherBall.vx = vel1F.x;
        otherBall.vy = vel1F.y;
      }
    };

    const drawBalls = () => {
      if (!canvas || !context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      ballsRef.current.forEach((ball, index) => {
        ball.vy += ball.gravity;
        ball.vx *= ball.friction;
        ball.vy *= ball.friction;

        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.x + ball.radius > canvas.width) {
          ball.x = canvas.width - ball.radius;
          ball.vx = -ball.vx;
        } else if (ball.x - ball.radius < 0) {
          ball.x = ball.radius;
          ball.vx = -ball.vx;
        }

        if (ball.y + ball.radius > canvas.height) {
          ball.y = canvas.height - ball.radius;
          ball.vy = -ball.vy;
        } else if (ball.y - ball.radius < 0) {
          ball.y = ball.radius;
          ball.vy = -ball.vy;
        }

        for (let j = index + 1; j < ballsRef.current.length; j++) {
          detectCollisions(ball, ballsRef.current[j]);
        }

        const path = parseSVG(ball.svgPath);
        context.save();
        context.translate(ball.x - ball.radius, ball.y - ball.radius);
        context.scale(ball.radius / 64, ball.radius / 64);
        context.fillStyle = getComputedStyle(context.canvas).getPropertyValue(
          "--svg-icons"
        );
        context.fill(path);
        context.restore();
      });

      requestAnimationFrame(drawBalls);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawBalls();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const deltaY = latest - previousScrollY.current;

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      ballsRef.current.forEach((ball) => {
        ball.vy += Math.random() * force * 2 - force; // Apply random vertical force
        ball.vx += Math.random() * 4 - 2; // Apply random horizontal force
      });
    }, debounceDelay);

    previousScrollY.current = latest;
  });

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default BouncingBallCanvas;
