import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0A1628',
        'navy': '#152238',
        'teal-dark': '#1A4D5C',
        'teal': '#2D7489',
        'purple': '#6B46C1',
        'magenta': '#A855F7',
        'pink': '#EC4899',
        'gold': '#D4AF37',
        'orange': '#F97316',
        'yellow': '#FBBF24',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
