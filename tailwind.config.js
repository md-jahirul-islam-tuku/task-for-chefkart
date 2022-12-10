/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#E6E6E6",

          "secondary": "#82ea19",

          "accent": "#56f784",

          "neutral": "#24262E",

          "base-100": "#FFFFFF",

          "info": "#5E86C9",

          "success": "#72E9D5",

          "warning": "#D7A614",

          "error": "#F5517A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
