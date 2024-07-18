import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  image: HTMLImageElement;
  gravity: number;
  friction: number;
}

const radius = 40;
const gravity = 0.0;
const friction = 0.99;

const BouncingBallCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const previousScrollY = useRef(0);
  const ballsInitialized = useRef(false); // Track if balls have been initialized
  const ballsRef = useRef<Ball[]>([]);
  const force = -5;
  const imagesRef = useRef<HTMLImageElement[]>([]); // Reference to the images
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null); // Debounce timer reference
  const debounceDelay = 100; // Delay in milliseconds

  const loadImages = (srcArray: string[]): Promise<HTMLImageElement[]> => {
    return Promise.all(
      srcArray.map(
        (src) =>
          new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
          })
      )
    );
  };

  const initializeBalls = (canvas: HTMLCanvasElement) => {
    const balls: Ball[] = [];
    const images = imagesRef.current;
    const maxAttempts = 100; // Maximum attempts to position a ball without overlap

    for (let i = 0; i < images.length; i++) {
      let ball: Ball;
      let overlapping: boolean;
      let attempts = 0;

      do {
        overlapping = false;
        ball = {
          x: Math.random() * (canvas.width - radius * 2) + radius,
          y: Math.random() * (canvas.height - radius * 2) + radius,
          vx: Math.random() * 4 - 2,
          vy: Math.random() * 4 - 2,
          radius,
          image: images[i % images.length], // Assign image to ball
          gravity,
          friction,
        };

        for (const otherBall of balls) {
          const dx = otherBall.x - ball.x;
          const dy = otherBall.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < ball.radius + otherBall.radius) {
            overlapping = true;
            break;
          }
        }

        attempts++;
        if (attempts >= maxAttempts) {
          overlapping = false; // Force exit after max attempts
        }
      } while (overlapping);

      balls.push(ball);
    }

    ballsRef.current = balls;
    ballsInitialized.current = true;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const imageSources = [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    ];

    loadImages(imageSources).then((images) => {
      imagesRef.current = images;

      if (!ballsInitialized.current) {
        initializeBalls(canvas);
      }

      let animationFrameId: number;

      const resizeCanvas = () => {
        if (!canvas || !context) return;
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      };

      const detectCollisions = (ball: Ball, otherBall: Ball) => {
        const dx = otherBall.x - ball.x;
        const dy = otherBall.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < ball.radius + otherBall.radius) {
          // Simple elastic collision
          const angle = Math.atan2(dy, dx);
          const sin = Math.sin(angle);
          const cos = Math.cos(angle);

          // Rotate ball positions
          const pos0 = { x: 0, y: 0 };
          const pos1 = { x: dx * cos + dy * sin, y: dy * cos - dx * sin };

          // Rotate ball velocities
          const vel0 = {
            x: ball.vx * cos + ball.vy * sin,
            y: ball.vy * cos - ball.vx * sin,
          };
          const vel1 = {
            x: otherBall.vx * cos + otherBall.vy * sin,
            y: otherBall.vy * cos - otherBall.vx * sin,
          };

          // Swap velocities
          const vxTotal = vel0.x - vel1.x;
          vel0.x =
            ((ball.radius - otherBall.radius) * vel0.x +
              2 * otherBall.radius * vel1.x) /
            (ball.radius + otherBall.radius);
          vel1.x = vxTotal + vel0.x;

          // Update positions to avoid overlap
          const absV = Math.abs(vel0.x) + Math.abs(vel1.x);
          const overlap =
            (ball.radius + otherBall.radius - distance + 1) / absV;

          pos0.x += vel0.x * overlap;
          pos1.x += vel1.x * overlap;

          // Rotate positions and velocities back
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
        if (!canvas || !context || !imagesRef.current.length) return;
        context.clearRect(0, 0, canvas.width, canvas.height);

        ballsRef.current.forEach((ball, index) => {
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

          // Check for collisions with other balls
          for (let j = index + 1; j < ballsRef.current.length; j++) {
            detectCollisions(ball, ballsRef.current[j]);
          }

          // Draw the image at the ball's position
          context.drawImage(
            ball.image,
            ball.x - ball.radius,
            ball.y - ball.radius,
            ball.radius * 2,
            ball.radius * 2
          );
        });

        animationFrameId = requestAnimationFrame(drawBalls);
      };

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();
      drawBalls();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", resizeCanvas);
      };
    });
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const deltaY = latest - previousScrollY.current;

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      ballsRef.current.forEach((ball) => {
        if (deltaY > 0) {
          ball.vy += force + Math.random() * 4 - 2; // Apply upward force with random variance
          ball.vx += Math.random() * 4 - 2; // Apply random horizontal force
        } else if (deltaY < 0) {
          ball.vy -= force + Math.random() * 4 - 2; // Apply downward force with random variance
          ball.vx -= Math.random() * 4 - 2; // Apply random horizontal force
        }
        console.log(ball.vy);
      });
    }, debounceDelay);

    previousScrollY.current = latest;
  });

  return <canvas ref={canvasRef} className="w-full h-[500px]" />;
};

export default BouncingBallCanvas;
