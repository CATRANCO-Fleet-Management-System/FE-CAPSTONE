/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        120: "32rem", // Custom height value
      },
      strokeWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        10: "10px",
        20: "20px",
      },
    },
  },
  plugins: [],
};
