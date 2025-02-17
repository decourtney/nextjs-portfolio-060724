import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display, Roboto } from "next/font/google";
import SvgNoise from "./components/svgNoise";
import Footer from "./Footer";
import "./globals.css";
import NavBar from "./Navbar";
import { Providers } from "./providers";
import LoadingWrapper from "./components/loadingWrapper";

export const metadata: Metadata = {
  title: "Donovan Courtney",
  description: "I make stuff",
  openGraph: {
    title: "Donovan Courtney",
    description: "I make stuff",
    type: "website",
    url: "https://donovancourtney.dev",
    images: [
      {
        secureUrl: "https://donovancourtney.dev/images/demoticon_banner.jpg",
        url: "https://donovancourtney.dev/images/demoticon_banner.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://donovancourtney.dev",
    title: "Donovan Courtney",
    description: "I make stuff",
    images: ["https://donovancourtney.dev/images/demoticon_banner.jpg"],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  minimumScale: 1,
};

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} suppressHydrationWarning={true}>
      <body
        className={`font-roboto font-bold ${roboto.variable} ${playfairDisplay.variable} ${montserrat.variable}`}
      >
        <Providers>
          <LoadingWrapper>
            <NavBar />
            {children}
            <Footer />
          </LoadingWrapper>
          <SvgNoise />
        </Providers>
      </body>
    </html>
  );
}
