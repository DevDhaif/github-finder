module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Keyframes:{
      // animate:{
      //   '0%': {
      //     opacity:' 10',
      //     'stroke-dasharray':0,
      //   },
      //   '25%': {
      //     opacity:' 10',
      //     'stroke-dasharray':250,
      //   },
      //   '50%': {
      //     opacity:' 10',
      //     'stroke-dasharray':500,
      //   },
      //   '75%': {
      //     opacity:' 10',
      //     'stroke-dasharray':750,
      //   },
      //   '100%': {
      //     opacity:' 10',
      //     'stroke-dasharray':1000,
      //   },

      // }
      // }
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        animate: {
          "0%": {
            opacity: "0",
            "stroke-dasharray": 0,
          },
          "25%": {
            opacity: "10",
            "stroke-dasharray": 250,
          },
          "50%": {
            opacity: " 0",
            "stroke-dasharray": 500,
          },
          "75%": {
            opacity: " 10",
            "stroke-dasharray": 750,
          },
          "100%": {
            opacity: "100",
            "stroke-dasharray": 1000,
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        animate:"animate 2s ease-in-out "
      },
      // animation: { animate: "animate 2s cubic-besizer(0,0.23,1,0.1)" }
    },
  },
  plugins: [require("daisyui")],
};
