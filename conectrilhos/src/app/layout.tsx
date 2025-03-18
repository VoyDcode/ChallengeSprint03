import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";

export const metadata: Metadata = {
  title: "Conectrilhos",
  description: "Uma aplicação para facilitar a comunicação entre metrô e passageiro"
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
