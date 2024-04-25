/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        content: "#FFFF",
        sideNavcolor: "#FFFF",
        backgroundColor: "#f5f7ff",
        selectedNav: "#4b49ac",
        bodyColor: "#EFF2FB",
        baseText: "#999999",
      },
    },
  },
  plugins: [],
};
