/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            "cherry-bomb-one": ['Cherry Bomb One', 'cursive'],
            "fira-sans": ['Fira Sans', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
