import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  // darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      layout: {
        dividerWeight: "1px", // h-divider the default height applied to the divider component
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        fontSize: {
          tiny: "0.75rem", // text-tiny
          small: "0.875rem", // text-small
          medium: "1rem", // text-medium
          large: "1.125rem", // text-large
        },
        lineHeight: {
          tiny: "1rem", // text-tiny
          small: "1.25rem", // text-small
          medium: "1.5rem", // text-medium
          large: "1.75rem", // text-large
        },
        radius: {
          small: "8px", // rounded-small
          medium: "12px", // rounded-medium
          large: "14px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "2px", // border-medium (default)
          large: "3px", // border-large
        },
      },
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#F4F4F4",
            foreground: "#2F2F2F",
            primary: {
              "100": "#2F2F2F",
              "200": "#828282",
              "300": "#C0C0C0",
              "400": "#EAEAEA",
              "500": "#F4F4F4",
            },
            secondary: {
              "100": "#CBECFE",
              "200": "#97D5FD",
              "300": "#63B7F9",
              "400": "#3D9BF4",
              "500": "#006FEE",
              "600": "#0055CC",
              "700": "#003FAB",
              "800": "#002C8A",
              "900": "#001F72",
            },
            content1: {
              "100": "#2F2F2F",
              "200": "#282222",
              "300": "#211719",
              "400": "#1B0E12",
              "500": "#16090D",
            },
          },
        },

        dark: {
          layout: {},
          colors: {
            background: "#1B0E12",
            foreground: "#F4F4F4",
            primary: {
              "100": "#F4F4F4",
              "200": "#EAEAEA",
              "300": "#C0C0C0",
              "400": "#828282",
              "500": "#2F2F2F",
            },
            secondary: {
              "100": "#CBECFE",
              "200": "#97D5FD",
              "300": "#63B7F9",
              "400": "#3D9BF4",
              "500": "#006FEE",
              "600": "#0055CC",
              "700": "#003FAB",
              "800": "#002C8A",
              "900": "#001F72",
            },
            content1: {
              "100": "#2F2F2F",
              "200": "#282222",
              "300": "#211719",
              "400": "#1B0E12",
              "500": "#16090D",
            },
          },
        },
      },
    }),
  ],
};
export default config;
