import { Card, CardBody } from "@nextui-org/react";
import { Box, TextArea } from "@radix-ui/themes";
import { inView, motion, useAnimate, useInView } from "framer-motion";
import React, {
  MouseEventHandler,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import MotionInfoCard from "./InfoCard";
import { transform } from "next/dist/build/swc";

const AboutSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 1 });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        {
          opacity: 1,
          boxShadow:
            "10px 30px 2px 0px hsl(var(--nextui-foreground)), 10px 30px 20px 0px #E0DFFE",
        },
        { duration: 1, type: "spring", stiffness: 100 }
      );
    } else {
      animate(
        scope.current,
        {
          opacity: 0,
          boxShadow: "none",
        },
        { duration: 1, type: "spring", stiffness: 50 }
      );
    }
  }, [isInView]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const card = ref.current!.getBoundingClientRect();
  //     setIsInView(card.top >= 0 && card.bottom <= window.innerHeight);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section id="about" className="relative w-full h-dvh">
      <Box className={`max-w-[500px]`}>
        <MotionInfoCard ref={scope}>
          <p>
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
          </p>
        </MotionInfoCard>
        {/* <Card
          fullWidth
          radius="sm"
          style={{
            transform: isInView ? `translate(0) ` : "translate(10px, 30px)",
            boxShadow: isInView
              ? "10px 30px 2px 0px hsl(var(--nextui-foreground)), 10px 30px 20px 0px #E0DFFE"
              : "none",
            color: "hsl(var(--nextui-primary)",
            textShadow: "0px 1px 1px #E0DFFE",
            backgroundColor: isInView
              ? "hsl(var(--nextui-content1))"
              : "hsl(var(--nextui-background))",
            transition: "all .5s",
          }}
        >
          <CardBody>
            <p style={{ opacity: isInView ? "1" : "0", transition: "all .5s" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              incidunt delectus et. Ipsa distinctio facilis inventore veniam
              quisquam quibusdam cumque sequi optio placeat neque eum
              consectetur, beatae, accusantium laboriosam provident mollitia.
              In, vero ipsum at, doloremque molestias provident amet nulla illo
              labore quia ducimus aliquid qui? Mollitia nobis maxime rerum
              saepe, odit corrupti magni fuga voluptatum unde debitis impedit?
              Minus aliquid nostrum reiciendis omnis autem reprehenderit qui
              molestiae libero adipisci incidunt doloremque, saepe commodi culpa
              placeat distinctio eos. Laudantium minima quisquam sapiente
              officiis nulla unde eius hic culpa minus doloribus quos quas
              blanditiis a, consectetur, officia, magni totam qui architecto!
            </p>
          </CardBody>
        </Card> */}
      </Box>
    </section>
  );
};

export default AboutSection;
