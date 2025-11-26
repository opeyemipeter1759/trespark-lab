import React from 'react';
import { Lightbulb, Code, Rocket } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-card-light dark:bg-secondary rounded-xl my-16" id="how-it-works">
      <div className="px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12 text-secondary dark:text-white">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Step 1 */}
          <div className="flex flex-1 flex-col items-center text-center gap-4 rounded-lg bg-background-light dark:bg-card-dark p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary mb-2">
              <Lightbulb size={28} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">1. Strategy &amp; Discovery</h3>
              <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                We dive deep into your concept to define a clear roadmap and strategy for your minimum viable product.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-1 flex-col items-center text-center gap-4 rounded-lg bg-background-light dark:bg-card-dark p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary mb-2">
              <Code size={28} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">2. Rapid Prototyping &amp; Build</h3>
              <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                Our expert team designs and develops a high-quality, functional MVP with speed and precision.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-1 flex-col items-center text-center gap-4 rounded-lg bg-background-light dark:bg-card-dark p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary mb-2">
              <Rocket size={28} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">3. Launch &amp; Iterate</h3>
              <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                We help you launch your product to the market and gather feedback for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;