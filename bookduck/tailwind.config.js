/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        black: "#000000",
        blue: "#0066FF",
        orange: {
          300: "#FFBF68",
          400: "#FF9F1C",
          600: "#EA7120",
        },
        gray: {
          10: "#FBFBFB",
          50: "#F7F7F7",
          100: "#EEEEEE",
          200: "#E2E2E2",
          400: "#ABABAB",
          500: "#8A8A8A",
          600: "#636363",
          700: "#505050",
          800: "#323232",
        },
      },
      fontSize: {
        t1: ["1.5rem", { lineHeight: "2.25rem" }],
        t2: ["1.25rem", { lineHeight: "1.75rem" }],
        st: ["1.125rem", { lineHeight: "1.5rem" }],
        b1: ["1rem", { lineHeight: "1.5rem" }],
        b2: ["0.875rem", { lineHeight: "1.5rem" }],
        btn1: ["1.125rem", { lineHeight: "1.5rem" }],
        btn2: ["1rem", { lineHeight: "1.25rem" }],
        btn3: ["0.875rem", { lineHeight: "1.25rem" }],
        btn4: ["0.75rem", { lineHeight: "1rem" }],
        c1: ["0.75rem", { lineHeight: "1rem" }],
        c2: ["0.6875rem", { lineHeight: "0.8125rem" }],
      },
      fontWeight: {
        semibold: 600,
        regular: 400,
      },
      boxShadow: {
        custom: "0px 0px 3px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
