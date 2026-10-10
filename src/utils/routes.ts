export type AppPage =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'lcl-consolidation'
  | 'global-reach'
  | 'contact'
  | 'track-shipment'
  | 'privacy-policy'
  | 'terms-conditions'
  | 'project-cargo-pending'
  | 'not-found';

export interface RouteState {
  page: AppPage;
  serviceId?: string;
}

export const SERVICE_PATHS: Record<string, string> = {
  'ocean-freight': '/services/ocean-freight',
  'air-freight': '/services/air-freight',
  'customs-clearance': '/services/customs-clearance',
  'road-inland-transport': '/services/road-inland-transport',
  'warehousing-distribution': '/services/warehousing-distribution',
  'project-cargo': '/services/project-cargo-breakbulk',
  'supply-chain-management': '/services/supply-chain-management',
};

const PATH_TO_SERVICE = Object.fromEntries(
  Object.entries(SERVICE_PATHS).map(([serviceId, path]) => [path, serviceId])
);

const PAGE_PATHS: Partial<Record<AppPage, string>> = {
  home: '/',
  about: '/about',
  services: '/services',
  'lcl-consolidation': '/lcl-consolidation',
  'global-reach': '/global-reach',
  contact: '/contact',
  'track-shipment': '/shipment-status',
  'privacy-policy': '/privacy-policy',
  'terms-conditions': '/terms-and-conditions',
  'project-cargo-pending': '/services/project-cargo-breakbulk',
};

export const normalizePathname = (pathname: string) => {
  if (!pathname || pathname === '/') return '/';
  const clean = pathname.split('?')[0].split('#')[0];
  return clean.length > 1 ? clean.replace(/\/+$/, '') : clean;
};

export const resolveRoute = (pathname: string): RouteState => {
  const path = normalizePathname(pathname);

  if (path === '/' || path === '/home') return { page: 'home' };
  if (path === '/about') return { page: 'about' };
  if (path === '/services') return { page: 'services' };
  if (path === '/lcl-consolidation') return { page: 'lcl-consolidation' };
  if (path === '/global-reach') return { page: 'global-reach' };
  if (path === '/contact') return { page: 'contact' };
  if (path === '/shipment-status' || path === '/track-shipment') {
    return { page: 'track-shipment' };
  }
  if (path === '/privacy-policy') return { page: 'privacy-policy' };
  if (path === '/terms-and-conditions') return { page: 'terms-conditions' };

  const serviceId = PATH_TO_SERVICE[path];
  if (serviceId === 'project-cargo') {
    return { page: 'project-cargo-pending', serviceId };
  }
  if (serviceId) {
    return { page: 'service-detail', serviceId };
  }

  return { page: 'not-found' };
};

export const getPathForRoute = (page: AppPage | string, serviceId?: string) => {
  if (serviceId) {
    return SERVICE_PATHS[serviceId] ?? '/services';
  }

  return PAGE_PATHS[page as AppPage] ?? '/';
};
