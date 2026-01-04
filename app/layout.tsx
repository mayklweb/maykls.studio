import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./widgets";
import ReactLenis from "lenis/react";
import AppProvider from "./context/AppContext";
import LayoutClient from "./layout-client.tsx";
import localFont from "next/font/local";

const instrumentSans = localFont({
  src: [
    {
      path: "../public/fonts/Instrument_Sans/static/InstrumentSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Instrument_Sans/static/InstrumentSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Instrument_Sans/static/InstrumentSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Instrument_Sans/static/InstrumentSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../public/fonts/Instrument_Serif/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Instrument_Serif/InstrumentSerif-Italic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAYKLSTUDIO - Your Future Partner",
  description:
    "Creative studio specializing in web design, development, and digital marketing to elevate your brand's online presence.",
  icons: {
    icon: "/favicon.svg",
  },
  // manifest: "/manifest.json",
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
            <Header />
            {children}
          </LayoutClient>
        </AppProvider>
      </body>
    </html>
  );
}
