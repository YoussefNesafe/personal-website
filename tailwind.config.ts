import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        'tablet': '481px',
        'desktop': '1024px'
    },
    extend: {
      colors: {
        background: '#282C33',
        priamry: '#C778DD'
      }
    },
  },
  plugins: [],
};
export default config;
