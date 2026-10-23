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

  // Keep the primary heading in the initial HTML response for crawlers that
  // do not execute the client-side React bundle. React's createRoot replaces
  // this temporary fallback when the full page mounts, so the visible site
  // design and its single rendered H1 remain unchanged.
  const h1 = getStaticH1(page, serviceId);
  if (!h1) {
    throw new Error(`Missing static H1 mapping for route: ${page}${serviceId ? ` (${serviceId})` : ""}`);
  }

  const rootPattern = /<div\s+id="root">\s*<\/div>/i;
  if (!rootPattern.test(html)) {
    throw new Error("Could not find the empty React root while generating static SEO HTML.");
  }

  html = html.replace(
    rootPattern,
    `<div id="root"><h1 id="seo-fallback-h1" style="margin:0;padding:24px 16px;max-width:880px;color:#fff;font-family:Inter,Arial,sans-serif;font-size:clamp(2rem,5vw,3.625rem);font-weight:800;line-height:1.05;letter-spacing:-0.035em;">${escapeHtml(h1)}</h1></div>`
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
