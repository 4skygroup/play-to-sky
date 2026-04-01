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
        "dark-gray": "#989FAC",
        "light-gray": "#F0F1F3",
        green: "#5BE83E",
        red: "#E53E3E",
      },
    },
  },
  plugins: [],
};
