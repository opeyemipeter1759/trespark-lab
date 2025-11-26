import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24" id="testimonials">
      <div className="px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12 text-secondary dark:text-white">
          What Founders Are Saying
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col justify-between gap-6 rounded-xl bg-card-light dark:bg-card-dark p-8 shadow-sm">
            <p className="text-foreground-light dark:text-foreground-dark italic">
              "Working with Product Lab was a game-changer. They took our rough concept and turned it into a polished,
              market-ready MVP in just 8 weeks. Unbelievable speed and quality."
            </p>
            <div className="flex items-center gap-4">
              <img
                className="size-12 rounded-full object-cover"
                alt="Portrait of Jane Doe"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGSNOCg-kl7hi_low-_m6gvNZ5R7pdu_ApuH2qLmCl7WuvWSOwR3Si-tPNTBrGkF6w8YkvvgfSidYqY5d0kl7zgKQDRcUMhl4SZnF8z1WCc5_cPVWd80fZa-ilhx26WH8VhC8l6D-JoPwWgcNQMvlwWxiloresIYDuE6RRSByvKHH9AyX8T8-9j4G_eRdj4Mr_JX-5mtg1DkQCHnT0SlycXM6lYodAgI85eXMFWfKDNtVhFUENeDvegDEXixi6Ce5GdYseCCvNZRlx"
              />
              <div>
                <h4 className="font-bold">Jane Doe</h4>
                <p className="text-sm text-muted-light dark:text-muted-dark">Founder, Innovate Inc.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-xl bg-card-light dark:bg-card-dark p-8 shadow-sm">
            <p className="text-foreground-light dark:text-foreground-dark italic">
              "The team's expertise in both strategy and execution is unmatched. They understood our vision perfectly
              and helped us avoid costly mistakes. Highly recommended for any founder."
            </p>
            <div className="flex items-center gap-4">
              <img
                className="size-12 rounded-full object-cover"
                alt="Portrait of John Smith"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8gHP-X6Fnf7QCv63vj_wYld1axwrmbNASauIyCmLS2hjE-DNE9RFYdWROexF0un-XjysrTkCmG-OQlg7iT2-snq5H2vrsP9tVQDy0VFCPbSwL0KhsLzl-JjjLymMtqydnFur0ZVZPPhb4KBcQskValW4Ax5tgitLv5xLvg7zJJwPugRZVp5_GuaZ5I3AWY3HhvyYf_UzU6lrDUOyuL_TIsW75N_zmdY5zrJi0MX4ALNju-HhTCwVijg5XPL024Qe70IiyJMvDOfRB"
              />
              <div>
                <h4 className="font-bold">John Smith</h4>
                <p className="text-sm text-muted-light dark:text-muted-dark">CEO, TechForward</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-xl bg-card-light dark:bg-card-dark p-8 shadow-sm">
            <p className="text-foreground-light dark:text-foreground-dark italic">
              "Their iterative process allowed us to launch, get feedback, and adapt quickly. We wouldn't be where we
              are today without their guidance and rapid development cycle."
            </p>
            <div className="flex items-center gap-4">
              <img
                className="size-12 rounded-full object-cover"
                alt="Portrait of Emily White"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdL7LuMWow_fnLBh500XfNrBH4UZ7MeKkewlD_1tBtBKluhDb4JPJ-E1ayH_AzHxa39x82_WqJqOEnEJKXao_z0hcR8EACJT6mm2z65U_1iee0Pyi-3bQq-nFiKGgcK5fOFiGbMLwVj7BBJDBWIvnFRyyMNowXKcJYkwrysVvTkwaTqRnyHJAwNYhsFh9fkw47EagOWX-_pIRnaPFyCBWiqyr52b5NmkaAOuTYhHY5LKhUHF-qLcBgoQqRSlJeY7E8T1Ldav8KmhxB"
              />
              <div>
                <h4 className="font-bold">Emily White</h4>
                <p className="text-sm text-muted-light dark:text-muted-dark">Co-Founder, Solutionize</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;