import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'

const Subtitle = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["-400px", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const shadowX = useTransform(scrollYProgress, [0, 1], [2, 0]);
    const shadowY = useTransform(scrollYProgress, [0, 1], [3, 0]);
    
  return (
    <section ref={ref} className="mt-5 ml-5 w-full h-[75%]">
      <motion.div className=' top-0' style={{ x, y }}>
        <motion.p
          className={`text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black `}
          animate={{
            filter: `drop-shadow(2px 3px 0px hsl(var(--nextui-foreground))`,
          }}
          style={{
            color: "hsl(var(--nextui-background))",
            // filter: `drop-shadow(2px ${shadowY}px 0px hsl(var(--nextui-foreground)))`,
          }}
        >
          DEVELOPER
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Subtitle
