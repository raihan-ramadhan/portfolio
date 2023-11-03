import type { Config } from "tailwindcss";
import { maskPlugin } from "./plugin/mask-plugin";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "600px",
      md: "905px",
      lg: "1240px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        default: ["var(--space-mono)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--unbounded)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "hsl(var(--black))",
        blue: {
          DEFAULT: "hsl(var(--blue))",
          secondary: "hsl(var(--blue-secondary))",
          foreground: "hsl(var(--blue-foreground))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          secondary: "hsl(var(--cream-secondary))",
        },
      },
    },
  },
  plugins: [maskPlugin],
};
export default config;
