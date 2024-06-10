import {
  NameSVG,
  LetterYSVG,
  FullNameSVG,
  ScrollLineSVG,
} from "./components/SVGs";
import { Card, Flex, Text, Box, Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction={"column"} align={"center"}>
      <Box minWidth={{ initial: "100%", md: "75%", lg: "50%" }}>
        <Box>
          <FullNameSVG />
        </Box>
        <Box position={"relative"} width={"100%"} mt="-1">
          <ScrollLineSVG />
        </Box>
      </Box>
    </Flex>
  );
}
