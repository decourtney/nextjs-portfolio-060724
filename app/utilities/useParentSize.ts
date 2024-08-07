import { useEffect, useRef, useState } from "react";

type Size = {
  width: number;
  height: number;
};

const useParentSize = () => {
  const childRef = useRef<HTMLDivElement>(null); // Reference to the child element
  const [parentSize, setParentSize] = useState<Size | null>(null);

  useEffect(() => {
    if (!childRef.current) return;

    const childElement = childRef.current;
    const parentElement = childElement.parentElement;

    console.log(childElement.clientWidth)
    if (!parentElement) return;

    const updateSize = () => {
      setParentSize({
        width: parentElement.clientWidth,
        height: parentElement.clientHeight,
      });
    };

    // Create a ResizeObserver to monitor the parent's size changes
    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });

    resizeObserver.observe(parentElement); // Start observing the parent

    // Set initial size
    updateSize();

    // Cleanup: Unobserve the parent element on component unmount
    return () => {
      resizeObserver.unobserve(parentElement);
    };
  }, [childRef]);

  return { childRef, parentSize };
};

export default useParentSize;
