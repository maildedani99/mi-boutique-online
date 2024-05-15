/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bg': 'linear-gradient(to right, #F7F7F7 0%, white 50%, #F7F7F7 100%)'
      },
      colors: {
        primary: "#517A93",
        secondary: "#0B3857",
        text: "#5c5c5c",
      },
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [],
};
