import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/motion/PageTransition';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Activities } from './pages/Activities';
import { JoinUs } from './pages/JoinUs';
import { Gallery } from './pages/Gallery';
import { Support } from './pages/Support';
import { Media } from './pages/Media';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition routeKey={location.pathname}>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition routeKey={location.pathname}>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/activities"
          element={
            <PageTransition routeKey={location.pathname}>
              <Activities />
            </PageTransition>
          }
        />
        <Route
          path="/join"
          element={
            <PageTransition routeKey={location.pathname}>
              <JoinUs />
            </PageTransition>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition routeKey={location.pathname}>
              <Gallery />
            </PageTransition>
          }
        />
        <Route
          path="/support"
          element={
            <PageTransition routeKey={location.pathname}>
              <Support />
            </PageTransition>
          }
        />
        <Route
          path="/media"
          element={
            <PageTransition routeKey={location.pathname}>
              <Media />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-brand-black font-sans text-white">
        <Navbar />
        <main className="flex-grow overflow-x-clip">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
