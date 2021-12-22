module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange-1": "hsl(26, 100%, 55%)",
        "primary-orange-pale": "hsl(25, 100%, 94%)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
      },
      fontFamily: {
        "Kumbh-Sans": ["Kumbh Sans", "sans-serif"],
      },
      height: {
        height10: "10vh",
        height15: "15vh",
        height20: "20vh",
        height30: "30vh",
        height40: "40vh",
        height50: "50vh",
        height55: "55vh",
        height60: "60vh",
        height70: "70vh",
        height80: "80vh",
        height90: "90vh",
        height100: "100vh",
      },
      screens: {
        "custom-breakpoint": "1440px",
        "custom-breakpoint1": "1600px",
        "custom-breakpoint2": "1680px",
        "custom-breakpoint3": "1900px",
      },
    },
  },
  plugins: [],
};
