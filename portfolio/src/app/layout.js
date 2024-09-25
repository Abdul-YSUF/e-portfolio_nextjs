export const metadata = {
  title: "Portfolio d'Abdul",
  description:
    "Développeur web, Web developer, Développeur intégrateur web, Intégrateur web, Développeur Fullstack, Fullstack Developer, Backend Developer, Frontend Developer, Développeur Backend, Développeur Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="jour">{children}</body>
    </html>
  );
}
