/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-bg-img": "url('/assets/home_bg.jpg')",
      }),
      backgroundSize: {
        100: "100% 105%",
      },
      backgroundPosition: {
        "top-left": "0vw 0vh",
      },
      
    },
  },

  plugins: [],
};
