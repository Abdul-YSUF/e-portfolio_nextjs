import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./saas/style.css";

export const metadata = {
  title: "Mon Portfolio - Développeur Web",
  description:
    "Découvrez le portfolio d'Abdul, développeur web spécialisé en création de sites modernes et performants. Expertise en Frontend, Backend et solutions fullstack complètes.",
  icons: {
    icon: "/assets/abdul-le-dev-favicon-white.webp",
    apple: "/assets/abdul-le-dev-favicon-white.webp",
    shortcut: "/assets/abdul-le-dev-favicon-white.webp",
  },
  openGraph: {
    title: "Mon Portfolio - Développeur Web",
    description:
      "Explorez les projets et services d'Abdul, développeur web avec expertise en React, Node.js, Next.js et création d'applications web complètes.",
    url: "https://abdul-le-dev-portfolio.vercel.app",
    siteName: "Abdul le Dev",
    images: [
      {
        url: "https://abdul-le-dev-portfolio.vercel.app/assets/og_image.webp",
        width: 1200,
        height: 630,
        alt: "Abdul le Dev - Développeur Web",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@abdul_le_dev",
    title: "Mon Portfolio - Développeur Web",
    description:
      "Développeur Web avec des compétences en React, Node.js, Next.js et création d'expériences web interactives.",
    images: ["https://abdul-le-dev-portfolio.vercel.app/assets/og_image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="jour">
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
