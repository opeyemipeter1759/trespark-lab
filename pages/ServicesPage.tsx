import React from 'react';
import { ListChecks, CheckCircle, Palette, Layers, Megaphone, Smartphone, Globe, Server, BrainCircuit } from 'lucide-react';
import CTA from '../components/CTA';

// Resolve local images so Vite includes them during dev/build
const mvpImg = new URL('../components/assests/MVP.jpg', import.meta.url).href;
const uiuxImg = new URL('../components/assests/UI-UX.png', import.meta.url).href;
const mobileProcessImg = new URL('../components/assests/Mobile-App-Development-Process.png', import.meta.url).href;
const top11Img = new URL('../components/assests/top11.png', import.meta.url).href;
const devopsImg = new URL('../components/assests/devops_blog_image.jpg', import.meta.url).href;
const dataOpsImg = new URL('../components/assests/DataOps-1024x314.png', import.meta.url).href;
const marketImg = new URL('../components/assests/market.jpg', import.meta.url).href;

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
                src={mvpImg}
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
                src={uiuxImg}
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

        <section className="px-4" id="mobile-development">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-primary">
                <Smartphone className="size-10" strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] text-secondary dark:text-white">
                  Mobile Development
                </h2>
              </div>
              <p className="text-muted-light dark:text-muted-dark">
                We build native and cross-platform mobile applications for iOS and Android. Our focus is on creating smooth, engaging, and high-performing mobile experiences that delight users and achieve business goals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Benefits:</span> Reach your users on their favorite devices, improve engagement with push notifications, and leverage device-specific features.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Case Study:</span> Developed a social networking app for 'ConnectSphere' that reached 100,000 downloads within the first three months of launch.
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <img
                className="w-full h-auto object-cover rounded-xl aspect-video shadow-lg"
                alt="A user interacting with a mobile app on a smartphone."
                src={mobileProcessImg}
              />
            </div>
          </div>
        </section>

        <section className="px-4" id="web-development">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="w-full lg:order-last">
              <img
                className="w-full h-auto object-cover rounded-xl aspect-video shadow-lg"
                alt="A web developer working on a laptop with code on the screen."
                src={top11Img}
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-primary">
                <Globe className="size-10" strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] text-secondary dark:text-white">
                  Web Development
                </h2>
              </div>
              <p className="text-muted-light dark:text-muted-dark">
                From dynamic single-page applications to complex enterprise-level web platforms, we build robust, scalable, and secure solutions. We leverage modern web technologies to create fast, responsive, and SEO-friendly websites and applications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Benefits:</span> Establish a strong online presence, deliver seamless user experiences across all browsers, and build a platform for future growth.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Case Study:</span> Built a custom e-commerce platform for 'GadgetGo' that resulted in a 40% increase in online sales and a 25% improvement in page load times.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4" id="devops">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-primary">
                <Server className="size-10" strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] text-secondary dark:text-white">
                  DevOps
                </h2>
              </div>
              <p className="text-muted-light dark:text-muted-dark">
                We streamline your development and deployment processes with our DevOps expertise. We implement CI/CD pipelines, automated testing, and infrastructure as code to increase development velocity, improve reliability, and reduce operational overhead.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Benefits:</span> Faster time to market, increased deployment frequency, more stable operating environments, and improved developer productivity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Expertise:</span> Our team is proficient with leading DevOps tools and platforms like Docker, Kubernetes, Jenkins, GitHub Actions, and Terraform.
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <img
                className="w-full h-auto object-cover rounded-xl aspect-video shadow-lg"
                alt="A diagram of a CI/CD pipeline."
                src={devopsImg}
              />
            </div>
          </div>
        </section>

        <section className="px-4" id="llm-ai-ops">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="w-full lg:order-last">
              <img
                className="w-full h-auto object-contain rounded-xl aspect-video shadow-lg"
                alt="An abstract representation of an AI brain."
                src={dataOpsImg}
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-primary">
                <BrainCircuit className="size-10" strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] text-secondary dark:text-white">
                  LLMOps/AI Ops
                </h2>
              </div>
              <p className="text-muted-light dark:text-muted-dark">
                We help you build, deploy, and manage your Large Language Models (LLMs) and AI applications at scale. Our expertise in LLMOps and AI Ops ensures that your models are reliable, scalable, and continuously monitored for performance and accuracy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Benefits:</span> Accelerate your AI/ML development lifecycle, ensure model reproducibility, automate model deployment and monitoring, and reduce the operational complexity of managing AI systems.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 size-6 shrink-0" />
                  <span className="text-foreground-light dark:text-foreground-dark">
                    <span className="font-bold">Expertise:</span> We have hands-on experience with MLOps platforms, model serving frameworks, and monitoring tools for LLMs and other AI models.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4" id="go-to-market-support">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="w-full lg:order-last">
              <img
                className="w-full h-auto object-cover rounded-xl aspect-video shadow-lg"
                alt="A rocket launching, symbolizing a product launch."
                src={marketImg}
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
