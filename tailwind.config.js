/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/js/app.js",
    "./resources/js/src/**/*.js",
    "./resources/js/src/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Inter"'],
        'sans': ['"Inter"'],
      },
    },
  },
  plugins: [],
}

