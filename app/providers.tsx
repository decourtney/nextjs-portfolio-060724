"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Theme>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <NextUIProvider navigate={router.push}>
            {children} 
        </NextUIProvider>
      </NextThemesProvider>
    </Theme>
  );
}
