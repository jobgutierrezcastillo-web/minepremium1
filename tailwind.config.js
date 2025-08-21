/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B1A2A",
          800: "#0F2238"
        },
        gold: {
          500: "#E6C66E",
          600: "#C9A33A"
        }
      }
    },
  },
  plugins: [],
};
