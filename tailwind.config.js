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
      },
      fontFamily: {
        "sans": "Sora",
        "body": "Poppins"
      },
      dropShadow: {
        "3xl": "0px 8px 23px rgba(65, 132, 247, 0.24)",
        "4xl": "0px 24px 32px -3px rgba(3, 9, 50, 0.04)"
      },
      backgroundImage: {
        "player": "url('./src/assets/images/player.png')"
      },
      spacing: {
        "567": "35.4375rem",
        "283": "17.71875rem",
        "346": "21.625rem",
        "485": "30.3125rem",
        "843": "52.6875rem"
      }
    },
  },
  plugins: [],
}

