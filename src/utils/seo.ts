import type { AppPage } from './routes';

const SITE_ORIGIN = 'https://www.averonfs.com';
const DEFAULT_IMAGE = `${SITE_ORIGIN}/PNG/AFS%20-%20Horizontal.png`;

interface SeoData {
  title: string;
  description: string;
  path: string;
  robots?: string;
}

const SERVICE_SEO: Record<string, Omit<SeoData, 'path'>> = {
  'ocean-freight': {
    title: 'Ocean Freight — FCL & LCL | Averon Freight Solutions',
    description: 'Reliable FCL and LCL ocean freight coordination across global trade routes with cargo handling, documentation support and shipment visibility.',
  },
  'air-freight': {
    title: 'Air Freight | Averon Freight Solutions',
    description: 'Fast, secure and dependable air freight coordination for time-sensitive and standard international shipments.',
  },
  'customs-clearance': {
    title: 'Customs Clearance | Averon Freight Solutions',
    description: 'Import and export customs clearance support with documentation review, compliance coordination, tariff guidance and customs-authority coordination.',
  },
  'road-inland-transport': {
    title: 'Road & Inland Transport | Averon Freight Solutions',
    description: 'Road transportation coordination connecting ports, airports, warehouses and final destinations.',
  },
  'warehousing-distribution': {
    title: 'Warehousing & Distribution | Averon Freight Solutions',
    description: 'Flexible warehousing, consolidation and onward distribution support between shipping legs.',
  },
  'supply-chain-management': {
    title: 'Supply Chain Management | Averon Freight Solutions',
    description: 'Coordinated planning across shipments, transport modes and vendors through one forwarding partner.',
  },
};

export const getSeoData = (page: AppPage | string, serviceId?: string): SeoData => {
  if (page === 'service-detail' && serviceId && SERVICE_SEO[serviceId]) {
    return {
      ...SERVICE_SEO[serviceId],
      path: `/services/${serviceId}`,
    };
  }

  const map: Partial<Record<AppPage, SeoData>> = {
    home: {
      title: 'Averon Freight Solutions LLP | Your Gateway to Global Trade',
      description: 'International freight forwarding, customs solutions and global logistics coordination from Averon Freight Solutions LLP in Mumbai.',
      path: '/',
    },
    about: {
      title: 'About Averon Freight Solutions LLP',
      description: 'Learn about Averon Freight Solutions LLP, a Mumbai-based freight forwarding and international logistics company led by experienced logistics professionals.',
      path: '/about',
    },
    services: {
      title: 'Freight & Logistics Services | Averon Freight Solutions',
      description: 'Explore ocean freight, air freight, customs clearance, road transport, warehousing, LCL consolidation and supply chain support.',
      path: '/services',
    },
    'lcl-consolidation': {
      title: 'LCL Consolidation | Averon Freight Solutions',
      description: 'LCL consolidation coordination from origin pickup through consolidation, main port, destination and final delivery.',
      path: '/lcl-consolidation',
    },
    'global-reach': {
      title: 'Global Reach | Averon Freight Solutions',
      description: 'Partner-network logistics coverage across major international trade lanes, coordinated through Averon Freight Solutions in India.',
      path: '/global-reach',
    },
    contact: {
      title: 'Contact & Request a Quote | Averon Freight Solutions',
      description: 'Contact Averon Freight Solutions for freight quotations, shipment enquiries and logistics coordination.',
      path: '/contact',
    },
    'track-shipment': {
      title: 'Shipment Status Enquiry | Averon Freight Solutions',
      description: 'Submit or reference your shipment number for manual status assistance from the Averon Freight Solutions team. Live tracking is not connected.',
      path: '/shipment-status',
    },
    'privacy-policy': {
      title: 'Privacy Policy | Averon Freight Solutions',
      description: 'Privacy policy page for Averon Freight Solutions LLP. Client-approved legal text is pending publication.',
      path: '/privacy-policy',
      robots: 'noindex, nofollow',
    },
    'terms-conditions': {
      title: 'Terms & Conditions | Averon Freight Solutions',
      description: 'Terms and conditions page for Averon Freight Solutions LLP. Client-approved legal text is pending publication.',
      path: '/terms-and-conditions',
      robots: 'noindex, nofollow',
    },
    'project-cargo-pending': {
      title: 'Project Cargo Service Confirmation Pending | Averon Freight Solutions',
      description: 'Project Cargo & Breakbulk is under client confirmation and is not currently presented as a published active service.',
      path: '/services/project-cargo-breakbulk',
      robots: 'noindex, nofollow',
    },
    'not-found': {
      title: 'Page Not Found | Averon Freight Solutions',
      description: 'The requested page could not be found.',
      path: '/404',
      robots: 'noindex, nofollow',
    },
  };

  return map[page as AppPage] ?? map.home!;
};

const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

export const applySeo = (page: AppPage | string, serviceId?: string) => {
  const data = getSeoData(page, serviceId);
  const canonicalUrl = `${SITE_ORIGIN}${data.path}`;

  document.title = data.title;

  setMeta('meta[name="description"]', 'name', 'description', data.description);
  setMeta('meta[name="robots"]', 'name', 'robots', data.robots ?? 'index, follow');
  setMeta('meta[property="og:title"]', 'property', 'og:title', data.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', data.description);
  setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
  setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  setMeta('meta[property="og:image"]', 'property', 'og:image', DEFAULT_IMAGE);
  setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', data.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', data.description);
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', DEFAULT_IMAGE);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
};
