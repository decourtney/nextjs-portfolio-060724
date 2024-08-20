import React, { useEffect, useState } from "react";
import { svgBouncingIcons } from "../../utilities/svgs";

interface BoringIconsProps {
  activeTool: string | null;
  onHover: (toolName: string | null) => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const BoringIcons: React.FC<BoringIconsProps> = ({ activeTool, onHover }) => {
  const [shuffledIcons, setShuffledIcons] = useState<string[]>([]);

  useEffect(() => {
    setShuffledIcons(shuffleArray([...svgBouncingIcons]));
  }, []);

  const getSVGId = (svg: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, "image/svg+xml");
    const svgElement = doc.querySelector("svg");
    const id = svgElement?.getAttribute("id") || "";
    return id;
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 py-10">
      {shuffledIcons.map((svgString, index) => {
        const toolId = getSVGId(svgString);

        // Modify the SVG string to change the color based on hover
        const highlightColor =
          activeTool === toolId
            ? "hsl(var(--nextui-secondary-100))"
            : "hsl(var(--nextui-primary-100))";
        const highlightedSvgString = svgString.replace(
          /fill="[^"]*"/g,
          `fill="${highlightColor}"`
        );

        return (
          <div
            className="flex-shrink-0 flex-grow-0 min-w-[50px] md:min-w-[75px] lg:min-w-[100px] max-w-[50px] md:max-w-[75px] lg:max-w-[100px] text-center"
            key={index}
            dangerouslySetInnerHTML={{ __html: highlightedSvgString }}
            onMouseEnter={() => onHover(toolId)} // Set active tool on hover
            onMouseLeave={() => onHover(null)} // Reset active tool on leave
          />
        );
      })}
    </div>
  );
};

export default BoringIcons;
