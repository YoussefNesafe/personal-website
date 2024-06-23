import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_sections/**/*.{js,ts,jsx,tsx,mdx}",
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
        3000: '3000ms',
        20: '20000ms'
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
          to: { height: "9vw"}
        },
        "media-balls":{
          from : {transform: "translateY(0)"},
          to: {transform: "translateY(10vw)"}
        },
        "email-icon":{
          from : { transform: "translateY(0)"},
          to: { transform: "translateY(2.92vw)"}
        },
        "github-icon":{
          from : {transform: "translateY(0)"},
          to: {transform: "translateY(5.84vw)"}
        },
        "banner-rectangle-1":{
          "0%, 100%" : {transform: "translate(0%,0%)"},
          "25%": {transform: "translate(50%,0%)"},
          "50%": {transform: "translate(50%,50%)"},
          "75%": {transform: "translate(0%,50%)"},
        },
        "banner-rectangle-2":{
          "0%, 100%" : {transform: "translate(0%,0%)"},
          "25%": {transform: "translate(-50%,0%)"},
          "50%": {transform: "translate(-50%,-50%)"},
          "75%": {transform: "translate(0%,-50%)"},
        }

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "media-line": "media-line 1.5s  linear",
        "media-balls": "media-balls 1.5s  linear",
        "email-icon": "email-icon 0.4s linear forwards",
        "github-icon": "github-icon 0.8s linear forwards",
        "banner-rectangle-1": "banner-rectangle-1 20s infinite linear",
        "banner-rectangle-2": "banner-rectangle-2 20s infinite linear",
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
