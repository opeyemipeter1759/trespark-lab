import React from 'react';
import { ListChecks, CheckCircle, Palette, Layers, Megaphone } from 'lucide-react';
import CTA from '../components/CTA';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <section className="py-16 sm:py-24 text-center">
        <div className="px-4">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl text-secondary dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-base font-normal leading-normal sm:text-lg text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
            We offer a suite of services designed to take your idea from concept to a successful market launch. Our founder-focused approach ensures we're not just building a product, but a business.
          </p>
        </div>
      </section>

      <div className="space-y-20 mb-20">
        <section className="px-4" id="mvp-strategy">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-primary">
                <ListChecks className="size-10" strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] text-secondary dark:text-white">
                  MVP Strategy
                </h2>
              </div>
              <p className="text-muted-light dark:text-muted-dark">
                A brilliant idea is just the beginning. We help you refine your vision into a concrete, actionable plan. Our MVP Strategy service is about identifying the core value proposition and defining the minimum feature set required to validate your concept with real users, saving you time and resources.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Benefits:</span> Gain market clarity, minimize development waste, and create a clear roadmap for success.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Case Study:</span> Helped Innovate Inc. pivot their initial concept to focus on a key user pain point, leading to a 200% increase in early adopter sign-ups.
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <img
                className="w-full h-auto object-cover rounded-xl aspect-video shadow-lg"
                alt="Team brainstorming around a whiteboard with sticky notes."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrjkvjHLEjTLpoHgpQETZnxNLy1Qp-4MzYgUVVeYqS7H9pqCrYXzrGDNAk-lAp71GadG0od2HUaMqgToOS1t944uMZv9xLo6uJESUBpZJ7Kr3rlLzuXMtlQj8tjPBC0xInYO2shzO0RDTX4vqYRLwL8CRRa_dYuj6OeKngk5cYTcZ1xmUGmZt40fnMjp3UWBA0BkeLvL2hIt_KTqDqDshKA4zMk3hllNynTbC7Pvi-PTZiFoxiP166746AD3uISaIHAM0HQAJ0apjq"
              />
            </div>
          </div>
        </section>

        <section className="px-4" id="ui-ux-design">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="w-full lg:order-last">
              <img
                className="w-full h-auto object-cover rounded-xl aspect-video shadow-lg"
                alt="UI/UX design mockups on a computer screen and mobile device."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGSNOCg-kl7hi_low-_m6gvNZ5R7pdu_ApuH2qLmCl7WuvWSOwR3Si-tPNTBrGkF6w8YkvvgfSidYqY5d0kl7zgKQDRcUMhl4SZnF8z1WCc5_cPVWd80fZa-ilhx26WH8VhC8l6D-JoPwWgcNQMvlwWxiloresIYDuE6RRSByvKHH9AyX8T8-9j4G_eRdj4Mr_JX-5mtg1DkQCHnT0SlycXM6lYodAgI85eXMFWfKDNtVhFUENeDvegDEXixi6Ce5GdYseCCvNZRlx"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-primary">
                <Palette className="size-10" strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] text-secondary dark:text-white">
                  UI/UX Design
                </h2>
              </div>
              <p className="text-muted-light dark:text-muted-dark">
                We craft interfaces that are not only beautiful but also intuitive and user-friendly. Our design process is centered around the user, ensuring your product is a joy to interact with. From wireframes to high-fidelity prototypes, we create experiences that drive engagement and retention.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Benefits:</span> Improve user satisfaction, increase conversion rates, and build a strong brand identity from day one.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Expertise:</span> Our designers are skilled in user research, interaction design, and visual design for both web and mobile platforms.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4" id="full-stack-development">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-primary">
                <Layers className="size-10" strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] text-secondary dark:text-white">
                  Full-Stack Development
                </h2>
              </div>
              <p className="text-muted-light dark:text-muted-dark">
                Our developers are masters of modern technology stacks, capable of building robust, scalable, and secure applications. We handle everything from the front-end to the back-end, database, and infrastructure, ensuring a seamless and efficient development process that brings your designs to life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Benefits:</span> Get a high-quality product built fast, with clean code and a scalable architecture for future growth.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Case Study:</span> Built and deployed the entire platform for TechForward in under 12 weeks, handling over 10,000 active users at launch without a hitch.
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <img
                className="w-full h-auto object-cover rounded-xl aspect-video shadow-lg"
                alt="Lines of code on a dark-themed computer screen."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE4rrI976YuxQTOymfGUw_W629yMZPwLS7TfGBNoj_2C7WttZdnqCNtJjlLuLwp2mzqGx_hItG8AJYVNgT1qIjJaGZ2b5TQ6uvH1dVrMw7NSPdtG9aZNnUmztQWIjYEQFuC8Gj6h8sJXJOfrcZkghm1ugXd5uO31FTbAH5ty4iFXYhlK7mSE8slSNRvgPrXEKJwbd2gxJz-QwJqWaSgDbLlbbPmdaWYAYgCYwzbflOzThAwVwB1KKbT5hqwusbTIijBSa74UdC-2zB"
              />
            </div>
          </div>
        </section>

        <section className="px-4" id="go-to-market-support">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="w-full lg:order-last">
              <img
                className="w-full h-auto object-cover rounded-xl aspect-video shadow-lg"
                alt="A rocket launching, symbolizing a product launch."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbZOeMk_xZq2EfHLT7swEjB1X6-X-JBziGYXoUZBFXAt0jzuL49oEiq28dZJM0ixpvokdDAPb73vTT-P7xfDxiGKDEu95088HLVQDO-Jlsyg2NqQr0bxJ-XbAHonDdbaRoFh6mCShHwDOKsM6EuJL417N1FsqFt0vMYIFI1LZ6NXGYMJBlfw0e2taoiRcterg_FBpEAvLIDOuQjnniz4zDJh_WWHq0AlMy1zC2jdSpDBbKlrXO51lylZrvOSxE0UJ0_qgZrYgo1yCy"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-primary">
                <Megaphone className="size-10" strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] text-secondary dark:text-white">
                  Go-to-Market Support
                </h2>
              </div>
              <p className="text-muted-light dark:text-muted-dark">
                Building a great product is only half the battle. We provide strategic support to ensure a successful launch. This includes positioning, messaging, identifying initial marketing channels, and setting up analytics to track key metrics and gather user feedback for iteration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Benefits:</span> Maximize your launch impact, attract your first users, and establish a data-driven approach to growth.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Expertise:</span> Our team has experience launching products across various industries, from B2B SaaS to consumer mobile apps.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <CTA />
    </div>
  );
};

export default ServicesPage;