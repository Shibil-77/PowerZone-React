/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "myColor": {
          "50": "#eff6eb",
          "100": "#dfedd6",
          "200": "#bfdbae",
          "300": "#9eca85",
          "400": "#7eb85d",
          "500": "#5ea634",
          "600": "#4b852a",
          "700": "#38641f",
          "800": "#264215",
          "900": "#13210a"
        }
      }
    },
  },
  plugins: [],
}
