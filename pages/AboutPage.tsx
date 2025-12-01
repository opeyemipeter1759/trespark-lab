import React from 'react';
import { Users, Rocket, Eye, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
        <div className="flex flex-col items-center text-center max-w-4xl flex-1 gap-6">
          <h1 className="text-secondary dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl">
            We Partner with Founders to Build the Future
          </h1>
          <h2 className="text-secondary dark:text-muted-dark text-base font-normal leading-normal max-w-2xl sm:text-lg lg:text-xl">
            Our firm exists to turn brilliant ideas into tangible, market-ready products. We provide the strategy, expertise, and execution needed for visionary founders to succeed.
          </h2>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="flex flex-1 justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-secondary dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
              Our Story
            </h2>
            <p className="text-secondary dark:text-muted-dark text-base font-normal leading-relaxed">
              Our firm was founded to address the most critical challenges founders face: turning a brilliant idea into a tangible, successful product without wasting time or resources. Having walked in the shoes of early-stage builders, we saw a gap between great concepts and great execution. We created the Product Lab to be the partner we wished we had—a dedicated team focused on building, launching, and scaling MVPs with speed and precision.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-secondary dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
              Our Vision
            </h2>
            <p className="text-secondary dark:text-muted-dark text-base font-normal leading-relaxed">
              We're committed to empowering the next generation of innovators. Our vision is to create a launchpad where ambitious founders can see their ideas come to life and make a meaningful impact. We believe that by providing the right blend of strategic guidance and hands-on product development, we can help build the companies that will define tomorrow's industries and solve its most pressing problems.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="flex flex-1 justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card-light dark:bg-background-dark">
        <div className="flex flex-col items-center gap-12 max-w-6xl w-full">
          <h2 className="text-secondary dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
            <div className="flex flex-col items-start text-left gap-4 p-6 rounded-xl bg-background-light dark:bg-card-dark">
              <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                <Users className="size-8" />
              </div>
              <h3 className="text-secondary dark:text-white text-xl font-bold">Founder Obsession</h3>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                Your vision is our mission. We embed ourselves in your team and are relentlessly focused on your success.
              </p>
            </div>
            <div className="flex flex-col items-start text-left gap-4 p-6 rounded-xl bg-background-light dark:bg-card-dark">
              <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                <Rocket className="size-8" />
              </div>
              <h3 className="text-secondary dark:text-white text-xl font-bold">Pragmatic Innovation</h3>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                We build what matters. Our focus is on practical, effective solutions that solve real problems and drive growth.
              </p>
            </div>
            <div className="flex flex-col items-start text-left gap-4 p-6 rounded-xl bg-background-light dark:bg-card-dark">
              <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                <Eye className="size-8" />
              </div>
              <h3 className="text-secondary dark:text-white text-xl font-bold">Radical Transparency</h3>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                Open, honest communication is our default. We share progress, challenges, and feedback directly.
              </p>
            </div>
            <div className="flex flex-col items-start text-left gap-4 p-6 rounded-xl bg-background-light dark:bg-card-dark">
              <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                <Zap className="size-8" />
              </div>
              <h3 className="text-secondary dark:text-white text-xl font-bold">Execution Over Everything</h3>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                Ideas are easy, execution is everything. We prioritize shipping quality products quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="flex flex-1 justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card-light dark:bg-background-dark/50" id="contact">
        <div className="flex flex-col items-center gap-6 max-w-3xl w-full text-center">
          <h2 className="text-secondary dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl">
            Ready to build your MVP?
          </h2>
          <p className="text-muted-light dark:text-muted-dark text-base font-normal leading-normal max-w-xl">
            Let's have a conversation about your idea and how we can help bring it to life. The first step is a simple, no-obligation chat.
          </p>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-secondary dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Let's Talk</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;