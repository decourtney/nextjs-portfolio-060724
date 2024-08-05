import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

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
        <Providers>
          <main className="relative w-full lg:max-w-[80%] xl:max-w-[60%] mx-auto -mt-[48px] px-4 md:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
