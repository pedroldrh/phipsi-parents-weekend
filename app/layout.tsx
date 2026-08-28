import type { Metadata } from "next";
import { Archivo, Archivo_Black, Yellowtail } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phi Psi Parents Weekend — Washington & Lee",
  description:
    "Phi Kappa Psi Parents Weekend at Washington & Lee. Cookout, darty, mashup bar — and the tee to prove you were there.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${archivoBlack.variable} ${yellowtail.variable} grain antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
