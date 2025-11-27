import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
  const filters = ["All", "Web App", "Mobile App", "AI/ML", "FinTech", "SaaS"];

  const projects = [
    {
      title: "FinTech Analytics Dashboard",
      desc: "A comprehensive dashboard for financial data visualization and analysis.",
      tags: "React, Node.js, Figma",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlGpT-BXPO9CDmqMxqOArMcmbgClStDqv4a73BnGz3PoUTmp6vQRGzzgJhLQqNkUhRdqYrW-regKC4PtEAMHwUQoqGJgMQECJIyXl5bJpiLSoJRkV5jzYdshQoXyLdZBber-jueDTFuWz-nUv4zy9a9U7umJy_eqB0sBT0Vy3t5wtU8XYWY_6Q1xaKF4Z6_gCAY1iXuy-qDrYgA0ChEpHPRau-RwXGgXghs6XPqEXH91W9gG9IfgGIEig-S6l7OFeMrcLEJactdqeR"
    },
    {
      title: "AI-Powered Logistics Platform",
      desc: "Optimizing supply chain routes with machine learning.",
      tags: "Python, AWS, Docker",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBewUO3muIi5sG8nxU9W6bE8qp_Zeo37K9W5nTHqwp5Smj4TfC7wy16mAGnw32cPasMKgHEY-eUIUSHfcfPpQ0_Qv8t1MDF-Dq7WvdaUTHbDEpP7Y7zvOHXVroE9KyRp1DIBemv4U9mObbdgFL8ff7s3mG2XSnDb2uOLd5HygHpzoiYXDLSVUtEyF5siT7CmNXOh5q6ecoOiBKLgkfFIUcOMzTlYSbRae4bojEpeR7FuNDe5yaBd7Ij8ojIeBceAD5rwXtmclrNaQST"
    },
    {
      title: "On-Demand Mobile Wellness App",
      desc: "Connecting users with certified wellness professionals instantly.",
      tags: "React Native, Firebase",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2PbUqU660wIQRVUVwrw4lVNaiMOl2Ji3Zx2E9jT3wqKNDeR5fbBGVeP8aPex1wSwxxSLGsC-RvmEnzIhvjNxdYPZ6NefA03VwQtRFtjg1Gqms9UzDqEptkRnKsrBrPu8SVUAFgF1eGk0ADe2TlmsXR4WihjrQ6fnFNhjvfPRAsxPjJjUG7voCpQWUjuOM7Dje1TNqQrcKrK1PyvJg_KPrwAoSFhZZe_HDwp6JYVNNPugg5-mzowXSYf_3NiMl0GUYHnX7CdpAMGRk"
    },
    {
      title: "B2B SaaS Management Tool",
      desc: "Streamlining subscription and user management for businesses.",
      tags: "Vue.js, Django",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCopBA0VxJW-OoF3euGAI3MC855mC1Pr8DvMq3PoRhywuEQqktNiViNBwoW89iv6eYZOnzyC28NQaeycq31kR0rYt5Pf9td8bnOtyjMA3X6gkmWomkFIg1OtFWU-PB8YvHW9xiZmhMoN1ydQ2Ep-atnm_i_QjCG4G3Ox4FoMLLOCDsY1xaqpNCHj6EMW4eNs7DmuwXdKWXf71GBSMfRDMABBsnKT6yjEl2b79Lj1hgtvy9r9hK3GPnZe-2Lb0gF8gNttlh9VfaKjFqF"
    },
    {
      title: "E-commerce Recommendation Engine",
      desc: "Personalized product suggestions to increase user conversion.",
      tags: "Python, TensorFlow",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-n2vCkytz0RclP6sWH8FhROuL2H3DgjJEYtCTPxgU5CBAbTucG3WAxuyAc_bGQOGASi_We5OozigPscTeW7lmDk4UlEMnkNTW-dbwKFwMjLX-YpsyszsnbC31vBMNtIBo1Dlm0XYnxYNBCPqMI7BpRwks90QwbzPiMi79q5AJWTx-i2aiRIVx4sVI4AOwt5Qdl1wLweI1HIt-0EuF57ioopOt5EGSQtZYGzcppJqyNEj_T9MskkA1e0jsTN76S1LlpxdLjosJUeja"
    },
    {
      title: "Smart Home IoT Controller",
      desc: "A mobile application to control and monitor smart home devices.",
      tags: "Swift, Kotlin, AWS IoT",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyRU_bW-_tBJK4KM4BUXjaYfkBZ7boxlGzN21v30lIepO8u9qp-VDqU8iqtRXfW8-zbH3xdrV5rvKCVy_d2dDqbBcBnnqIDRmoTEAqSgrAqevcCC3jS_detMfW4vjJp71talZK4lhmZfz-9OFlWXKLy3RbrtHU8Fol4DWtbQbHNaI5bTk3wdzUsZ8W2dhlwaZ83SIa0SOX2sCmyUGgT-RVC2q0iTT1jpRiH7ergL2IpdC1qvWzO5x1xRf9r9x0I9221-NkAnldc4JJ"
    }
  ];

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
          <div 
            key={index} 
            className={`flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${index === 0 ? 'bg-primary/20 dark:bg-primary/30 text-primary dark:text-white' : 'bg-card-light dark:bg-card-dark hover:bg-muted-light/20 dark:hover:bg-muted-dark/20 text-foreground-light dark:text-muted-dark'}`}
          >
            <p className="text-sm font-medium leading-normal">{filter}</p>
          </div>
        ))}
      </div>

      {/* Image Grid (Portfolio) */}
      <div className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-secondary dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mt-4">
              <span className="truncate">Start Your Project</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;