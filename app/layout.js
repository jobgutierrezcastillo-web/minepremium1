export const metadata = {
  title: "MINERO Premium — Inteligencia para la minería de LATAM",
  description: "Boletín premium con análisis, licitaciones y riesgos para el sector minero.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
