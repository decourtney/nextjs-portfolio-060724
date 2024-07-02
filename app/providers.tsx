"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Theme as RadixThemesProvider } from "@radix-ui/themes";
import { StateProvider } from "./hooks/useStateContex";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    // radix provider is conflicting with next-themes provider
    // <RadixThemesProvider>
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <NextUIProvider navigate={router.push}>
        <StateProvider>{children}</StateProvider>
      </NextUIProvider>
    </NextThemesProvider>
    // </RadixThemesProvider>
  );
}
