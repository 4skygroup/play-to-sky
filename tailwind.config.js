/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pulse-x-agency-pink": "#EF5A98",
        "snackly-orange": "#FC641C",
        "seofy-green": "#11676A",
        "play-to-sky-productions-gray": "#171717",
        "app-gray": "#75777C",
        "footer-bg": "#111625",
      },
    },
  },
  plugins: [],
};
