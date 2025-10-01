/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greywhite: "#F5F5F5",
        darkgreywhite: "#E1E1E1",
      },
      spacing: {
        "60": "60px",
        "28": "28px",
        "20": "20px",
        "74": "74px",
        "50":"50px"
      },
    },
  },
  plugins: [],
};