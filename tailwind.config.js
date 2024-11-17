/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #232526, #414345)',
        'card-gradient': 'linear-gradient(to bottom, rgba(242, 199, 34, 0.7), rgba(33, 31, 32, 0.7))',
      },
      zIndex: {
        40: '40',
        50: '50',
      },
      colors:{
        primary:"#F2C722",
        secondary:"#211F20"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}

