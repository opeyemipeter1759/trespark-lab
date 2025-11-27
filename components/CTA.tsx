import React, { useState } from "react";

const CTA: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const calendarUrl =
  "https://calendly.com/opeyemiadebowale1759/one-on-one-with-opeyemi-peter?month=2025-11"

  return (
    <section className="py-16 sm:py-24" id="contact">
      <div className="bg-secondary dark:bg-card-dark rounded-xl px-6 py-12 sm:p-16 text-center shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4 text-white">
          Ready to Build Your Big Idea?
        </h2>
        <p className="text-muted-dark mb-8 max-w-2xl mx-auto text-lg">
          Let's talk about how we can turn your vision into a reality. Schedule a free, no-obligation strategy call with
          our experts today.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            setShowPopup(true);
          }}
        >
          <input
            className="flex-grow rounded-lg border-0 bg-background-light dark:bg-secondary text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:ring-2 focus:ring-primary h-12 px-4"
            placeholder="Enter your email"
            type="email"
          />
          <button
            type="submit"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-secondary dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <span className="truncate">Schedule Call</span>
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-card-dark rounded-lg w-11/12 max-w-3xl h-[80vh] relative shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 dark:text-gray-200"
            >
              &times;
            </button>
            <iframe
              src={calendarUrl}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="camera; microphone; fullscreen"
              title="Schedule Call"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;
