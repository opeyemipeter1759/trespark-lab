import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // premium easing (like Vercel/Linear)
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24" id="testimonials">
      <div className="px-4">

        {/* Title Animation */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12 text-secondary dark:text-white"
        >
          What Founders Are Saying
        </motion.h2>

        {/* Container with Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between gap-6 rounded-xl bg-card-light dark:bg-card-dark p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <p className="text-foreground-light dark:text-foreground-dark italic">
                {i === 1 &&
                  `"Working with Product Lab was a game-changer. They took our rough concept and turned it into a polished, market-ready MVP in just 8 weeks. Unbelievable speed and quality."`}

                {i === 2 &&
                  `"The team's expertise in both strategy and execution is unmatched. They understood our vision and helped us avoid costly mistakes. Highly recommended."`}

                {i === 3 &&
                  `"Their iterative process allowed us to launch, gather feedback, and adapt quickly. We wouldn’t be where we are today without their guidance."`}
              </p>

              <div className="flex items-center gap-4">
                <div>
                  {i === 1 && (
                    <>
                      <h4 className="font-bold">Monique L.</h4>
                      <p className="text-sm text-muted-light dark:text-muted-dark">
                        Media Chronometer
                      </p>
                    </>
                  )}

                  {i === 2 && (
                    <>
                      <h4 className="font-bold">Kenny</h4>
                      <p className="text-sm text-muted-light dark:text-muted-dark">
                        Fojo Global  
                      </p>
                    </>
                  )}

                  {i === 3 && (
                    <>
                      <h4 className="font-bold">Isaac</h4>
                      <p className="text-sm text-muted-light dark:text-muted-dark">
                        RCA
                      </p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
