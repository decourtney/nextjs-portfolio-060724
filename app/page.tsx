import { NameSVG, LetterYSVG, FullNameSVG } from "./components/SVGs";
import { Card, Flex, Text, Box, Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex justify={"center"} align={"center"}>
      <Box width="256rem" >
        <FullNameSVG />
      </Box>
    </Flex>
  );
}
