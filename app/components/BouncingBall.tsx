/**
 * This component creates a bouncing ball animation using the canvas API.
 * In current state the scrolling will add linear velocity to the ball in the +y direction.
 * Gravity is applied as a contant linear velocityin the -y direction.
 */

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const BouncingBallCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const previousScrollY = useRef(0);
  let ball = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    radius: 0,
    color: "",
    gravity: 0,
    friction: 0,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let animationFrameId: number;
    ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: 2,
      vy: 2,
      radius: 20,
      color: "red",
      gravity: 0.8,
      friction: 0.8,
    };

    const resizeCanvas = () => {
      if (!canvas || !context) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    const drawBall = () => {
      if (!canvas || !context || !ball) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      ball.vy += ball.gravity;
      ball.vx *= ball.friction;
      ball.vy *= ball.friction;

      ball.x += ball.vx;
      ball.y += ball.vy;

      // Check for collisions with the canvas bounds
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

      context.beginPath();
      context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      context.fillStyle = ball.color;
      context.fill();
      context.closePath();

      animationFrameId = requestAnimationFrame(drawBall);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawBall();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [ball]);

  if (!ball) return null;
  useMotionValueEvent(scrollY, "change", (latest) => {
    const deltaY = latest - previousScrollY.current;
    if (deltaY > 0) {
      ball!.vy -= 10;
    }

    previousScrollY.current = latest;
  });

  return (
    <canvas
      ref={canvasRef}
      // width={800}
      // height={800}
      className="w-full "
    />
  );
};

export default BouncingBallCanvas;
