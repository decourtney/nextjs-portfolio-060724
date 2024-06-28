import { motion, useAnimate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
    <section ref={ref} className="w-full p-2">
      <motion.div
        ref={scope}
        className="w-full p-3 text-[hsl(var(--nextui-background))] bg-[hsl(var(--nextui-background))] shadow-none rounded-lg text-tiny"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          incidunt delectus et. Ipsa distinctio facilis inventore veniam
          quisquam quibusdam cumque sequi optio placeat neque eum consectetur,
          beatae, accusantium laboriosam provident mollitia. In, vero ipsum at,
          doloremque molestias provident amet nulla illo labore quia ducimus
          aliquid qui? 
        </p>
      </motion.div>
    </section>
  );
}

export default PopupBox