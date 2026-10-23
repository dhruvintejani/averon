import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin, type ResolvedConfig } from "vite";
import {
  buildStructuredData,
  DEFAULT_IMAGE,
  getSeoData,
  SITE_ORIGIN,
} from "./src/utils/seo";
import type { AppPage } from "./src/utils/routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface StaticSeoRoute {
  page: AppPage;
  serviceId?: string;
  fileName?: string;
}

const STATIC_SEO_ROUTES: StaticSeoRoute[] = [
  { page: "home" },
  { page: "about", fileName: "seo/about.html" },
  { page: "services", fileName: "seo/services.html" },
  {
    page: "service-detail",
    serviceId: "ocean-freight",
    fileName: "seo/services-ocean-freight.html",
  },
  {
    page: "service-detail",
    serviceId: "air-freight",
    fileName: "seo/services-air-freight.html",
  },
  {
    page: "service-detail",
    serviceId: "customs-clearance",
    fileName: "seo/services-customs-clearance.html",
  },
  {
    page: "service-detail",
    serviceId: "road-inland-transport",
    fileName: "seo/services-road-inland-transport.html",
  },
  {
    page: "service-detail",
    serviceId: "warehousing-distribution",
    fileName: "seo/services-warehousing-distribution.html",
  },
  {
    page: "service-detail",
    serviceId: "supply-chain-management",
    fileName: "seo/services-supply-chain-management.html",
  },
  { page: "lcl-consolidation", fileName: "seo/lcl-consolidation.html" },
  { page: "global-reach", fileName: "seo/global-reach.html" },
  { page: "contact", fileName: "seo/contact.html" },
  { page: "track-shipment", fileName: "seo/shipment-status.html" },
  { page: "privacy-policy", fileName: "seo/privacy-policy.html" },
  { page: "terms-conditions", fileName: "seo/terms-and-conditions.html" },
  {
    page: "project-cargo-pending",
    fileName: "seo/project-cargo-breakbulk.html",
  },
];

const STATIC_SERVICE_H1: Record<string, string> = {
  "ocean-freight": "Ocean Freight — FCL & LCL",
  "air-freight": "Fast, Reliable Air Freight Solutions",
  "customs-clearance": "Smooth Customs. Efficient Cargo Movement.",
  "road-inland-transport": "Reliable Road & Inland Transport Solutions",
  "warehousing-distribution": "Warehousing & Distribution Support",
  "supply-chain-management": "Supply Chain Management",
  "project-cargo": "Project Cargo & Breakbulk",
};

const STATIC_PAGE_H1: Partial<Record<AppPage, string>> = {
  home: "Connecting Your Cargo to Global Markets",
  about: "About Averon Freight Solutions",
  services: "Freight & Logistics Solutions",
  "lcl-consolidation": "LCL Consolidation",
  "global-reach": "Connecting Businesses Across International Trade Routes",
  contact: "Tell Us About Your Shipment",
  "track-shipment": "Track Your Shipment",
  "privacy-policy": "Privacy Policy",
  "terms-conditions": "Terms & Conditions",
  "project-cargo-pending": "Project Cargo & Breakbulk",
  "not-found": "Page Not Found",
};

const getStaticH1 = (
  page: AppPage,
  serviceId?: string
): string | undefined =>
  page === "service-detail"
    ? STATIC_SERVICE_H1[serviceId ?? ""]
    : STATIC_PAGE_H1[page];

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const replaceMeta = (
  html: string,
  attribute: "name" | "property",
  key: string,
  content: string
) => {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${escapedKey}"[^>]*>`,
    "i"
  );

  return html.replace(
    pattern,
    `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`
  );
};

