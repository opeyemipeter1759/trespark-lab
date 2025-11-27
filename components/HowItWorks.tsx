import React, { useRef } from "react";
import { Lightbulb, Code, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // strong easing
      delay: i * 0.18,
    },
  }),
  exit: {
    opacity: 0,
    y: 80,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HowItWorks: React.FC = () => {
  const ref = useRef(null);

  // Trigger every time in and out of view
  const inView = useInView(ref, { once: false, margin: "-150px" });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 bg-card-light dark:bg-secondary rounded-xl my-16"
      id="how-it-works"
    >
      <div className="px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12 text-secondary dark:text-white">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Step 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "exit"}
            className="flex flex-1 flex-col items-center text-center gap-4 rounded-lg bg-background-light dark:bg-card-dark p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary mb-2"
            >
              <Lightbulb size={28} strokeWidth={2} />
            </motion.div>

            <h3 className="text-lg font-bold leading-tight">1. Strategy &amp; Discovery</h3>
            <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
              We dive deep into your concept to define a clear roadmap and strategy for your minimum viable product.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "exit"}
            className="flex flex-1 flex-col items-center text-center gap-4 rounded-lg bg-background-light dark:bg-card-dark p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary mb-2"
            >
              <Code size={28} strokeWidth={2} />
            </motion.div>

            <h3 className="text-lg font-bold leading-tight">2. Rapid Prototyping &amp; Build</h3>
            <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
              Our expert team designs and develops a high-quality, functional MVP with speed and precision.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "exit"}
            className="flex flex-1 flex-col items-center text-center gap-4 rounded-lg bg-background-light dark:bg-card-dark p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary mb-2"
            >
              <Rocket size={28} strokeWidth={2} />
            </motion.div>

            <h3 className="text-lg font-bold leading-tight">3. Launch &amp; Iterate</h3>
            <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
              We help you launch your product and gather feedback for continuous improvement.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
