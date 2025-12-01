import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container  flex flex-col w-full max-w-[1200px] flex-1">
              <Header />
              <main className="flex-grow">
                <AppRoutes />
              </main>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
