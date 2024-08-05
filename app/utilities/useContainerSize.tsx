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

    const element = ref.current;

    const updateSize = () => {
      setContainerSize({
        width: element.clientWidth,
        height: element.clientHeight,
      });
    };

    // Create a ResizeObserver to monitor the element's size changes
    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });

    resizeObserver.observe(element); // Start observing the element

    // Set initial size
    updateSize();

    // Cleanup: Unobserve the element on component unmount
    return () => {
      resizeObserver.unobserve(element);
    };
  }, [ref]);

  return { ref, containerSize };
};

export default useContainerSize;
