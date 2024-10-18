import "./saas/style.css";

export const metadata = {
  title: "Mon Portfolio - Développeur Web",
  description:
    "Découvrez le portfolio d'Abdul, développeur web spécialisé en création de sites modernes et performants. Expertise en Frontend, Backend et solutions fullstack complètes.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/assets/abdul-le-dev-favicon-white.webp",
  },
  openGraph: {
    title: "Mon Portfolio - Développeur Web",
    description:
      "Explorez les projets et services d'Abdul, développeur web avec expertise en React, Node.js, Next.js et création d'applications web complètes.",
    url: "https://abdul-le-dev-portfolio.vercel.app",
    images: [
      {
        url: "/assets/og_image.webp",
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
    images: ["/assets/og_image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="jour">{children}</body>
    </html>
  );
}