const renderStaticSeoHtml = (
  baseHtml: string,
  page: AppPage,
  serviceId?: string
) => {
  const data = getSeoData(page, serviceId);
  const canonicalUrl = `${SITE_ORIGIN}${data.path}`;
  const structuredData = buildStructuredData(
    page,
    serviceId,
    data,
    canonicalUrl
  );

  let html = baseHtml.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(data.title)}</title>`
  );

  html = replaceMeta(html, "name", "description", data.description);
  html = replaceMeta(html, "name", "robots", data.robots ?? "index, follow");
  html = replaceMeta(html, "property", "og:site_name", "Averon Freight Solutions LLP");
  html = replaceMeta(html, "property", "og:locale", "en_IN");
  html = replaceMeta(html, "property", "og:title", data.title);
  html = replaceMeta(html, "property", "og:description", data.description);
  html = replaceMeta(html, "property", "og:type", "website");
  html = replaceMeta(html, "property", "og:url", canonicalUrl);
  html = replaceMeta(html, "property", "og:image", DEFAULT_IMAGE);
  html = replaceMeta(
    html,
    "property",
    "og:image:alt",
    "Averon Freight Solutions LLP"
  );
  html = replaceMeta(html, "name", "twitter:card", "summary_large_image");
  html = replaceMeta(html, "name", "twitter:title", data.title);
  html = replaceMeta(html, "name", "twitter:description", data.description);
  html = replaceMeta(html, "name", "twitter:image", DEFAULT_IMAGE);
  html = replaceMeta(
    html,
    "name",
    "twitter:image:alt",
    "Averon Freight Solutions LLP"
  );

  html = html.replace(
    /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  if (page !== "home") {
    html = html.replace(
      /\s*<link\s+id="home-lcp-preload"[^>]*>/i,
      ""
    );
  }

  html = html.replace(
    /<script\s+id="structured-data"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="structured-data" type="application/ld+json">${JSON.stringify(
      structuredData
    ).replace(/</g, "\\u003c")}</script>`
  );

  // Keep the branded loading shell in the initial HTML. The homepage H1 is visible
  // in that shell for crawlers; other routes retain their existing hidden fallback.
  // React replaces this shell when the app mounts.
  const h1 = getStaticH1(page, serviceId);
  if (!h1) {
    throw new Error(
      "Missing static H1 mapping for route: " +
        page +
        (serviceId ? " (" + serviceId + ")" : "")
    );
  }

  const rootPattern = /<div\s+id="root">\s*<\/div>/i;
  if (!rootPattern.test(html)) {
    throw new Error("Could not find the empty React root while generating static SEO HTML.");
  }

  const homepageFallbackH1 =
    page === "home"
      ? '<h1 id="seo-fallback-h1" style="display:block; visibility:visible; opacity:1; max-width:52rem; margin:1.5rem 0 0; color:#fff; font-size:clamp(1.875rem,4.5vw,3.5rem); font-weight:800; line-height:1.1; letter-spacing:-0.025em;">' +
        escapeHtml(h1) +
        '</h1>'
      : '';

  const loadingShell =
    '<div id="seo-fallback-loader" class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071a33] px-4 text-white" role="status" aria-live="polite" aria-label="Loading Averon Freight Solutions">' +
    '<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,162,39,.13),transparent_28%),linear-gradient(180deg,#071a33_0%,#061426_100%)]"></div>' +
    '<div class="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:38px_38px]"></div>' +
    '<div class="relative z-10 flex flex-col items-center text-center">' +
    '<div class="relative grid h-24 w-24 place-items-center sm:h-28 sm:w-28">' +
    '<div class="absolute inset-0 rounded-full border border-white/10"></div>' +
    '<div class="absolute inset-0 rounded-full border-2 border-transparent border-t-[#d4af37] border-r-[#d4af37]/40 animate-spin motion-reduce:animate-none"></div>' +
    '<div class="absolute inset-[8px] rounded-full border border-[#c9a227]/25"></div>' +
    '<img src="/SVG%20Final/Hexagon%20AFS%20Logo%20White%20SVG.svg" alt="Averon Freight Solutions LLP" class="h-14 w-14 object-contain sm:h-16 sm:w-16" />' +
    '</div>' +
    '<div class="mt-6 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#d4af37]">Averon Freight Solutions</div>' +
    homepageFallbackH1 +
    '<p class="mt-2 text-xs font-medium tracking-[0.08em] text-slate-300">Preparing your logistics experience</p>' +
    '<div class="mt-6 flex items-center gap-1.5" aria-hidden="true">' +
    '<span class="h-1.5 w-1.5 rounded-full bg-[#d4af37] animate-pulse motion-reduce:animate-none"></span>' +
    '<span class="h-1.5 w-1.5 rounded-full bg-[#d4af37]/65 animate-pulse [animation-delay:160ms] motion-reduce:animate-none"></span>' +
    '<span class="h-1.5 w-1.5 rounded-full bg-[#d4af37]/35 animate-pulse [animation-delay:320ms] motion-reduce:animate-none"></span>' +
    '</div>' +
    '<span class="sr-only">Loading page</span>' +
    '</div>' +
    '</div>';

  html = html.replace(
    rootPattern,
    '<div id="root">' +
      loadingShell +
      (page === "home"
        ? ""
        : '<h1 id="seo-fallback-h1" class="sr-only">' +
          escapeHtml(h1) +
          '</h1>') +
      '</div>'
  );

  return html;
};

const staticSeoPagesPlugin = (): Plugin => {
  let resolvedConfig: ResolvedConfig;

  return {
    name: "averon-static-seo-pages",
    apply: "build",
    configResolved(config) {
      resolvedConfig = config;
    },
    writeBundle() {
      const outDir = path.resolve(
        resolvedConfig.root,
        resolvedConfig.build.outDir
      );
      const indexPath = path.join(outDir, "index.html");

      if (!fs.existsSync(indexPath)) {
        this.error(
          "Vite did not write index.html; static SEO pages could not be generated."
        );
        return;
      }

      const baseHtml = fs.readFileSync(indexPath, "utf8");

      for (const route of STATIC_SEO_ROUTES) {
        const routeHtml = renderStaticSeoHtml(
          baseHtml,
          route.page,
          route.serviceId
        );

        if (!route.fileName) {
          fs.writeFileSync(indexPath, routeHtml, "utf8");
          continue;
        }

        const outputPath = path.join(outDir, route.fileName);
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, routeHtml, "utf8");
      }
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), staticSeoPagesPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
