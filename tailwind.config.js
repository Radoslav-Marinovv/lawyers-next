/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    //"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //"hero-pattern-image": "url('/pattern-image.jpg')",
        // "image-courthouse": "url('/courthouse.jpg')",
        //"library-head-ladder": "url('/library-head-ladder.jpg')",
        //"library-round-ladder": "url('/library-round-ladder.jpg')",
        //"library-straight-ladder": "url('/library-straight-ladder.jpg')",
        //"themida-statue": "url('/themida-statue.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee"],
  },
};
