import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SeoConfig {
  title: string;
  description: string;
  canonical: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function useSeo({ title, description, canonical, breadcrumbs }: SeoConfig) {
  useEffect(() => {
    document.title = title;

    const setAttr = (selector: string, attr: string, value: string) => {
      document.querySelector(selector)?.setAttribute(attr, value);
    };

    setAttr('meta[name="description"]', "content", description);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", description);
    setAttr('meta[property="og:url"]', "content", canonical);
    setAttr('meta[name="twitter:title"]', "content", title);
    setAttr('meta[name="twitter:description"]', "content", description);
    setAttr('link[rel="canonical"]', "href", canonical);

    if (breadcrumbs) {
      const id = "page-jsonld-breadcrumb";
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = id;
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      });
    }

    return () => {
      document.getElementById("page-jsonld-breadcrumb")?.remove();
    };
  }, [title, description, canonical, breadcrumbs]);
}
