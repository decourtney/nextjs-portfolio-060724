import React from "react";
import {motion} from "framer-motion";

const xPosition = 120.65;
const lineWidth = 5;
const lineLength = 300;

const Divider = () => {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center ">
      <div className="grid grid-cols-3 w-full h-full bg-blue-600">
        <div className="relative">
          <svg
            width={lineWidth}
            height={lineLength}
            xmlns="http://www.w3.org/2000/svg"
            fill="hsl(var(--nextui-primary-100))"
            className="absolute top-0 left-1/2"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2={lineLength}
              stroke="hsl(var(--nextui-primary-100))"
              strokeWidth={lineWidth}
            />
          </svg>
        </div>
        <div className="relative">
          <svg
            width={lineWidth}
            height={lineLength}
            xmlns="http://www.w3.org/2000/svg"
            fill="hsl(var(--nextui-primary-100))"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2={lineLength}
              stroke="hsl(var(--nextui-primary-100))"
              strokeWidth={lineWidth}
            />
          </svg>
        </div>
        <div className="relative">
          <svg
            width={lineWidth}
            height={lineLength}
            xmlns="http://www.w3.org/2000/svg"
            fill="hsl(var(--nextui-primary-100))"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2={lineLength}
              stroke="hsl(var(--nextui-primary-100))"
              strokeWidth={lineWidth}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Divider;
