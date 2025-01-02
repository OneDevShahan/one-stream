export default {
  content: [
    "./src/app/**/*.{js,mjs,jsx,ts,tsx}",
    "./src/components/**/*.{js,mjs,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // Enables class-based dark mode
  plugins: [require("tailwind-scrollbar-hide")],
};
