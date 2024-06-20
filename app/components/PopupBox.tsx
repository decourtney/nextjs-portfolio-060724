import { Box } from '@radix-ui/themes';
import { motion, useAnimate, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const PopupBox = () => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  useEffect(() => {
    if (isInView) {
      const openSequence = async () => {
        await animate(
          scope.current,
          {
            // color: "hsl(var(--nextui-content1))",
            boxShadow:
              "1px 3px 2px 0px hsl(var(--nextui-foreground)), 0px 0px 3px 0px #E0DFFE",
          },
          { type: "spring", stiffness: 50 }
        );

        await animate(
          "p",
          { color: "hsl(var(--nextui-foreground))" },
          { duration: 5 }
        );

        animate(
          scope.current,
          {
            x: -5,
            y: -30,
            backgroundColor: "hsl(var(--nextui-content1))",
            boxShadow:
              "5px 30px 2px 0px hsl(var(--nextui-foreground)), 5px 30px 10px 0px #E0DFFE",
          },
          { type: "spring", stiffness: 50 }
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
            color: "hsl(var(--nextui-background))",
            backgroundColor: "hsl(var(--nextui-background))",
            boxShadow: "none",
          },
          { type: "tween", ease: "easeInOut", duration: 0.5 }
        );

        animate("p", { color: "hsl(var(--nextui-background))" });
      };

      closeSequence();
    }
  }, [isInView]);
  
  return (
    <Box ref={ref} className="relative h-fit max-w-[500px] z-50">
      <motion.div
        ref={scope}
        className="w-full p-3 text-[hsl(var(--nextui-background))] bg-[hsl(var(--nextui-background))] shadow-none rounded-lg"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          incidunt delectus et. Ipsa distinctio facilis inventore veniam
          quisquam quibusdam cumque sequi optio placeat neque eum consectetur,
          beatae, accusantium laboriosam provident mollitia. In, vero ipsum at,
          doloremque molestias provident amet nulla illo labore quia ducimus
          aliquid qui? Mollitia nobis maxime rerum saepe, odit corrupti magni
          fuga voluptatum unde debitis impedit? Minus aliquid nostrum reiciendis
          omnis autem reprehenderit qui molestiae libero adipisci incidunt
          doloremque, saepe commodi culpa placeat distinctio eos. Laudantium
          minima quisquam sapiente officiis nulla unde eius hic culpa minus
          doloribus quos quas blanditiis a, consectetur, officia, magni totam
          qui architecto!
        </p>
      </motion.div>
    </Box>
  );
}

export default PopupBox
