/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greywhite: "#F5F5F5",
        darkgreywhite: "#E1E1E1",
           goldgreen : "#A9832C",
            yellow:"#DDB61A",
            brickred:"#C15A16"
      },
      spacing: {
        "10":"10px",
        "11":"11px",
        "14":"14px",
        "15":"15px",
        "18":"18px",
        "19":"19px",
        "30":"30px",
        "33":"33px",
        "35":"35px",
        "37":"37px",
        "39":"39px",
        "60": "60px",
        "62":"62px",
        "28": "28px",
        "20": "20px",
        "22":"22px",
        "25":"25px",
        "27":"27px",
        "74": "74px",
        "75":"75px",
        "96":"96px",
        "40":"40px",
        "50":"50px",
        "53":"53px",
        "48":"48px",
        "399":"399px",
        "147":"147px",
        "43": "43px",
        "134":"134px",
        "183":"183px",
        "188":"188px",
        "261":"261px",

        "372":"372px"
      },
        borderRadius:{
        "20":"20px",
        "30":"30px"
      },
      fontSize:{
        "10":"10px",
        "md":"15px",
        "xss":"13px",
        "25":"25px",
        "2.5xl":"28px",
        "3.5xl":"35px",
        "4.5xl":"50px",
      }
    },
  },

  plugins: [],
};