import { interpolate } from "flubber";
import { MotionValue, useTransform } from "framer-motion";

interface PathObject {
  pathFrom: string,
  pathTo: string
}

const useFlubber = (
  progress: MotionValue<number>,
  pathFrom: string[],
  pathTo: string[]
) => {
  if (pathFrom.length !== pathTo.length) {
    throw new Error("Arrays must have the same length");
  }

  const paths: PathObject[] = [];
  for (let i = 0; i < pathFrom.length; i++) {
    const pathObject = { pathFrom: pathFrom[i], pathTo: pathTo[i] };
    paths.push(pathObject);
  }

  const getIndex = paths.map((_, i) => i);
  const motionPaths = paths.map((pathObject) => {
    return useTransform(progress, [0,1], [pathObject.pathFrom, pathObject.pathTo], {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1}),
    });
  });
  

  return motionPaths;
};

export default useFlubber;
