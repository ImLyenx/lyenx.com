/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      colors: {
        "custom-blue-dark": "#022B3A",
        "custom-blue-mid": "#115363",
        "custom-blue-light": "#1F7A8C",
        "custom-blue-lightest": "#6FABC2",
        "custom-white-darkest": "#BFDBF7",
        "custom-white-dark": "#E1E5F2",
        "custom-white-mid": "#F0F2F9",
        "custom-white-light": "#FFFFFF",
      },
      keyframes: {
        boxshadow: {
          "0%, 100%": { "box-shadow": "#463aa1 0px -1rem 0px inset" },
          "50%": { "box-shadow": "#463aa1 0px -2.25rem 0px inset" },
        },
        fade: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        "box-shadow": "boxshadow 2s ease-in-out 2s",
        "content-fade": "fade 0.4s ease",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter",
      "night",
      {
        ocean: {
          primary: "#6419E6",

          secondary: "#1f7a8c",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#022B3A",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  darkMode: ["class", '[data-theme="winter"]'],
};
