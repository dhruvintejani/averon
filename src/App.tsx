import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { LCLConsolidationPage } from './pages/LCLConsolidationPage';
import { GlobalReachPage } from './pages/GlobalReachPage';
import { ContactPage } from './pages/ContactPage';
import { TrackShipmentPage } from './pages/TrackShipmentPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { ProjectCargoPendingPage } from './pages/ProjectCargoPendingPage';
import { NotFoundPage } from './pages/NotFoundPage';
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

  const applyRouteState = (route: RouteState) => {
    setCurrentPage(route.page);
    if (route.serviceId) setSelectedServiceId(route.serviceId);
  };

  useEffect(() => {
    if (window.location.pathname === '/home') {
      window.history.replaceState({}, '', '/');
    } else if (window.location.pathname === '/track-shipment') {
      window.history.replaceState({}, '', '/shipment-status');
    }

    const handlePopState = () => {
      applyRouteState(resolveRoute(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
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

      <main className="flex-grow">{renderCurrentPage()}</main>

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
