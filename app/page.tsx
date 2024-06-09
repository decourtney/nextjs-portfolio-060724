import {
  NameSVG,
  LetterYSVG,
  FullNameSVG,
  ScrollLineSVG,
} from "./components/SVGs";
import { Card, Flex, Text, Box, Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction={"column"} justify={"center"} align={"center"}>
      <Box minWidth={{ initial: "100%", md: "75%", lg: "50%" }}>
        <FullNameSVG />
        <Box position={"relative"} height={"100vh"} className="bg-gray-800">
          <Box position={"absolute"} left={"50%"} top={"0"}>
            <ScrollLineSVG />
          </Box>
        </Box>
      </Box>
      <Box>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          nihil voluptas repellendus itaque eaque facilis minima facere
          quibusdam minus consectetur perspiciatis aliquid iure quasi placeat
          nulla ex dolore, ipsam expedita.
        </Text>
      </Box>
    </Flex>
  );
}
