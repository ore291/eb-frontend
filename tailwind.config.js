/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseOrng: "#F67A01",
        lightOrng: '#FCBF6540',
        baseGray:'#1A284B'
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
