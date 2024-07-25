import React, { useEffect, useState } from "react";
import { svgToolIcons } from "./svgs";

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

const BoringIcons: React.FC = () => {
  const [shuffledIcons, setShuffledIcons] = useState<string[]>([]);

  useEffect(() => {
    setShuffledIcons(shuffleArray([...svgToolIcons]));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 py-10">
      {shuffledIcons.map((svgString, index) => (
        <div
          className="flex-shrink-0 flex-grow-0 min-w-[50px] md:min-w-[75px] lg:min-w-[100px] max-w-[50px] md:max-w-[75px] lg:max-w-[100px] text-center"
          key={index}
          dangerouslySetInnerHTML={{ __html: svgString }}
        />
      ))}
    </div>
  );
};

export default BoringIcons;
