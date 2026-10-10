import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage }))
);
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage }))
);
const ServicesOverviewPage = lazy(() =>
  import('./pages/ServicesOverviewPage').then((module) => ({ default: module.ServicesOverviewPage }))
);
const LCLConsolidationPage = lazy(() =>
  import('./pages/LCLConsolidationPage').then((module) => ({ default: module.LCLConsolidationPage }))
);
const GlobalReachPage = lazy(() =>
  import('./pages/GlobalReachPage').then((module) => ({ default: module.GlobalReachPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage }))
);
const TrackShipmentPage = lazy(() =>
  import('./pages/TrackShipmentPage').then((module) => ({ default: module.TrackShipmentPage }))
);
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage').then((module) => ({ default: module.PrivacyPolicyPage }))
);
const TermsConditionsPage = lazy(() =>
  import('./pages/TermsConditionsPage').then((module) => ({ default: module.TermsConditionsPage }))
);
const ProjectCargoPendingPage = lazy(() =>
  import('./pages/ProjectCargoPendingPage').then((module) => ({ default: module.ProjectCargoPendingPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage }))
);
import { applySeo } from './utils/seo';
import {
  getPathForRoute,
  resolveRoute,
  type AppPage,
  type RouteState,
} from './utils/routes';

const getInitialRoute = (): RouteState => resolveRoute(window.location.pathname);

export function App() {
  const initialRoute = getInitialRoute();
  const [currentPage, setCurrentPage] = useState<AppPage>(initialRoute.page);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialRoute.serviceId ?? 'ocean-freight'
  );
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const hasMountedRef = useRef(false);

  const applyRouteState = (route: RouteState) => {
    setCurrentPage(route.page);
    if (route.serviceId) setSelectedServiceId(route.serviceId);
  };

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    if (window.location.pathname === '/home') {
      window.history.replaceState({}, '', '/');
    } else if (window.location.pathname === '/track-shipment') {
      window.history.replaceState({}, '', '/shipment-status');
    }

    const handlePopState = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      applyRouteState(resolveRoute(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    if (hasMountedRef.current) {
      mainRef.current?.focus({ preventScroll: true });
    } else {
      hasMountedRef.current = true;
    }
  }, [currentPage, selectedServiceId]);

  useEffect(() => {
    applySeo(currentPage, selectedServiceId);
  }, [currentPage, selectedServiceId]);

  const handleNavigate = (page: string, serviceId?: string) => {
    let route: RouteState;

    if (serviceId === 'project-cargo') {
      route = { page: 'project-cargo-pending', serviceId };
    } else if (serviceId) {
      route = { page: 'service-detail', serviceId };
    } else {
      route = { page: page as AppPage };
    }

    const nextPath = getPathForRoute(route.page, route.serviceId);

    // Reset scroll before the new route renders so the previous page's
    // scroll position/footer never flashes during lazy page loading.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }

    applyRouteState(route);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenTrackModal={() => handleNavigate('track-shipment')}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesOverviewPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'service-detail':
        return (
          <ServicesPage
            selectedServiceId={selectedServiceId}
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'lcl-consolidation':
        return (
          <LCLConsolidationPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'global-reach':
        return (
          <GlobalReachPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'track-shipment':
        return (
          <TrackShipmentPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case 'terms-conditions':
        return <TermsConditionsPage onNavigate={handleNavigate} />;
      case 'project-cargo-pending':
        return <ProjectCargoPendingPage onNavigate={handleNavigate} />;
      case 'not-found':
        return <NotFoundPage onNavigate={handleNavigate} />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900 selection:bg-[#c9a227] selection:text-[#071a33]">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenTrackModal={() => handleNavigate('track-shipment')}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <main id="main-content" ref={mainRef} tabIndex={-1} className="flex-grow outline-none">
        <Suspense
          fallback={
            <div
              className="min-h-[100dvh] bg-white"
              aria-busy="true"
              aria-live="polite"
            >
              <span className="sr-only">Loading page</span>
            </div>
          }
        >
          {renderCurrentPage()}
        </Suspense>
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenTrackModal={() => handleNavigate('track-shipment')}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onNavigateToFullContact={() => handleNavigate('contact')}
      />
    </div>
  );
}

export default App;
