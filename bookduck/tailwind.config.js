/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
