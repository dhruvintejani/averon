import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { SERVICE_PATHS, type AppPage } from './routes';

const SITE_ORIGIN = 'https://www.averonfs.com';
const DEFAULT_IMAGE = `${SITE_ORIGIN}/PNG/AFS%20-%20Horizontal.png`;
const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

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
      path: SERVICE_PATHS[serviceId] ?? '/services',
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
      description: 'Read how Averon Freight Solutions LLP may collect, use, protect and handle information submitted through its website and business enquiries.',
      path: '/privacy-policy',
      robots: 'noindex, follow',
    },
    'terms-conditions': {
      title: 'Terms & Conditions | Averon Freight Solutions',
      description: 'Read the website terms governing use of the Averon Freight Solutions LLP website, enquiries, quotations and general service information.',
      path: '/terms-and-conditions',
      robots: 'noindex, follow',
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

const setMeta = (
  selector: string,
  attribute: 'name' | 'property',
  key: string,
  content: string
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setJsonLd = (data: unknown) => {
  let script = document.head.querySelector<HTMLScriptElement>('#structured-data');
  if (!script) {
    script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

const buildStructuredData = (
  page: AppPage | string,
  serviceId: string | undefined,
  data: SeoData,
  canonicalUrl: string
) => {
  const organization = {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: COMPANY_INFO.name,
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/PNG/Hexagon%20AFS%20Logo%20PNG.png`,
    description: COMPANY_INFO.aboutSummary,
    email: COMPANY_INFO.emails[0],
    telephone: COMPANY_INFO.phones[0],
    sameAs: [COMPANY_INFO.linkedin],
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Office No. 404, 4th Floor, Dev Milan Co-operative Premises Society, Above Woodland Retreat, LBS Marg, Near Tip Top Plaza',
      addressLocality: 'Thane West',
      addressRegion: 'Maharashtra',
      postalCode: '400604',
      addressCountry: 'IN',
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_ORIGIN,
    name: COMPANY_INFO.name,
    publisher: { '@id': ORGANIZATION_ID },
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: data.title,
    description: data.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
  };

  const graph: Record<string, unknown>[] = [organization, website, webPage];

  if (page === 'service-detail' && serviceId) {
    const service = SERVICES_LIST.find((item) => item.id === serviceId);
    if (service && service.id !== 'project-cargo') {
      graph.push({
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: service.title,
        serviceType: service.title,
        description: data.description,
        url: canonicalUrl,
        provider: { '@id': ORGANIZATION_ID },
      });
    }
  }

  if (page === 'lcl-consolidation') {
    graph.push({
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: 'LCL Consolidation',
      serviceType: 'LCL Consolidation',
      description: data.description,
      url: canonicalUrl,
      provider: { '@id': ORGANIZATION_ID },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};

export const applySeo = (page: AppPage | string, serviceId?: string) => {
  const data = getSeoData(page, serviceId);
  const canonicalUrl = `${SITE_ORIGIN}${data.path}`;

  document.title = data.title;

  setMeta('meta[name="description"]', 'name', 'description', data.description);
  setMeta('meta[name="robots"]', 'name', 'robots', data.robots ?? 'index, follow');
  setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', COMPANY_INFO.name);
  setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');
  setMeta('meta[property="og:title"]', 'property', 'og:title', data.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', data.description);
  setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
  setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  setMeta('meta[property="og:image"]', 'property', 'og:image', DEFAULT_IMAGE);
  setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', 'Averon Freight Solutions LLP');
  setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', data.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', data.description);
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', DEFAULT_IMAGE);
  setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', 'Averon Freight Solutions LLP');

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;

  setJsonLd(buildStructuredData(page, serviceId, data, canonicalUrl));
};
