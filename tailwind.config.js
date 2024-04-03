/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sideNavcolor: "#26201d",
        backgroundColor: "#231c17",
      },
    },
  },
  plugins: [],
};
