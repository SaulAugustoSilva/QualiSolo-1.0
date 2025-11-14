// src/app/layout.jsx
import './globals.css';

export const metadata = {
  title: "QualiSolo",
  description: "Sistema de análise de questionários de solo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

