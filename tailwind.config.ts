import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        'tablet': '481px',
        'desktop': '1024px'
    },
    extend: {
      transitionDelay: {
        1500: '1500ms',
        2000: '2000ms',
      },
      transitionDuration: {
        3000: '3000ms'
      },
      colors: {
        background: '#282C33',
        primary: '#C778DD',
        gray: '#ABB2BF'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "media-line":{
          from : {height: "0"},
          to: { height: "13.943vw"}
        },
        "media-balls":{
          from : {transform: "translateY(0)"},
          to: {transform: "translateY(14.527vw)"}
        },
        "email-icon":{
          from : { transform: "translateY(0)"},
          to: { transform: "translateY(2.92vw)"}
        },
        "github-icon":{
          from : {transform: "translateY(0)"},
          to: {transform: "translateY(5.84vw)"}
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "media-line": "media-line 1.5s  linear",
        "media-balls": "media-balls 1.5s  linear",
        "email-icon": "email-icon 0.4s linear forwards",
        "github-icon": "github-icon 0.8s linear forwards",
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
