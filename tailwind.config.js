/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        120: "32rem",
        140: "40rem",
        160: "45rem",
        34: "8.50rem",
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
