import { Card, CardBody } from "@nextui-org/react";
import { Box, TextArea } from "@radix-ui/themes";
import {
  inView,
  motion,
  useAnimate,
  useInView,
  animationControls,
  useAnimation,
  transform,
} from "framer-motion";
import React, {
  MouseEventHandler,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { filter, transition } from "d3";

const AboutSection = () => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  useEffect(() => {
    if (isInView) {
      const openSequence = async () => {
        await animate(
          scope.current,
          {
            boxShadow:
              "0px 0px 10px 0px hsl(var(--nextui-foreground)), 1px 3px 2px 0px #E0DFFE",
          },
          { type: "spring", stiffness: 100 }
        );

        animate(
          scope.current,
          {
            x: -10,
            y: -30,
            boxShadow:
              "10px 30px 2px 0px hsl(var(--nextui-foreground)), 10px 30px 20px 0px #E0DFFE",
          },
          { type: "spring", stiffness: 100 }
        );

        animate(
          "p",
          { opacity: 1 },
          { delay: 1, type: "spring", stiffness: 100 }
        );
      };

      openSequence();
    } else {
      const closeSequence = async () => {
        animate(
          scope.current,
          {
            x: 0,
            y: 0,
            boxShadow: "none",
          },
          { type: "tween", ease: "easeInOut", duration: 0.5 }
        );

        animate("p", { opacity: 0 });
      };

      closeSequence();
    }
  }, [isInView]);

  return (
    <section id="about" className="w-full h-dvh">
      <Box ref={ref} className="relative h-fit max-w-[500px] z-50">
        <motion.div
          ref={scope}
          className="w-full p-3 bg-[hsl(var(--nextui-background))] shadow-none rounded-lg"
        >
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
        </motion.div>
      </Box>
    </section>
  );
};

export default AboutSection;
