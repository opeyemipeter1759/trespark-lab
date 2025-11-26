import React from 'react';
import { ListChecks, Palette, Layers, Megaphone } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-16 sm:py-24" id="services">
      <div className="px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12 text-secondary dark:text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-3 rounded-xl border border-card-light dark:border-card-dark p-6 bg-transparent hover:border-primary/50 transition-colors">
            <ListChecks size={32} className="text-primary mb-2" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">MVP Strategy</h3>
              <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                Defining core features and a go-to-market plan for maximum impact.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-xl border border-card-light dark:border-card-dark p-6 bg-transparent hover:border-primary/50 transition-colors">
            <Palette size={32} className="text-primary mb-2" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">UI/UX Design</h3>
              <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                Crafting intuitive and beautiful interfaces that users love.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-xl border border-card-light dark:border-card-dark p-6 bg-transparent hover:border-primary/50 transition-colors">
            <Layers size={32} className="text-primary mb-2" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">Full-Stack Development</h3>
              <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                Building robust and scalable products with modern technology.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-xl border border-card-light dark:border-card-dark p-6 bg-transparent hover:border-primary/50 transition-colors">
            <Megaphone size={32} className="text-primary mb-2" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">Go-to-Market Support</h3>
              <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                Assisting with your launch strategy for a successful market entry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;