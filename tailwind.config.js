/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "title": "#00BFA5",
        "subtitle": "#031432",
        "paragraph": "#6C87AE",
        "primary-blue": "#3A8EF6",
        "primary-violet": "#6F3AFA",
        "pure-blue": "#1678F2",
        "light-blue": "#65A8FB",
        "pure-white": "#FFFFFF",
        "alice-blue": "#F2F7FF",
        "ship-cove": "#6C87AE"
      }
    },
  },
  plugins: [],
}

