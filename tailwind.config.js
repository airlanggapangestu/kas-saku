/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16a34a", // hijau utama
          light: "#22c55e", // hijau terang
          dark: "#15803d", // hijau gelap
        },
        secondary: "#f3f4f6", // putih lembut
      },
    },
  },
  plugins: [],
};
