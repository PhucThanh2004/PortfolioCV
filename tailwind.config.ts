import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FAF6ED",
          100: "#F5EEDC",
          200: "#EEDDBF",
          300: "#E4CAA1",
          400: "#D7B481",
        },
        denim: {
          400: "#54729E",
          500: "#435B7D",
          600: "#384D6B",
          700: "#2E3F57",
          800: "#243245",
          900: "#192331",
        },
      },
      fontFamily: {
        display: ["Oswald", "Impact", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [animate],
} satisfies Config;
