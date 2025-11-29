import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
  const filters = ["All", "Web App", "Mobile App", "AI/ML", "FinTech", "SaaS"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

    const handleContactNav = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const projects = [
    {
      title: "Payment Automation Dashboard",
      desc: "A streamlined dashboard for automating payment processes, tracking transactions, and ensuring smooth financial management.",
      tags: "Next Js,TypeScricpt, Node.js, Figma",
      categories: ["FinTech", "Web App","Mobile App"],
      image: "../components/assests/spark.png",
      link: "https://www.sparkpayhq.com/"
    },
    {
      title: "Members Learning & Training  Dashboard",
      desc: "A streamlined dashboard for delivering lessons, tracking progress, and supporting member learning and training.",
      tags: "Next Js, Typescript, PHP, Mysql , Figma",
      categories: [ "Web App"],
      image: "../components/assests/fojo.png",
      link: "https://fojoglobal.co.uk/"
    },
    {
      title: "Attendance Management System",
      desc: "A smart dashboard for tracking attendance, monitoring member activity, and providing insights for better church engagement.",
      tags: "React Native, Firebase",
      categories: ["Web App"],
      image: "../components/assests/gcc.png",
      link: "https://gcccibadan.org/"
    },
    {
      title: "Viridis Green",
      desc: "Empowering businesses to convert obstacles into competitive advantages with innovative, data-driven solutions.",
      tags: "Next js, Typescript ",
      categories: [ "Web App"],
      image: "../components/assests/vir.png",
      link: "https://www.viridisgreen.co.uk/"
    },
    {
      title: "Lush Corporate Service Limited",
      desc: "Turn compliance into confidence with Lush Corporate Services—expert training, consulting, and coaching to help your organization thrive.",
      tags: "Python, TensorFlow",
      categories: ["Web App"],
      image: "../components/assests/lush.png",
      link: "https://www.lushcorporate.co.uk/"
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl text-secondary dark:text-white">
            From Idea to MVP, Fast.
          </h1>
          <p className="text-base font-normal leading-normal md:text-lg max-w-3xl mx-auto text-muted-light dark:text-muted-dark">
            We partner with founders to design, build, and launch successful products. Explore our work below.
          </p>
        </div>
      </section>

      {/* Filter Chips */}
      <div className="flex justify-center gap-3 p-3 flex-wrap mb-10">
        {filters.map((filter, index) => (
          <button 
            key={index}
            onClick={() => setActiveFilter(filter)}
            className={`flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${activeFilter === filter ? 'bg-primary/20 dark:bg-primary/30 text-primary dark:text-white' : 'bg-card-light dark:bg-card-dark hover:bg-muted-light/20 dark:hover:bg-muted-dark/20 text-foreground-light dark:text-muted-dark'}`}
          >
            <p className="text-sm font-medium leading-normal">{filter}</p>
          </button>
        ))}
      </div>

      {/* Image Grid (Portfolio) */}
      <div className="px-4 sm:px-6 lg:px-8 mb-20">
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-muted-light dark:text-muted-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M8 3v4M16 3v4M3 7h18M8 21V9m8 12V9" />
            </svg>
            <h3 className="mt-6 text-2xl font-bold text-secondary dark:text-white">No projects found</h3>
            <p className="mt-2 text-muted-light dark:text-muted-dark max-w-xl text-center">
              We couldn't find any projects matching "{activeFilter}". Try a different filter or view all projects.
            </p>
            <div className="mt-6">
              <button
                onClick={() => setActiveFilter('All')}
                className="px-6 py-2 rounded-lg bg-primary text-secondary font-bold hover:opacity-90 transition-opacity"
              >
                Show all projects
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link to="/product" state={{ project }} key={index} className="flex flex-col gap-4 group cursor-pointer">
                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" 
                    style={{ backgroundImage: `url('${project.image}')` }}
                    aria-label={project.title}
                  ></div>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-bold leading-normal text-secondary dark:text-white">{project.title}</p>
                  <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">{project.desc}</p>
                  <p className="text-xs font-medium leading-normal text-muted-light/70 dark:text-muted-dark/70 pt-2">{project.tags}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="w-full bg-card-light dark:bg-card-dark py-16 sm:py-24" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-end gap-6 text-center">
            <h2 className="text-secondary dark:text-white text-3xl font-black leading-tight tracking-tight md:text-4xl max-w-2xl">
              Have an idea? Let's build it together.
            </h2>
            <p className="text-muted-light dark:text-muted-dark text-base font-normal leading-normal max-w-2xl">
              Turn your vision into a market-ready product with our expert team. We're ready to help you at every step of the journey.
            </p>
            <button onClick={handleContactNav} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-secondary dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mt-4">
              <span className="truncate">Start Your Project</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;