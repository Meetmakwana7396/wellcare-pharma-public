/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#227fbb",
      secondary: "#7f8c8d",
      warning: "#f59d00",
      success: "#1aaf5d",
      danger: "#c23824",
      info: "#9c56b8",
      black: "#000000",
    },

    extend: {},
  },
  plugins: [],
};
