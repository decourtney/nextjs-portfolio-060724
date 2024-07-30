import { useEffect, useRef, useState } from "react";

type Size = {
  width: number;
  height: number;
};

const useContainerSize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<Size | null>(null);

  useEffect(() => {
    if (!ref.current) return;

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

  return { ref, containerSize };
};

export default useContainerSize;
