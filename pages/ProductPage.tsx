import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import Testimonials from '../components/Testimonials';

const ProductPage: React.FC = () => {
  const location = useLocation();
  const { project } = location.state;

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, desc, tags, image, link } = project;
  const tagList = tags.split(', ').map((tag: string) => tag.trim());

  return (
    <div>
      {/* Back Button */}
      <div className="py-8">
        <Link
          to="/portfolio"
          className="flex items-center gap-2 text-sm font-bold text-muted-light dark:text-muted-dark hover:text-primary transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <main className="flex flex-col gap-16">
        {/* Project Header */}
        <section className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl text-secondary dark:text-white">
            {title}
          </h1>
          <p className="text-base font-normal leading-normal sm:text-lg text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
            {desc}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-primary text-secondary dark:text-white font-bold hover:opacity-90 transition-opacity"
              >
                <span>Live Preview</span>
                <ExternalLink className="size-5" />
              </a>
            )}
          </div>
        </section>

        {/* Project Image */}
        <section>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column (Details) */}
          <div className="md:col-span-2 flex flex-col gap-12">
            {/* The Challenge */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-secondary dark:text-white">The Challenge</h2>
              <p className="text-muted-light dark:text-muted-dark">
                The client needed a cutting-edge solution to address a key market need. The primary challenge was to create an intuitive user experience while incorporating complex functionalities. The timeline was tight, and the project required a scalable and robust architecture to ensure long-term success.
              </p>
            </section>

            {/* Our Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-secondary dark:text-white">Our Solution</h2>
              <p className="text-muted-light dark:text-muted-dark mb-6">
                Our team executed a comprehensive strategy, focusing on rapid prototyping, agile development, and continuous feedback. We prioritized core features to deliver a high-impact MVP, ensuring the product was market-ready in the shortest possible time.
              </p>
              <ul className="flex flex-col gap-4 text-muted-light dark:text-muted-dark">
                <li className="flex gap-3">
                  <CheckCircle className="flex-shrink-0 text-primary mt-1 size-5" />
                  <span>
                    <strong>User-Centric Design:</strong> We crafted a seamless and engaging user interface based on extensive user research and testing.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="flex-shrink-0 text-primary mt-1 size-5" />
                  <span>
                    <strong>Agile Development:</strong> We utilized an agile methodology to ensure flexibility and rapid iteration, allowing us to adapt to changing requirements.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="flex-shrink-0 text-primary mt-1 size-5" />
                  <span>
                    <strong>Scalable Architecture:</strong> We built a future-proof backend that could handle growth and evolving business needs.
                  </span>
                </li>
              </ul>
            </section>
          </div>

          {/* Right Column (Key Outcomes) */}
          <aside className="flex flex-col gap-8">
             <div className="p-6 bg-card-light dark:bg-card-dark rounded-xl">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">Key Outcomes</h3>
              <ul className="flex flex-col gap-4">
                <li className="border-b border-muted-light/20 dark:border-muted-dark/20 pb-3">
                  <span className="block text-2xl font-bold text-primary">50%</span>
                  <span className="text-sm text-muted-light dark:text-muted-dark">Faster Time-to-Market</span>
                </li>
                <li className="border-b border-muted-light/20 dark:border-muted-dark/20 pb-3">
                  <span className="block text-2xl font-bold text-primary">+200%</span>
                  <span className="text-sm text-muted-light dark:text-muted-dark">User Engagement Increase</span>
                </li>
                <li>
                  <span className="block text-2xl font-bold text-primary">$1M+</span>
                  <span className="text-sm text-muted-light dark:text-muted-dark">in First-Year Revenue</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-card-light dark:bg-card-dark rounded-xl">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {tagList.map((tag: string, index: number) => (
                  <span key={index} className="py-1 px-3 text-sm rounded-full bg-primary/20 text-primary">{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA */}
        <section className="bg-secondary dark:bg-card-dark rounded-xl px-6 py-12 sm:p-16 text-center shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4 text-white">
            Ready to Build Your Big Idea?
          </h2>
          <p className="text-muted-dark mb-8 max-w-2xl mx-auto">
            Let's talk about how we can turn your vision into a reality. Schedule a free, no-obligation strategy call with our experts today.
          </p>
          <Link to="/#contact" className="flex min-w-[84px] mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-secondary dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Schedule a Free Strategy Call</span>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
