import React from 'react';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { PageType } from '../App';

interface ProjectDetailsPageProps {
  onNavigate: (page: PageType) => void;
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      <section className="py-16 sm:py-24 px-4">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <button 
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center gap-2 text-primary font-bold mb-4 group hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Case Studies</span>
            </button>
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl text-secondary dark:text-white">
              Innovate Inc: AI-Powered Analytics
            </h1>
            <p className="text-base font-normal leading-normal sm:text-lg text-muted-light dark:text-muted-dark mt-4 max-w-3xl mx-auto">
              Revolutionizing data analysis for small businesses with an intuitive, AI-driven dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center border-y border-card-light dark:border-card-dark py-8">
            <div>
              <p className="text-sm text-muted-light dark:text-muted-dark font-medium">Client</p>
              <p className="font-bold text-lg mt-1 text-secondary dark:text-white">Innovate Inc.</p>
            </div>
            <div>
              <p className="text-sm text-muted-light dark:text-muted-dark font-medium">Timeline</p>
              <p className="font-bold text-lg mt-1 text-secondary dark:text-white">8 Weeks</p>
            </div>
            <div>
              <p className="text-sm text-muted-light dark:text-muted-dark font-medium">Services</p>
              <p className="font-bold text-lg mt-1 text-secondary dark:text-white">MVP Development, UI/UX Design</p>
            </div>
            <div>
              <p className="text-sm text-muted-light dark:text-muted-dark font-medium">Industry</p>
              <p className="font-bold text-lg mt-1 text-secondary dark:text-white">SaaS, Analytics</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 px-4">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img 
            className="w-full h-auto object-cover" 
            alt="Screenshot of Innovate Inc. application dashboard" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrjkvjHLEjTLpoHgpQETZnxNLy1Qp-4MzYgUVVeYqS7H9pqCrYXzrGDNAk-lAp71GadG0od2HUaMqgToOS1t944uMZv9xLo6uJESUBpZJ7Kr3rlLzuXMtlQj8tjPBC0xInYO2shzO0RDTX4vqYRLwL8CRRa_dYuj6OeKngk5cYTcZ1xmUGmZt40fnMjp3UWBA0BkeLvL2hIt_KTqDqDshKA4zMk3hllNynTbC7Pvi-PTZiFoxiP166746AD3uISaIHAM0HQAJ0apjq"
          />
        </div>
      </section>

