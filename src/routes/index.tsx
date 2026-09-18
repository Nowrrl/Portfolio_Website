import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rasul Novruzov — Full-Stack & AI/ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Rasul Novruzov, a full-stack software engineer and AI/ML engineer building intelligent, production-ready products.",
      },
      { property: "og:title", content: "Rasul Novruzov — Full-Stack & AI/ML Engineer" },
      {
        property: "og:description",
        content: "AI engineering, computer vision, and end-to-end software products by Rasul Novruzov.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioPage />;
}
