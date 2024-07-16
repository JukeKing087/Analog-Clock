/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/index.ejs"],
  theme: {
    extend: {
      backgroundImage: {
        'clock': "url('/img/Clock.jpg')",
      }
    },
    plugins: [],
  },
};
