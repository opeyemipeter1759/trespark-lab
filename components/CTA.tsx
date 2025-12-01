import React, { useState, useEffect, useRef } from "react";

const CTA: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false); // controls mount
  const [modalActive, setModalActive] = useState(false); // controls enter/leave animation
  const [iframeLoading, setIframeLoading] = useState(true);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const [email, setEmail] = useState("");

  const calendarUrl =
  "https://calendly.com/opeyemiadebowale1759/one-on-one-with-opeyemi-peter?month=2025-11"

  useEffect(() => {
    return () => {
      if (openTimer.current) window.clearTimeout(openTimer.current);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

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
            setIframeLoading(true);
            setShowPopup(true);
            // trigger animation a tick after mount
            openTimer.current = window.setTimeout(() => setModalActive(true), 20);
          }}
        >
          <input
            className="flex-grow rounded-lg border-0 bg-background-light dark:bg-secondary text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:ring-2 focus:ring-primary h-12 px-4"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            disabled={!email.trim()}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-secondary dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="truncate">Schedule Call</span>
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
            modalActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              modalActive ? 'bg-opacity-50' : 'bg-opacity-0'
            }`}
          />

          {/* modal panel */}
          <div
            className={`relative bg-white dark:bg-card-dark rounded-lg w-11/12 max-w-3xl h-[80vh] shadow-lg transform transition-all duration-300 ${
              modalActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
            }`}
          >
            <button
              onClick={() => {
                // animate close then unmount
                setModalActive(false);
                if (closeTimer.current) window.clearTimeout(closeTimer.current);
                closeTimer.current = window.setTimeout(() => setShowPopup(false), 300);
              }}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 dark:text-gray-200 z-20"
              aria-label="Close calendar dialog"
            >
              &times;
            </button>

            {/* Loading overlay */}
            {iframeLoading && (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/60 dark:bg-black/50 backdrop-blur-sm rounded-lg">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-t-primary border-gray-200 animate-spin" />
                  <p className="text-sm text-gray-700 dark:text-gray-200">Preparing your calendar...</p>
                </div>
              </div>
            )}

            <iframe
              src={calendarUrl}
              className={`w-full h-full rounded-lg ${iframeLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
              frameBorder="0"
              allow="camera; microphone; fullscreen"
              title="Schedule Call"
              onLoad={() => setIframeLoading(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;
