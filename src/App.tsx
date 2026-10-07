import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { LCLConsolidationPage } from './pages/LCLConsolidationPage';
import { GlobalReachPage } from './pages/GlobalReachPage';
import { ContactPage } from './pages/ContactPage';
import { TrackShipmentModal } from './components/TrackShipmentModal';
import { QuoteModal } from './components/QuoteModal';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ocean-freight');
  const [isTrackModalOpen, setIsTrackModalOpen] = useState<boolean>(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedServiceId]);

  const handleNavigate = (page: string, serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
      setCurrentPage('service-detail');
    } else {
      setCurrentPage(page);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onNavigate={handleNavigate}
            onOpenTrackModal={() => setIsTrackModalOpen(true)}
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
      default:
        return (
          <HomePage 
            onNavigate={handleNavigate}
            onOpenTrackModal={() => setIsTrackModalOpen(true)}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#d9a74a] selection:text-slate-950">
      {/* Navigation Header */}
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenTrackModal={() => setIsTrackModalOpen(true)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenTrackModal={() => setIsTrackModalOpen(true)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Modals */}
      <TrackShipmentModal 
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
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
