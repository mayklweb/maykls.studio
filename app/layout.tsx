import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "./widgets";
import ReactLenis from "lenis/react";
import AppProvider from "./context/AppContext";
import LayoutClient from "./layout-client.tsx";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAYKLSTUDIO - Your Future Partner",
  description:
    "Creative studio specializing in web design, development, and digital marketing to elevate your brand's online presence.",
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        <AppProvider>
          <LayoutClient>
            <ReactLenis root />
            <Header />
            {children}
          </LayoutClient>
        </AppProvider>
      </body>
    </html>
  );
}
