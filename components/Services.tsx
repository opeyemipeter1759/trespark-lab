import React from 'react';
import { ListChecks, Palette, Layers, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <ListChecks size={32} className="text-primary mb-2" strokeWidth={1.5} />,
    title: 'MVP Strategy',
    description: 'Defining core features and a go-to-market plan for maximum impact.',
  },
  {
    icon: <Palette size={32} className="text-primary mb-2" strokeWidth={1.5} />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful interfaces that users love.',
  },
  {
    icon: <Layers size={32} className="text-primary mb-2" strokeWidth={1.5} />,
    title: 'Full-Stack Development',
    description: 'Building robust and scalable products with modern technology.',
  },
  {
    icon: <Megaphone size={32} className="text-primary mb-2" strokeWidth={1.5} />,
    title: 'Go-to-Market Support',
    description: 'Assisting with your launch strategy for a successful market entry.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 sm:py-24" id="services">
      <div className="px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12 text-secondary dark:text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-3 rounded-xl border border-card-light dark:border-card-dark p-6 bg-transparent hover:border-primary/50 transition-colors"
            >
              {service.icon}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
                <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;