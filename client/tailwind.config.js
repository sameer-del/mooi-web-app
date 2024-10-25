/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      custom: ["primary", "sans-serif"], // "custom" will be used as the utility name
    },
  },
  plugins: [],
};
