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
            background: "#EEEEEE",
            foreground: "#111111",
            primary: {
              "50": "#e7e7e7",
              "100": "#d1d1d1",
              "200": "#b0b0b0",
              "300": "#888888",
              "400": "#6d6d6d",
              "500": "#5d5d5d",
              "600": "#4f4f4f",
              "700": "#454545",
              "800": "#3d3d3d",
              "900": "#111111",
            },
            secondary: "#006FEE",
            content1: "#EEEEF0",
            content4: {
              "50": "#e7e7e7",
              "100": "#d1d1d1",
              "200": "#b0b0b0",
              "300": "#888888",
              "400": "#6d6d6d",
              "500": "#5d5d5d",
              "600": "#4f4f4f",
              "700": "#454545",
              "800": "#3d3d3d",
              "900": "#111111",
            },
          },
        },

        dark: {
          layout: {},
          colors: {
            background: "#111111",
            foreground: "#EEEEEE",
            primary: {
              "900": "#e7e7e7",
              "800": "#d1d1d1",
              "700": "#b0b0b0",
              "600": "#888888",
              "500": "#6d6d6d",
              "400": "#5d5d5d",
              "300": "#4f4f4f",
              "200": "#454545",
              "100": "#3d3d3d",
              "50": "#111111",
            },
            secondary: "#006FEE",
            content1: "#1A191B",
            content4: {
              "50": "#e7e7e7",
              "100": "#d1d1d1",
              "200": "#b0b0b0",
              "300": "#888888",
              "400": "#6d6d6d",
              "500": "#5d5d5d",
              "600": "#4f4f4f",
              "700": "#454545",
              "800": "#3d3d3d",
              "900": "#111111",
            },
          },
        },
      },
    }),
  ],
};
export default config;
