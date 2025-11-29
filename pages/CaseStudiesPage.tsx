import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import CTA from '@/components/CTA';

const CaseStudiesPage: React.FC = () => {
  return (
    <div>
      <section className="py-16 sm:py-24 text-center px-4">
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl text-secondary dark:text-white">
            Success Stories
          </h1>
          <p className="text-base font-normal leading-normal sm:text-lg text-muted-light dark:text-muted-dark">
            See how we've helped visionary founders transform their ideas into market-leading products. Our partnership approach delivers results, fast.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 px-4">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Innovate Inc. */}
          <Link to="/project-details" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center cursor-pointer">
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                alt="Screenshot of Innovate Inc. application dashboard"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrjkvjHLEjTLpoHgpQETZnxNLy1Qp-4MzYgUVVeYqS7H9pqCrYXzrGDNAk-lAp71GadG0od2HUaMqgToOS1t944uMZv9xLo6uJESUBpZJ7Kr3rlLzuXMtlQj8tjPBC0xInYO2shzO0RDTX4vqYRLwL8CRRa_dYuj6OeKngk5cYTcZ1xmUGmZt40fnMjp3UWBA0BkeLvL2hIt_KTqDqDshKA4zMk3hllNynTbC7Pvi-PTZiFoxiP166746AD3uISaIHAM0HQAJ0apjq"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-sm font-bold text-primary">Innovate Inc.</span>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mt-1 text-secondary dark:text-white">
                  AI-Powered Analytics Platform
                </h2>
                <p className="text-muted-light dark:text-muted-dark mt-2">
                  Revolutionizing data analysis for small businesses with an intuitive, AI-driven dashboard.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-bold mb-1">Challenge</h4>
                  <p className="text-muted-light dark:text-muted-dark">
                    The founder needed to validate a complex AI concept with a working product on a tight schedule and budget.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Solution</h4>
                  <p className="text-muted-light dark:text-muted-dark">
                    We built a streamlined MVP focusing on the core AI-powered reporting feature, launching in just 8 weeks.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card-light dark:bg-card-dark rounded-lg">
                <TrendingUp className="text-3xl text-primary size-8" />
                <div>
                  <h4 className="font-bold">Result</h4>
                  <p className="text-muted-light dark:text-muted-dark">
                    Secured $1.5M in seed funding within 3 months of launch and acquired 500+ beta users.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold group-hover:underline">
                <span>View Full Case Study</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1 size-5" />
              </div>
            </div>
          </Link>

          {/* TechForward */}
          <Link to="/project-details" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center cursor-pointer">
            <div className="overflow-hidden rounded-xl lg:order-2">
              <img
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                alt="Screenshot of TechForward mobile application"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGSNOCg-kl7hi_low-_m6gvNZ5R7pdu_ApuH2qLmCl7WuvWSOwR3Si-tPNTBrGkF6w8YkvvgfSidYqY5d0kl7zgKQDRcUMhl4SZnF8z1WCc5_cPVWd80fZa-ilhx26WH8VhC8l6D-JoPwWgcNQMvlwWxiloresIYDuE6RRSByvKHH9AyX8T8-9j4G_eRdj4Mr_JX-5mtg1DkQCHnT0SlycXM6lYodAgI85eXMFWfKDNtVhFUENeDvegDEXixi6Ce5GdYseCCvNZRlx"
              />
            </div>
            <div className="flex flex-col gap-6 lg:order-1">
              <div>
                <span className="text-sm font-bold text-primary">TechForward</span>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mt-1 text-secondary dark:text-white">
                  Mobile-First Productivity App
                </h2>
                <p className="text-muted-light dark:text-muted-dark mt-2">
                  A task management app designed for remote teams to enhance collaboration and efficiency.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-bold mb-1">Challenge</h4>
                  <p className="text-muted-light dark:text-muted-dark">
                    The market was crowded. TechForward needed a unique user experience to stand out and attract early adopters.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Solution</h4>
                  <p className="text-muted-light dark:text-muted-dark">
                    Focused on a gesture-based UI and seamless integrations, creating a delightful and highly differentiated product.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card-light dark:bg-card-dark rounded-lg">
                <TrendingUp className="text-3xl text-primary size-8" />
                <div>
                  <h4 className="font-bold">Result</h4>
                  <p className="text-muted-light dark:text-muted-dark">
                    Achieved a 40% week-over-week user growth post-launch and featured on major tech blogs.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold group-hover:underline">
                <span>View Full Case Study</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1 size-5" />
              </div>
            </div>
          </Link>

          {/* Solutionize */}
          <Link to="/project-details" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center cursor-pointer">
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                alt="Screenshot of Solutionize platform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8gHP-X6Fnf7QCv63vj_wYld1axwrmbNASauIyCmLS2hjE-DNE9RFYdWROexF0un-XjysrTkCmG-OQlg7iT2-snq5H2vrsP9tVQDy0VFCPbSwL0KhsLzl-JjjLymMtqydnFur0ZVZPPhb4KBcQskValW4Ax5tgitLv5xLvg7zJJwPugRZVp5_GuaZ5I3AWY3HhvyYf_UzU6lrDUOyuL_TIsW75N_zmdY5zrJi0MX4ALNju-HhTCwVijg5XPL024Qe70IiyJMvDOfRB"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-sm font-bold text-primary">Solutionize</span>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mt-1 text-secondary dark:text-white">
                  Sustainable Logistics Platform
                </h2>
                <p className="text-muted-light dark:text-muted-dark mt-2">
                  Connecting eco-conscious businesses with green shipping solutions to reduce their carbon footprint.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-bold mb-1">Challenge</h4>
                  <p className="text-muted-light dark:text-muted-dark">
                    Building a two-sided marketplace that effectively balanced the needs of businesses and logistics providers.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Solution</h4>
                  <p className="text-muted-light dark:text-muted-dark">
                    Developed an MVP with core matching algorithms and a transparent pricing model to build initial trust.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card-light dark:bg-card-dark rounded-lg">
                <TrendingUp className="text-3xl text-primary size-8" />
                <div>
                  <h4 className="font-bold">Result</h4>
                  <p className="text-muted-light dark:text-muted-dark">
                    Onboarded 25+ logistics partners and facilitated 1,000+ eco-friendly shipments in the first quarter.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold group-hover:underline">
                <span>View Full Case Study</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1 size-5" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Testimonials />
      <CTA/>
    
    </div>
  );
};

export default CaseStudiesPage;
