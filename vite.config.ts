import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
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

  html = html.replace(
    /<script\s+id="structured-data"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="structured-data" type="application/ld+json">${JSON.stringify(
      structuredData
    ).replace(/</g, "\\u003c")}</script>`
  );

  return html;
};

const staticSeoPagesPlugin = (): Plugin => ({
  name: "averon-static-seo-pages",
  apply: "build",
  generateBundle(_options, bundle) {
    const indexAsset = bundle["index.html"];

    if (!indexAsset || indexAsset.type !== "asset") {
      this.error("Vite did not emit index.html; static SEO pages could not be generated.");
      return;
    }

    const baseHtml = String(indexAsset.source);

    for (const route of STATIC_SEO_ROUTES) {
      const routeHtml = renderStaticSeoHtml(
        baseHtml,
        route.page,
        route.serviceId
      );

      if (!route.fileName) {
        indexAsset.source = routeHtml;
        continue;
      }

      this.emitFile({
        type: "asset",
        fileName: route.fileName,
        source: routeHtml,
      });
    }
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), staticSeoPagesPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
