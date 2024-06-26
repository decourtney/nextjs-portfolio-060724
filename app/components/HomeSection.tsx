import {
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import HomeScrollLine from "./HomeScrollLine";
import Subtitle from "./Subtitle";
import WordCycle from "./WordCycle";
import useWindowSize from "./useWindowSize";
import { use, useEffect, useRef, useState } from "react";

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [1, 0]);
};

const HomeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return console.error("Ref not found");

    const handleResize = () => {
      setContainerSize({
        width: ref.current!.clientWidth,
        height: ref.current!.clientHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`end end`, "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, containerSize?.height]);

  return (
    // TODO section height will need to be changed once WordCycle is working as intended
    <section ref={ref} id="hero" className="relative h-full">
      <div className="mx-auto pt-20 pb-5">
        <svg
          viewBox="0 0 508 161"
          height={"100%"}
          width={"100%"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M104.091 58.7273C104.091 63.9091 103.083 68.2803 101.068 71.8409C99.0528 75.3864 96.3331 78.0758 92.9088 79.9091C89.4846 81.7273 85.6664 82.6364 81.4543 82.6364C77.2119 82.6364 73.3785 81.7197 69.9543 79.8864C66.5452 78.0379 63.8331 75.3409 61.8179 71.7955C59.8179 68.2348 58.8179 63.8788 58.8179 58.7273C58.8179 53.5455 59.8179 49.1818 61.8179 45.6364C63.8331 42.0758 66.5452 39.3864 69.9543 37.5682C73.3785 35.7348 77.2119 34.8182 81.4543 34.8182C85.6664 34.8182 89.4846 35.7348 92.9088 37.5682C96.3331 39.3864 99.0528 42.0758 101.068 45.6364C103.083 49.1818 104.091 53.5455 104.091 58.7273ZM91.0907 58.7273C91.0907 55.9394 90.7195 53.5909 89.977 51.6818C89.2498 49.7576 88.1664 48.303 86.727 47.3182C85.3028 46.3182 83.5452 45.8182 81.4543 45.8182C79.3634 45.8182 77.5982 46.3182 76.1588 47.3182C74.7346 48.303 73.6513 49.7576 72.9088 51.6818C72.1816 53.5909 71.8179 55.9394 71.8179 58.7273C71.8179 61.5152 72.1816 63.8712 72.9088 65.7955C73.6513 67.7045 74.7346 69.1591 76.1588 70.1591C77.5982 71.1439 79.3634 71.6364 81.4543 71.6364C83.5452 71.6364 85.3028 71.1439 86.727 70.1591C88.1664 69.1591 89.2498 67.7045 89.977 65.7955C90.7195 63.8712 91.0907 61.5152 91.0907 58.7273ZM154.69 35.4545V82H144.145L127.326 57.5455H127.054V82H114.417V35.4545H125.145L141.69 59.8182H142.054V35.4545H154.69ZM210.238 58.7273C210.238 63.9091 209.231 68.2803 207.215 71.8409C205.2 75.3864 202.481 78.0758 199.056 79.9091C195.632 81.7273 191.814 82.6364 187.602 82.6364C183.359 82.6364 179.526 81.7197 176.102 79.8864C172.693 78.0379 169.981 75.3409 167.965 71.7955C165.965 68.2348 164.965 63.8788 164.965 58.7273C164.965 53.5455 165.965 49.1818 167.965 45.6364C169.981 42.0758 172.693 39.3864 176.102 37.5682C179.526 35.7348 183.359 34.8182 187.602 34.8182C191.814 34.8182 195.632 35.7348 199.056 37.5682C202.481 39.3864 205.2 42.0758 207.215 45.6364C209.231 49.1818 210.238 53.5455 210.238 58.7273ZM197.238 58.7273C197.238 55.9394 196.867 53.5909 196.125 51.6818C195.397 49.7576 194.314 48.303 192.875 47.3182C191.45 46.3182 189.693 45.8182 187.602 45.8182C185.511 45.8182 183.746 46.3182 182.306 47.3182C180.882 48.303 179.799 49.7576 179.056 51.6818C178.329 53.5909 177.965 55.9394 177.965 58.7273C177.965 61.5152 178.329 63.8712 179.056 65.7955C179.799 67.7045 180.882 69.1591 182.306 70.1591C183.746 71.1439 185.511 71.6364 187.602 71.6364C189.693 71.6364 191.45 71.1439 192.875 70.1591C194.314 69.1591 195.397 67.7045 196.125 65.7955C196.867 63.8712 197.238 61.5152 197.238 58.7273ZM230.355 35.4545L239.9 68.2727H240.264L249.809 35.4545H264.082L248.718 82H231.445L216.082 35.4545H230.355ZM277.511 82H263.874L279.238 35.4545H296.511L311.874 82H298.238L288.056 48.2727H287.692L277.511 82ZM274.965 63.6364H300.602V73.0909H274.965V63.6364ZM361.11 35.4545V82H350.565L333.746 57.5455H333.474V82H320.837V35.4545H331.565L348.11 59.8182H348.474V35.4545H361.11ZM154.144 130.909H141.326C141.235 129.848 140.993 128.886 140.599 128.023C140.22 127.159 139.69 126.417 139.008 125.795C138.341 125.159 137.531 124.674 136.576 124.341C135.622 123.992 134.538 123.818 133.326 123.818C131.205 123.818 129.409 124.333 127.94 125.364C126.485 126.394 125.379 127.871 124.622 129.795C123.879 131.72 123.508 134.03 123.508 136.727C123.508 139.576 123.887 141.962 124.644 143.886C125.417 145.795 126.531 147.235 127.985 148.205C129.44 149.159 131.19 149.636 133.235 149.636C134.402 149.636 135.447 149.492 136.372 149.205C137.296 148.902 138.099 148.47 138.781 147.909C139.462 147.348 140.016 146.674 140.44 145.886C140.879 145.083 141.175 144.182 141.326 143.182L154.144 143.273C153.993 145.242 153.44 147.25 152.485 149.295C151.531 151.326 150.175 153.205 148.417 154.932C146.675 156.644 144.516 158.023 141.94 159.068C139.364 160.114 136.372 160.636 132.962 160.636C128.69 160.636 124.856 159.72 121.462 157.886C118.084 156.053 115.409 153.356 113.44 149.795C111.485 146.235 110.508 141.879 110.508 136.727C110.508 131.545 111.508 127.182 113.508 123.636C115.508 120.076 118.205 117.386 121.599 115.568C124.993 113.735 128.781 112.818 132.962 112.818C135.902 112.818 138.606 113.22 141.076 114.023C143.546 114.826 145.712 116 147.576 117.545C149.44 119.076 150.94 120.962 152.076 123.205C153.212 125.447 153.902 128.015 154.144 130.909ZM209.448 136.727C209.448 141.909 208.441 146.28 206.425 149.841C204.41 153.386 201.691 156.076 198.266 157.909C194.842 159.727 191.024 160.636 186.812 160.636C182.569 160.636 178.736 159.72 175.312 157.886C171.903 156.038 169.191 153.341 167.175 149.795C165.175 146.235 164.175 141.879 164.175 136.727C164.175 131.545 165.175 127.182 167.175 123.636C169.191 120.076 171.903 117.386 175.312 115.568C178.736 113.735 182.569 112.818 186.812 112.818C191.024 112.818 194.842 113.735 198.266 115.568C201.691 117.386 204.41 120.076 206.425 123.636C208.441 127.182 209.448 131.545 209.448 136.727ZM196.448 136.727C196.448 133.939 196.077 131.591 195.335 129.682C194.607 127.758 193.524 126.303 192.085 125.318C190.66 124.318 188.903 123.818 186.812 123.818C184.721 123.818 182.956 124.318 181.516 125.318C180.092 126.303 179.009 127.758 178.266 129.682C177.539 131.591 177.175 133.939 177.175 136.727C177.175 139.515 177.539 141.871 178.266 143.795C179.009 145.705 180.092 147.159 181.516 148.159C182.956 149.144 184.721 149.636 186.812 149.636C188.903 149.636 190.66 149.144 192.085 148.159C193.524 147.159 194.607 145.705 195.335 143.795C196.077 141.871 196.448 139.515 196.448 136.727ZM247.32 113.455H259.957V143.273C259.957 146.818 259.108 149.886 257.411 152.477C255.729 155.053 253.381 157.045 250.366 158.455C247.351 159.848 243.851 160.545 239.866 160.545C235.851 160.545 232.335 159.848 229.32 158.455C226.305 157.045 223.957 155.053 222.275 152.477C220.608 149.886 219.775 146.818 219.775 143.273V113.455H232.411V142.182C232.411 143.621 232.729 144.909 233.366 146.045C234.002 147.167 234.881 148.045 236.002 148.682C237.138 149.318 238.426 149.636 239.866 149.636C241.32 149.636 242.608 149.318 243.729 148.682C244.851 148.045 245.729 147.167 246.366 146.045C247.002 144.909 247.32 143.621 247.32 142.182V113.455ZM270.442 160V113.455H290.533C293.988 113.455 297.01 114.083 299.601 115.341C302.192 116.598 304.207 118.409 305.647 120.773C307.086 123.136 307.806 125.97 307.806 129.273C307.806 132.606 307.063 135.417 305.579 137.705C304.109 139.992 302.041 141.72 299.374 142.886C296.723 144.053 293.624 144.636 290.079 144.636H278.079V134.818H287.533C289.018 134.818 290.283 134.636 291.329 134.273C292.389 133.894 293.2 133.295 293.76 132.477C294.336 131.659 294.624 130.591 294.624 129.273C294.624 127.939 294.336 126.856 293.76 126.023C293.2 125.174 292.389 124.553 291.329 124.159C290.283 123.75 289.018 123.545 287.533 123.545H283.079V160H270.442ZM297.715 138.636L309.351 160H295.624L284.26 138.636H297.715ZM316.4 123.636V113.455H356.854V123.636H342.854V160H330.4V123.636H316.4ZM406.362 113.455V160H395.817L378.999 135.545H378.726V160H366.09V113.455H376.817L393.362 137.818H393.726V113.455H406.362ZM416.82 160V113.455H450.365V123.636H429.456V131.636H448.638V141.818H429.456V149.818H450.274V160H416.82ZM459.203 113.455H473.294L482.385 132.364H482.749L491.84 113.455H505.93L488.84 145.364V160H476.294V145.364L459.203 113.455Z"
            fill="hsl(var(--nextui-default-900))"
          />
        </svg>
      </div>

      {/* <Subtitle /> */}

      {containerSize && <WordCycle containerSize={containerSize} />}

      {containerSize && <HomeScrollLine containerSize={containerSize} />}
    </section>
  );
};

export default HomeSection;
