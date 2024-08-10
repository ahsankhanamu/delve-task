/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear-lime":
          "linear-gradient(0deg, rgba(212,255,29,1) 0%, rgba(234,255,144,1) 100%)",
      },
      colors: {
        argent: "#888888",
        "outrageous-orange": "#ff6c47",
        "linear-lime-start": "rgba(212,255,29,1)",
        "linear-lime-end": "rgba(234,255,144,1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
