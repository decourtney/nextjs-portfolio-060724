interface ParsedCommand {
  command: string;
  coords: number[][];
}

interface PathSegment {
  startCommand: ParsedCommand;
  subsequentCommands: ParsedCommand[];
}

export default function ParseSvgPath(svgPath: string): {
  segments: PathSegment[];
} {
  const pattern = /([MmLlHhVvCcSsQqTtAaZz])|(-?\d*\.?\d+(?:e[-+]?\d+)?)/g;

  const tokens = svgPath.match(pattern);

  if (!tokens) {
    return { segments: [] };
  }

  const segments: PathSegment[] = [];
  let currentSegment: PathSegment | null = null;
  let currentCommand: string | null = null;
  let currentCoords: number[][] = [];

  function extractCoords(n: number): number[][] {
    const coords: number[][] = [];
    for (let i = 0; i < n; i++) {
      const x = parseFloat(tokens!.shift()!);
      const y = parseFloat(tokens!.shift()!);
      coords.push([x, y]);
    }
    return coords;
  }

  while (tokens.length > 0) {
    const token = tokens.shift()!;

    if (/^[MmLlHhVvCcSsQqTtAaZz]$/.test(token)) {
      if (currentCommand) {
        if (currentSegment) {
          currentSegment.subsequentCommands.push({
            command: currentCommand,
            coords: currentCoords,
          });
        }
      }
      currentCommand = token;
      currentCoords = [];

      if (token === "M" || token === "m") {
        if (currentSegment) {
          segments.push(currentSegment);
        }
        currentSegment = {
          startCommand: { command: token, coords: extractCoords(1) },
          subsequentCommands: [],
        };
      }
    } else {
      tokens.unshift(token);
      switch (currentCommand) {
        case "M":
        case "L":
        case "m":
        case "l":
          currentCoords.push(...extractCoords(1));
          break;
        case "C":
        case "c":
        case "S":
        case "s":
        case "Q":
        case "q":
          currentCoords.push(...extractCoords(3));
          break;
        case "T":
        case "t":
          currentCoords.push(...extractCoords(1));
          break;
        case "A":
        case "a":
          const rx = parseFloat(tokens.shift()!);
          const ry = parseFloat(tokens.shift()!);
          const xAxisRotation = parseFloat(tokens.shift()!);
          const largeArcFlag = parseFloat(tokens.shift()!);
          const sweepFlag = parseFloat(tokens.shift()!);
          const x = parseFloat(tokens.shift()!);
          const y = parseFloat(tokens.shift()!);
          currentCoords.push([
            rx,
            ry,
            xAxisRotation,
            largeArcFlag,
            sweepFlag,
            x,
            y,
          ]);
          break;
        case "H":
        case "h":
          const hx = parseFloat(tokens.shift()!);
          currentCoords.push([hx]);
          break;
        case "V":
        case "v":
          const vy = parseFloat(tokens.shift()!);
          currentCoords.push([vy]);
          break;
        case "Z":
        case "z":
          if (currentSegment) {
            currentSegment.subsequentCommands.push({
              command: currentCommand,
              coords: [],
            });
          }
          currentCommand = null;
          break;
      }
    }
  }

  if (currentSegment) {
    segments.push(currentSegment);
  }

  return { segments };
}
