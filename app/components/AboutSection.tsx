import { Box, Card, Container, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="h-dvh pt-12">
      {/* TODO need better shadow color */}
      <Box maxWidth={"500px"} >
        <Card
          size={"3"}
          variant="ghost"
          style={{
            boxShadow: "15px 15px 2px 0px #fff, -5px -5px 40px #000",
            color: "#fff",
          }}
        >
          <Text size={"3"} weight={"bold"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            incidunt delectus et. Ipsa distinctio facilis inventore veniam
            quisquam quibusdam cumque sequi optio placeat neque eum consectetur,
            beatae, accusantium laboriosam provident mollitia. In, vero ipsum
            at, doloremque molestias provident amet nulla illo labore quia
            ducimus aliquid qui? Mollitia nobis maxime rerum saepe, odit
            corrupti magni fuga voluptatum unde debitis impedit? Minus aliquid
            nostrum reiciendis omnis autem reprehenderit qui molestiae libero
            adipisci incidunt doloremque, saepe commodi culpa placeat distinctio
            eos. Laudantium minima quisquam sapiente officiis nulla unde eius
            hic culpa minus doloribus quos quas blanditiis a, consectetur,
            officia, magni totam qui architecto!
          </Text>
        </Card>
      </Box>
    </section>
  );
};

export default AboutSection;
