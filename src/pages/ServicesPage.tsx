import React, { lazy, Suspense } from 'react';

const AirFreightPage = lazy(() =>
  import('./AirFreightPage').then((module) => ({ default: module.AirFreightPage }))
);
const CustomsClearancePage = lazy(() =>
  import('./CustomsClearancePage').then((module) => ({ default: module.CustomsClearancePage }))
);
const OceanFreightPage = lazy(() =>
  import('./OceanFreightPage').then((module) => ({ default: module.OceanFreightPage }))
);
const ProjectCargoBreakbulkPage = lazy(() =>
  import('./ProjectCargoBreakbulkPage').then((module) => ({ default: module.ProjectCargoBreakbulkPage }))
);
const RoadInlandTransportPage = lazy(() =>
  import('./RoadInlandTransportPage').then((module) => ({ default: module.RoadInlandTransportPage }))
);
const SupplyChainManagementPage = lazy(() =>
  import('./SupplyChainManagementPage').then((module) => ({ default: module.SupplyChainManagementPage }))
);
const WarehousingDistributionPage = lazy(() =>
  import('./WarehousingDistributionPage').then((module) => ({ default: module.WarehousingDistributionPage }))
);

interface ServicesPageProps {
  selectedServiceId?: string;
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  selectedServiceId = 'ocean-freight',
  onNavigate,
  onOpenQuoteModal,
}) => {
  const renderService = () => {
    switch (selectedServiceId) {
      case 'air-freight':
        return <AirFreightPage onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />;
      case 'customs-clearance':
        return <CustomsClearancePage onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />;
      case 'road-inland-transport':
        return <RoadInlandTransportPage onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />;
      case 'warehousing-distribution':
        return <WarehousingDistributionPage onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />;
      case 'project-cargo':
        return <ProjectCargoBreakbulkPage onNavigate={onNavigate} />;
      case 'supply-chain-management':
        return <SupplyChainManagementPage onNavigate={onNavigate} />;
      case 'ocean-freight':
      default:
        return <OceanFreightPage onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />;
    }
  };

  return (
    <Suspense
      fallback={
        <div className="min-h-[55vh] bg-white" aria-busy="true" aria-live="polite">
          <span className="sr-only">Loading service</span>
        </div>
      }
    >
      {renderService()}
    </Suspense>
  );
};
