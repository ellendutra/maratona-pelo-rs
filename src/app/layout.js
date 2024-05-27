import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amiga do RS",
  description: "Em um grande movimento de solidariedade e união feminina, queremos tornar prioridade o acompanhamento psicológico e jurídico de mães que foram afetadas pelas enchentes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
