/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      keyframes: {
        boxshadow: {
          "0%, 100%": { "box-shadow": "#463aa1 0px -1rem 0px inset" },
          "50%": { "box-shadow": "#463aa1 0px -2.25rem 0px inset" },
        },
        fade: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        "box-shadow": "boxshadow 2s ease-in-out 2s",
        "content-fade": "fade 0.6s ease",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        winter: {
          ...require("daisyui/src/theming/themes")["winter"],
          "base-content": "#222e3f",
        },
      },
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "base-100": "#0d1221",
          primary: "#5ce18c",
        },
      },
    ],
  },
  darkMode: ["class", '[data-theme="night"]'],
};
