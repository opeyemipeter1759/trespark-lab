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

      {/* Team Section */}
      <section className="flex flex-1 justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 max-w-6xl w-full">
          <h2 className="text-secondary dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-4">
              <img
                className="size-48 rounded-full object-cover"
                alt="Headshot of Alex Chen, Founder & CEO"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCDZ0oqSliNZZHvRfjYa5rKMm95Fk8IRTdVoOCDCCixZGM581H8DUQT33HZh29rOryAQN6Ki9ZCF7QptPKCvcG3HkYCfkrvUqwOBNKc-Tsu9yI6Gg69NIGxraRC2ifJOyzsB-mgmgh5yiu4yJ0CZdplO16Mgv5FHXugfpltrxiW6eLXMBwdfphvefQ7CO2cf2qL-GhzQo4ctwe9Vv9vABmSIHesS-2nU-S3q2n7LmVUHzb-E1bLTvP7LsxRq0vaohUINgYgBMNXbuq"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-secondary dark:text-white">Opeyemi Peter</h3>
                <p className="text-sm font-medium text-primary">Founder & CEO</p>
              </div>
              <p className="text-sm text-muted-light dark:text-muted-dark max-w-xs">
                A serial entrepreneur with two successful exits, Opeyemi Peter founded the lab to help founders avoid the pitfalls he encountered on his journey.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <img
                className="size-48 rounded-full object-cover"
                alt="Headshot of Maria Rodriguez, Lead Product Strategist"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBft2rIXqbcSeMW1dLqFKVqFWsKeDNdR_B7pxV9NFiidtuW_q7iwRnnUVUR_ZqzEuJ8ZZNytJF52nU3DD0BkBvfNzZabRMpPxwDQHQlclA48CNKppoF1xEeIEo9n-1Ym7YheY2Gb1TUOeSY8x1cx3q2BTCKi-dc15m2WS8VYvqFCDrbrLSeRAtcZvipOIRjfYhtQYTbLaBw8NfCdxqXCmmW4DhzaOfftGOITXx9HrqY3J1OjMXQPfGURe3n2Hxm5v01MwrnKPT0yhd"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-secondary dark:text-white">Daniel Olaniyan </h3>
                <p className="text-sm font-medium text-primary">Lead Product Strategist</p>
              </div>
              <p className="text-sm text-muted-light dark:text-muted-dark max-w-xs">
                With a decade of experience at top tech firms,Daniel  specializes in market validation and building products users love.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <img
                className="size-48 rounded-full object-cover"
                alt="Headshot of David Lee, Head of Engineering"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5rMRObJafsqj1kVyFV1b-aLlo6vcbfi3JgsVNZBXx30O3sYTdaGA0KdELn_epTXOWElQUpzFsGRSmakA8rj6E8wdCWzB9AZrmgkmC-FY4JgmLYrHD2KIUOqVKnQLIpUNkjbQgdbyc2Qbr3k8zCeNXGXyht3urKwE9fBK8CtWrLo6UZV1fhKOUa-GI5ih4x521IE-ez7WShd3OzX28f55cMlj8QMntme9JQF839BI7j-AB4lL3Vdsj4jqfdknWiAJ0r77pZGLMyhji"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-secondary dark:text-white">David Lee</h3>
                <p className="text-sm font-medium text-primary">Head of Engineering</p>
              </div>
              <p className="text-sm text-muted-light dark:text-muted-dark max-w-xs">
                David is a full-stack architect who excels at building scalable, robust systems from the ground up for early-stage startups.
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