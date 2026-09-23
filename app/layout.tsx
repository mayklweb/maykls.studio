import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./widgets";
import AppProvider from "./context/AppContext";
import LayoutClient from "./layout-client.tsx";
import localFont from "next/font/local";
import { Averia_Serif_Libre } from "next/font/google";

const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-averia-serif-libre",
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
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${averiaSerifLibre.variable} antialiased`}
      >
        <AppProvider>
          <LayoutClient>
            {/* <Header /> */}
            <div className="relative">
              <header className="fixed top-0 z-[99] flex w-full items-end justify-between bg-blur-gradient px-4 py-3 md:px-10">
                {/* Desktop navigation */}
                <div className="hidden w-full justify-between lg:flex">
                  <div className="overflow-hidden">
                    <div className="flex">
                      <a
                        href="/"
                        aria-label="Logo"
                        className="w-[75px]"
                        id="btn-logo"
                      >
                        {/* Original SVG logo */}
                      </a>
                    </div>
                  </div>

                  <span className="block opacity-100">
                    <nav className="flex gap-3">
                      <a
                        href="/projects"
                        id="btn-projects"
                        aria-label="Projects"
                        className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#F0F0F0] px-5 py-3 text-center text-[12px] leading-none text-gray-700 transition-all duration-300 hover:bg-[#CFCFCF] active:bg-[#A0A0A0] md:py-2.5"
                        style={{ backdropFilter: "blur(8px)" }}
                      >
                        <span className="translate-y-px">Projects</span>
                      </a>

                      <button
                        id="btn-updates"
                        aria-label="News"
                        className="group flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-blur-button px-5 py-3 text-center text-[12px] leading-none text-gray-700 transition-all duration-300 hover:bg-[#CFCFCF] md:py-2.5"
                      >
                        <span className="pointer-events-none relative translate-y-[0.5px] overflow-hidden">
                          <span className="relative inline-block">News</span>
                          <span className="absolute left-0 top-0 translate-y-[110%]">
                            News
                          </span>
                        </span>
                      </button>

                      <button
                        id="btn-office"
                        aria-label="Office"
                        className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#E6E6E6] px-5 py-3 text-center text-[12px] leading-none text-gray-700 transition-all duration-300 hover:bg-[#CFCFCF] md:py-2.5"
                      >
                        <span className="pointer-events-none relative translate-y-[0.5px] overflow-hidden">
                          <span className="relative inline-block">Office</span>
                          <span className="absolute left-0 top-0 translate-y-[110%]">
                            Office
                          </span>
                        </span>

                        <span className="relative overflow-hidden">
                          <svg
                            className="absolute top-0 transition-all duration-[400ms] group-hover:top-0"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 0.5V12.5M0 6.5H12" stroke="#1A1A1A" />
                          </svg>

                          <svg
                            className="relative top-0 transition-all duration-[400ms] group-hover:-translate-y-full"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 0.5V12.5M0 6.5H12" stroke="#1A1A1A" />
                          </svg>
                        </span>
                      </button>

                      <button
                        id="btn-search"
                        aria-label="Search"
                        className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#E6E6E6] px-5 py-3 text-center text-[12px] leading-none text-gray-700 transition-all duration-300 hover:bg-[#CFCFCF] md:py-2.5"
                      >
                        <span className="relative overflow-hidden">
                          {/* Original search SVG icons */}
                        </span>
                      </button>

                      <a
                        href="/offices"
                        id="btn-contact"
                        aria-label="Contact"
                        className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#F0F0F0] px-5 py-3 text-center text-[12px] leading-none text-gray-700 transition-all duration-300 hover:bg-[#CFCFCF] active:bg-[#A0A0A0] md:py-2.5"
                        style={{ backdropFilter: "blur(8px)" }}
                      >
                        <span className="relative overflow-hidden">
                          {/* Original phone SVG icons */}
                        </span>
                      </a>

                      <button
                        id="btn-lang"
                        aria-label="EN"
                        className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#E6E6E6] px-5 py-3 text-center text-[12px] leading-none text-gray-700 transition-all duration-300 hover:bg-[#CFCFCF] md:py-2.5"
                      >
                        <span className="pointer-events-none relative translate-y-[0.5px] overflow-hidden">
                          <span className="relative inline-block">EN</span>
                          <span className="absolute left-0 top-0 translate-y-[110%]">
                            EN
                          </span>
                        </span>
                      </button>
                    </nav>
                  </span>
                </div>

                {/* Mobile navigation */}
                <div className="flex w-full items-center justify-between lg:hidden">
                  <div className="overflow-hidden">
                    <div className="flex">
                      <a href="/" aria-label="Logo" className="w-[75px]">
                        {/* Original SVG logo */}
                      </a>
                    </div>
                  </div>

                  <span className="block translate-y-5 opacity-0">
                    <nav className="flex items-center gap-2">
                      <a
                        href="/projects"
                        aria-label="Projects"
                        className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#F0F0F0] px-5 py-3 text-center text-[12px] leading-none text-gray-700 transition-all duration-300 hover:bg-[#CFCFCF] active:bg-[#A0A0A0] md:py-2.5"
                        style={{ backdropFilter: "blur(8px)" }}
                      >
                        <span className="translate-y-px">Projects</span>
                      </a>

                      <button
                        aria-label="Search"
                        className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#E6E6E6] px-5 py-3 text-center text-[12px] leading-none text-gray-700 transition-all duration-300 hover:bg-[#CFCFCF] md:py-2.5"
                      >
                        <span className="relative overflow-hidden">
                          {/* Original search SVG icons */}
                        </span>
                      </button>

                      <button
                        aria-label="Menu"
                        className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#E6E6E6] px-5 py-3 text-center text-[12px] leading-none text-gray-700 transition-all duration-300 hover:bg-[#CFCFCF] md:py-2.5"
                      >
                        <span className="relative overflow-hidden">
                          {/* Original menu SVG */}
                        </span>
                      </button>
                    </nav>
                  </span>
                </div>
              </header>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 opacity-100 [backdrop-filter:blur(1px)] [mask:linear-gradient(transparent,#000_10%,#000_30%,transparent_40%)]" />

                <div className="absolute inset-0 opacity-100 [backdrop-filter:blur(2px)] [mask:linear-gradient(transparent_10%,#000_20%,#000_40%,transparent_50%)]" />

                <div className="absolute inset-0 opacity-100 [backdrop-filter:blur(4px)] [mask:linear-gradient(transparent_15%,#000_30%,#000_50%,transparent_60%)]" />

                <div className="absolute inset-0 opacity-100 [backdrop-filter:blur(8px)] [mask:linear-gradient(transparent_20%,#000_40%,#000_60%,transparent_70%)]" />

                <div className="absolute inset-0 opacity-100 [backdrop-filter:blur(12px)] [mask:linear-gradient(transparent_40%,#000_60%,#000_80%,transparent_90%)]" />

                <div className="absolute inset-0 opacity-100 [backdrop-filter:blur(16px)] [mask:linear-gradient(transparent_60%,#000_80%)]" />

                <div className="absolute inset-0 z-10 opacity-100 [backdrop-filter:blur(16px)] [mask:linear-gradient(transparent_70%,#000)]" />
              </div>
            </div>
            {children}
          </LayoutClient>
        </AppProvider>
      </body>
    </html>
  );
}
