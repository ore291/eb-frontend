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
        baseGray: '#1A284B',
        bgGray:'#f4f4f4'
      },
       fontFamily: {
        'ibm_plex_mono': ['"IBM Plex Mono"'],
      },
      
    },
  },
  plugins: [require("flowbite/plugin")],
};
