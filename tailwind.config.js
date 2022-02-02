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
            "stroke-dasharray": 200,
          },
          "25%": {
            opacity: "10",
            "stroke-dasharray": 400,
          },
          "50%": {
            opacity: "10",
            "stroke-dasharray": 600,
          },
          "75%": {
            opacity: " 10",
            "stroke-dasharray": 800,
          },
          "100%": {
            opacity: "10",
            "stroke-dasharray": 1000,
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        animate: "animate 1.2s linear  infinite",
      },
      // animation: { animate: "animate 2s cubic-besizer(0,0.23,1,0.1)" }
      transitionTimingFunction: {
        "stro": "cubic-bezier(.83,.16,.87,.65)",
      },
    },
  },
  plugins: [require("daisyui")],
};
