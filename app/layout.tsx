import type { Metadata } from "next";
// @ts-expect-error CSS imports are handled by Next.js and are not covered by app-level TS declarations.
import "./globals.css";
import { Header } from "./widgets";
import AppProvider from "./context/AppContext";
import LayoutClient from "./layout-client.tsx";
import localFont from "next/font/local";
import { Averia_Serif_Libre, Syne, Outfit } from "next/font/google";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
  variable: "--syne-font",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--outfit-font",
  display: "swap",
});

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/Helvetica/helvetica_light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvetica/helvetica_regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvetica/helvetica_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--helvetica-font",
  display: "swap",
});

const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--averia-font",
  display: "swap",
});

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
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${averiaSerifLibre.variable} ${syne.variable} ${helvetica.variable} ${outfit.variable} antialiased`}
      >
        <AppProvider>
          <LayoutClient>
            {/* <Header /> */}
            <div className="relative w-full overflow-hidden">
              <header className="fixed top-0 z-100 w-full py-2.5 px-5 flex  justify-between bg-transparent">
                <div className="flex w-full items-center justify-between ">
                  <div>
                    <Link
                      className="text-2xl font-syne tracking-tighter"
                      href={"/"}
                    >
                      Oddiy
                    </Link>
                  </div>
                  <div className="flex gap-6 ">
                    <Link href={"/projects"}>Projects</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/services"}>Services</Link>
                    <Link href={"/contact"}>Contact</Link>
                  </div>
                  <div>
                    <p className="">12:11 Tashkent, Uzbekistan</p>
                  </div>
                </div>
              </header>

              <div
                className="fixed left-0 pointer-events-none top-0 w-full z-40 hidden sm:block"
                style={{ height: 80, top: 0 }}
              >
                <div
                  className="absolute left-0 top-0 size-full pointer-events-none"
                  style={{
                    zIndex: 0,
                    backdropFilter:
                      "blur(1px);mask-image:linear-gradient(to bottom, black 0%, #000 70%, transparent 100%)",
                  }}
                ></div>
                <div
                  className="absolute left-0 top-0 size-full pointer-events-none"
                  style={{
                    zIndex: 1,
                    backdropFilter:
                      "blur(4px);mask-image:linear-gradient(to bottom, black 0%, #000 50%, transparent 100%)",
                  }}
                ></div>
                <div
                  className="absolute left-0 top-0 size-full pointer-events-none"
                  style={{
                    zIndex: 2,
                    backdropFilter:
                      "blur(10px);mask-image:linear-gradient(to bottom, black 0%, #000 30%, transparent 100%)",
                  }}
                ></div>
              </div>
            </div>
            {children}
          </LayoutClient>
        </AppProvider>
      </body>
    </html>
  );
}
