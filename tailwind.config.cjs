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
    themes: ["winter", "night"],
  },
  darkMode: ["class", '[data-theme="winter"]'],
};
