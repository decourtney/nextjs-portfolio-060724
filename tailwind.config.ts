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
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        playfairDisplay: ["var(--font-playfair-display)"],
        montserrat: ["var(--font-montserrat)"],
      },
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
              "100": "#FDB813",
              "200": "#97D5FD",
              "300": "#63B7F9",
              "400": "#3D9BF4",
              "500": "#4A90E2",
            },
            content1: {
              "100": "#C1440E",
              "200": "#6B8E23",
              "300": "#707070",
              "400": "#1B0E12",
              "500": "#16090D",
            },
            content2: {},
            content3: {},
            content4: {},
          },
        },

        dark: {
          layout: {},
          colors: {
            background: "#2F2F2F",
            foreground: "#F4F4F4",
            primary: {
              "100": "#F4F4F4",
              "200": "#EAEAEA",
              "300": "#C0C0C0",
              "400": "#828282",
              "500": "#2F2F2F",
            },
            secondary: {
              "100": "#4A90E2",
              "200": "#97D5FD",
              "300": "#63B7F9",
              "400": "#3D9BF4",
              "500": "#FDB813",
            },
            content1: {
              "100": "#8B2F0B",
              "200": "#2E7D32",
              "300": "#1C1C1C",
              "400": "#1B0E12",
              "500": "#16090D",
            },
            content2: {},
            content3: {},
            content4: {},
          },
        },
      },
    }),
  ],
};
export default config;
