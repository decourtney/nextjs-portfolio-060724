import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./Footer";
import NavBar from "./Navbar";
import {
  Inter,
  Poppins,
  Playfair_Display,
  Roboto,
  Montserrat,
} from "next/font/google";
import SvgNoise from "./components/SvgNoise";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    title: "Create Next App",
    description: "Generated by create next app",
    type: "website",
    url: "https://www.yoursite.com",
    images: [
      {
        url: "https://www.yoursite.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Create Next App Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yoursite",
    title: "Create Next App",
    description: "Generated by create next app",
    images: ["https://www.yoursite.com/twitter-image.jpg"],
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
          <NavBar />
          <main className={`px-4 overflow-clip`}>{children}</main>
          <Footer />
          <SvgNoise />
        </Providers>
      </body>
    </html>
  );
}
