import React from 'react';
import { AirFreightPage } from './AirFreightPage';
import { CustomsClearancePage } from './CustomsClearancePage';
import { OceanFreightPage } from './OceanFreightPage';
import { ProjectCargoBreakbulkPage } from './ProjectCargoBreakbulkPage';
import { RoadInlandTransportPage } from './RoadInlandTransportPage';
import { SupplyChainManagementPage } from './SupplyChainManagementPage';
import { WarehousingDistributionPage } from './WarehousingDistributionPage';

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
