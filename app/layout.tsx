import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./Footer";
import NavBar from "./NavBar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} suppressHydrationWarning={true}>
      <body>
        <NavBar />
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