      <section className="pb-16 sm:pb-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-secondary dark:text-white">Project Details</h3>
              <div>
                <h4 className="font-bold mb-1 text-secondary dark:text-white">The Challenge</h4>
                <p className="text-muted-light dark:text-muted-dark">
                  The founder of Innovate Inc. had a brilliant idea for an AI-powered analytics platform but faced a classic startup dilemma: a tight budget and an even tighter deadline. They needed to quickly validate their complex AI concept with a working product on a tight schedule and budget.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-secondary dark:text-white">Our Solution</h4>
                <p className="text-muted-light dark:text-muted-dark">
                  We partnered with Innovate Inc. to rapidly ideate, design, and develop a streamlined MVP. Our strategy was to focus intensely on the core value proposition: the AI-powered reporting feature. By prioritizing this, we delivered a powerful, focused product in just 8 weeks, enabling them to enter the market swiftly.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-secondary dark:text-white">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-card-light dark:bg-card-dark text-muted-light dark:text-muted-dark text-sm font-medium px-3 py-1 rounded-full">React</span>
                  <span className="bg-card-light dark:bg-card-dark text-muted-light dark:text-muted-dark text-sm font-medium px-3 py-1 rounded-full">Python</span>
                  <span className="bg-card-light dark:bg-card-dark text-muted-light dark:text-muted-dark text-sm font-medium px-3 py-1 rounded-full">Node.js</span>
                  <span className="bg-card-light dark:bg-card-dark text-muted-light dark:text-muted-dark text-sm font-medium px-3 py-1 rounded-full">AWS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-12">
              <div className="bg-card-light dark:bg-card-dark p-8 sm:p-12 rounded-xl">
                <TrendingUp className="text-5xl text-primary size-12" />
                <h3 className="text-3xl font-bold mt-4 mb-4 text-secondary dark:text-white">Measurable Results</h3>
                <p className="text-muted-light dark:text-muted-dark mb-8">
                  The MVP we delivered wasn't just a prototype; it was a powerful business tool that produced immediate, tangible results for Innovate Inc.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-bold text-primary">$1.5M</span>
                    <h4 className="font-bold text-foreground-light dark:text-foreground-dark">Seed Funding Secured</h4>
                    <p className="text-muted-light dark:text-muted-dark text-sm">
                      The high-quality MVP was instrumental in securing investor confidence, leading to a successful seed round within three months of launch.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-bold text-primary">500+</span>
                    <h4 className="font-bold text-foreground-light dark:text-foreground-dark">Beta Users Acquired</h4>
                    <p className="text-muted-light dark:text-muted-dark text-sm">
                      The intuitive design and core functionality attracted a strong base of early adopters, providing crucial feedback for future iterations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-secondary dark:text-white">Project Showcase</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="overflow-hidden rounded-lg">
                    <img className="w-full h-auto object-cover aspect-[4/3]" alt="Project mockup screenshot 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGSNOCg-kl7hi_low-_m6gvNZ5R7pdu_ApuH2qLmCl7WuvWSOwR3Si-tPNTBrGkF6w8YkvvgfSidYqY5d0kl7zgKQDRcUMhl4SZnF8z1WCc5_cPVWd80fZa-ilhx26WH8VhC8l6D-JoPwWgcNQMvlwWxiloresIYDuE6RRSByvKHH9AyX8T8-9j4G_eRdj4Mr_JX-5mtg1DkQCHnT0SlycXM6lYodAgI85eXMFWfKDNtVhFUENeDvegDEXixi6Ce5GdYseCCvNZRlx"/>
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img className="w-full h-auto object-cover aspect-[4/3]" alt="Project mockup screenshot 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8gHP-X6Fnf7QCv63vj_wYld1axwrmbNASauIyCmLS2hjE-DNE9RFYdWROexF0un-XjysrTkCmG-OQlg7iT2-snq5H2vrsP9tVQDy0VFCPbSwL0KhsLzl-JjjLymMtqydnFur0ZVZPPhb4KBcQskValW4Ax5tgitLv5xLvg7zJJwPugRZVp5_GuaZ5I3AWY3HhvyYf_UzU6lrDUOyuL_TIsW75N_zmdY5zrJi0MX4ALNju-HhTCwVijg5XPL024Qe70IiyJMvDOfRB"/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 rounded-xl bg-card-light dark:bg-card-dark p-8">
                <p className="text-foreground-light dark:text-foreground-dark italic text-lg leading-relaxed">
                  "Working with Product Lab was a game-changer. They took our rough concept and turned it into a polished, market-ready MVP in just 8 weeks. Unbelievable speed and quality."
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-muted-light/20 dark:border-muted-dark/20">
                  <img 
                    className="size-12 rounded-full object-cover" 
                    alt="Portrait of Jane Doe" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGSNOCg-kl7hi_low-_m6gvNZ5R7pdu_ApuH2qLmCl7WuvWSOwR3Si-tPNTBrGkF6w8YkvvgfSidYqY5d0kl7zgKQDRcUMhl4SZnF8z1WCc5_cPVWd80fZa-ilhx26WH8VhC8l6D-JoPwWgcNQMvlwWxiloresIYDuE6RRSByvKHH9AyX8T8-9j4G_eRdj4Mr_JX-5mtg1DkQCHnT0SlycXM6lYodAgI85eXMFWfKDNtVhFUENeDvegDEXixi6Ce5GdYseCCvNZRlx"
                  />
                  <div>
                    <h4 className="font-bold text-secondary dark:text-white">Jane Doe</h4>
                    <p className="text-sm text-muted-light dark:text-muted-dark">Founder, Innovate Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-card-light dark:bg-card-dark">
        <div className="px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4 text-secondary dark:text-white">
              Explore Our Other Work
            </h2>
            <p className="text-muted-light dark:text-muted-dark mb-10">
              See how we've helped other visionary founders turn their ideas into successful products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group flex flex-col gap-4 bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <img 
                  className="w-full h-auto object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-300" 
                  alt="Screenshot of TechForward mobile application" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGSNOCg-kl7hi_low-_m6gvNZ5R7pdu_ApuH2qLmCl7WuvWSOwR3Si-tPNTBrGkF6w8YkvvgfSidYqY5d0kl7zgKQDRcUMhl4SZnF8z1WCc5_cPVWd80fZa-ilhx26WH8VhC8l6D-JoPwWgcNQMvlwWxiloresIYDuE6RRSByvKHH9AyX8T8-9j4G_eRdj4Mr_JX-5mtg1DkQCHnT0SlycXM6lYodAgI85eXMFWfKDNtVhFUENeDvegDEXixi6Ce5GdYseCCvNZRlx"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-primary">TechForward</span>
                <h3 className="text-xl font-bold mt-1 text-secondary dark:text-white">Mobile-First Productivity App</h3>
              </div>
            </div>
            <div className="group flex flex-col gap-4 bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <img 
                  className="w-full h-auto object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-300" 
                  alt="Screenshot of Solutionize platform" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8gHP-X6Fnf7QCv63vj_wYld1axwrmbNASauIyCmLS2hjE-DNE9RFYdWROexF0un-XjysrTkCmG-OQlg7iT2-snq5H2vrsP9tVQDy0VFCPbSwL0KhsLzl-JjjLymMtqydnFur0ZVZPPhb4KBcQskValW4Ax5tgitLv5xLvg7zJJwPugRZVp5_GuaZ5I3AWY3HhvyYf_UzU6lrDUOyuL_TIsW75N_zmdY5zrJi0MX4ALNju-HhTCwVijg5XPL024Qe70IiyJMvDOfRB"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-primary">Solutionize</span>
                <h3 className="text-xl font-bold mt-1 text-secondary dark:text-white">Sustainable Logistics Platform</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 sm:pt-24 pb-16 px-4" id="contact">
        <div className="bg-secondary dark:bg-card-dark rounded-xl px-6 py-12 sm:p-16 text-center shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4 text-white">
            Ready to Build Your Big Idea?
          </h2>
          <p className="text-muted-dark mb-8 max-w-2xl mx-auto">
            Let's talk about how we can turn your vision into a reality. Schedule a free, no-obligation strategy call with our experts today.
          </p>
          <button className="flex min-w-[84px] mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-secondary dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Schedule a Free Strategy Call</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsPage;